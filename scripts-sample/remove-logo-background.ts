import sharp from "sharp";

// ---- Config ----
const SRC = "/home/z/my-project/upload/icon-512.png";
const OUT = "/home/z/my-project/public/nexflow-logo.png";
// عرض الشريط المحذوف لكل جهة (الإطار اللامع فوق ويمين أعرض)
const BAND_TOP = 24;
const BAND_RIGHT = 24;
const BAND_LEFT = 20;
const BAND_BOTTOM = 14;
const FLOOD_MAX = 85; // حد الـ flood-fill للكحلي
const BG_LEVEL = 90; // أقل من كده = خلفية (target alpha 0)
const SOLID_LEVEL = 160; // أكبر من كده = رسمة صلبة (target alpha 255)
const PASSES = 30; // تكرارات نشر الشفافية للجوه
const MARGIN = 28;

async function main() {
  const { data, info } = await sharp(SRC)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const W = info.width;
  const H = info.height;
  const C = info.channels;
  const N = W * H;

  const R = new Uint8Array(N);
  const G = new Uint8Array(N);
  const B = new Uint8Array(N);
  const M = new Uint8Array(N);
  for (let i = 0; i < N; i++) {
    R[i] = data[i * C];
    G[i] = data[i * C + 1];
    B[i] = data[i * C + 2];
    M[i] = Math.max(R[i], G[i], B[i]);
  }

  // ---- 1) square boundary detection ----
  const NONE_IN = 9999;
  const NONE_OUT = -9999;
  const leftEdge = new Int32Array(H).fill(NONE_IN);
  const rightEdge = new Int32Array(H).fill(NONE_OUT);
  const topEdge = new Int32Array(W).fill(NONE_IN);
  const bottomEdge = new Int32Array(W).fill(NONE_OUT);
  const TH_NONBLACK = 15;

  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      if (M[y * W + x] > TH_NONBLACK) { leftEdge[y] = x; break; }
    }
    for (let x = W - 1; x >= 0; x--) {
      if (M[y * W + x] > TH_NONBLACK) { rightEdge[y] = x; break; }
    }
  }
  for (let x = 0; x < W; x++) {
    for (let y = 0; y < H; y++) {
      if (M[y * W + x] > TH_NONBLACK) { topEdge[x] = y; break; }
    }
    for (let y = H - 1; y >= 0; y--) {
      if (M[y * W + x] > TH_NONBLACK) { bottomEdge[x] = y; break; }
    }
  }

  // ---- 2) outside + band removal ----
  const alpha = new Float32Array(N).fill(255);
  const removed = new Uint8Array(N);
  let bandCount = 0;
  const bandSeeds: number[] = [];

  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const idx = y * W + x;
      const dTop = y - topEdge[x];
      const dBottom = bottomEdge[x] - y;
      const dLeft = x - leftEdge[y];
      const dRight = rightEdge[y] - x;
      const isOutside = dTop < 0 || dBottom < 0 || dLeft < 0 || dRight < 0;
      const inBand =
        dTop <= BAND_TOP ||
        dBottom <= BAND_BOTTOM ||
        dLeft <= BAND_LEFT ||
        dRight <= BAND_RIGHT;
      if (isOutside || inBand) {
        removed[idx] = 1;
        alpha[idx] = 0;
        bandCount++;
      } else {
        bandSeeds.push(idx);
      }
    }
  }
  console.log(`band removed: ${bandCount} px`);

  // ---- 3) navy flood fill ----
  const visited = new Uint8Array(N);
  const stack: number[] = [];
  const trySeed = (idx: number) => {
    if (!removed[idx] && !visited[idx] && M[idx] <= FLOOD_MAX) {
      visited[idx] = 1;
      stack.push(idx);
    }
  };
  for (const idx of bandSeeds) trySeed(idx);
  trySeed(256 * W + 296);
  trySeed(256 * W + 452);
  trySeed(150 * W + 420);
  while (stack.length) {
    const idx = stack.pop()!;
    const x = idx % W;
    const y = (idx / W) | 0;
    if (x > 0) trySeed(idx - 1);
    if (x < W - 1) trySeed(idx + 1);
    if (y > 0) trySeed(idx - W);
    if (y < H - 1) trySeed(idx + W);
  }
  let flooded = 0;
  for (let i = 0; i < N; i++) {
    if (visited[i]) { alpha[i] = 0; flooded++; }
  }
  console.log(`navy flooded: ${flooded} px`);

  // ---- 4) iterative alpha propagation (eats rim glow inward) ----
  // target حسب السطوع، مع انتشار من الشفاف للداخل +30 لكل لفة
  const target = new Float32Array(N);
  for (let i = 0; i < N; i++) {
    if (alpha[i] === 0) { target[i] = 0; continue; }
    const t = ((M[i] - BG_LEVEL) / (SOLID_LEVEL - BG_LEVEL)) * 255;
    target[i] = Math.max(0, Math.min(255, t));
  }
  for (let pass = 0; pass < PASSES; pass++) {
    const next = Float32Array.from(alpha);
    for (let y = 0; y < H; y++) {
      for (let x = 0; x < W; x++) {
        const idx = y * W + x;
        if (alpha[idx] === 0) continue;
        let minNb = 255;
        if (x > 0) minNb = Math.min(minNb, alpha[idx - 1]);
        else minNb = 0;
        if (x < W - 1) minNb = Math.min(minNb, alpha[idx + 1]);
        if (y > 0) minNb = Math.min(minNb, alpha[idx - W]);
        else minNb = 0;
        if (y < H - 1) minNb = Math.min(minNb, alpha[idx + W]);
        if (minNb < 255) {
          next[idx] = Math.min(alpha[idx], Math.max(target[idx], minNb + 28));
        }
      }
    }
    alpha.set(next);
  }
  console.log(`propagation done (${PASSES} passes)`);

  // ---- 5) stray speck cleanup: components < 40px with mean M < 150 ----
  const comp = new Int32Array(N).fill(-1);
  const compStats: { size: number; maxM: number }[] = [];
  for (let i = 0; i < N; i++) {
    if (alpha[i] === 0 || comp[i] !== -1) continue;
    const id = compStats.length;
    let size = 0;
    let maxM = 0;
    const s = [i];
    comp[i] = id;
    while (s.length) {
      const idx = s.pop()!;
      size++;
      maxM = Math.max(maxM, M[idx]);
      const x = idx % W;
      const y = (idx / W) | 0;
      const nbs = [
        x > 0 ? idx - 1 : -1,
        x < W - 1 ? idx + 1 : -1,
        y > 0 ? idx - W : -1,
        y < H - 1 ? idx + W : -1,
      ];
      for (const nb of nbs) {
        if (nb >= 0 && alpha[nb] > 0 && comp[nb] === -1) {
          comp[nb] = id;
          s.push(nb);
        }
      }
    }
    compStats.push({ size, maxM });
  }
  let specks = 0;
  for (let i = 0; i < N; i++) {
    if (alpha[i] === 0) continue;
    const st = compStats[comp[i]];
    if (st.size < 40 && st.maxM < 150) {
      alpha[i] = 0;
      specks++;
    }
  }
  console.log(`components: ${compStats.length}, speck pixels removed: ${specks}`);

  // ---- 6) save ----
  const outBuf = Buffer.alloc(N * 4);
  for (let i = 0; i < N; i++) {
    outBuf[i * 4] = R[i];
    outBuf[i * 4 + 1] = G[i];
    outBuf[i * 4 + 2] = B[i];
    outBuf[i * 4 + 3] = Math.round(alpha[i]);
  }
  const keyed = sharp(outBuf, { raw: { width: W, height: H, channels: 4 } });
  const trimmed = await keyed
    .trim({ background: { r: 0, g: 0, b: 0, alpha: 0 }, threshold: 20 })
    .toBuffer({ resolveWithObject: true });
  console.log(`trimmed: ${trimmed.info.width}x${trimmed.info.height}`);

  await sharp(trimmed.data, {
    raw: { width: trimmed.info.width, height: trimmed.info.height, channels: 4 },
  })
    .extend({
      top: MARGIN, bottom: MARGIN, left: MARGIN, right: MARGIN,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png({ compressionLevel: 9 })
    .toFile(OUT);
  console.log(`saved: ${OUT}`);
}

main().catch(console.error);
