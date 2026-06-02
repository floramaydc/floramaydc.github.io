import fs from 'node:fs';
import path from 'node:path';
import { imageSize } from 'image-size';

const cache = /* @__PURE__ */ new Map();
function normalizePublicPath(src) {
  return src.replace(/^\/+/, "");
}
function getPublicImageSize(src) {
  const key = normalizePublicPath(src);
  if (!key) return null;
  if (cache.has(key)) return cache.get(key) ?? null;
  const absPath = path.join(process.cwd(), "public", key);
  if (!fs.existsSync(absPath)) {
    cache.set(key, null);
    return null;
  }
  try {
    const size = imageSize(absPath);
    if (size.width && size.height) {
      const dims = { width: size.width, height: size.height };
      cache.set(key, dims);
      return dims;
    }
  } catch (e) {
  }
  cache.set(key, null);
  return null;
}

export { getPublicImageSize as g };
