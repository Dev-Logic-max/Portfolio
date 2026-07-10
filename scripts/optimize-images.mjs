// One-off: optimize the heavy source PNGs into web-ready WebP.
// Run: node scripts/optimize-images.mjs
import sharp from "sharp";
import { mkdirSync } from "node:fs";
import path from "node:path";

const IMG = path.join(process.cwd(), "public", "images");
mkdirSync(IMG, { recursive: true });

const jobs = [
  // Clean plain-background portrait → tall portrait + square avatar
  {
    src: "Abdulrehman Profile Potrait.png",
    out: "portrait.webp",
    width: 900,
    quality: 82,
  },
  {
    src: "Abdulrehman Profile Potrait.png",
    out: "avatar.webp",
    width: 480,
    height: 480,
    fit: "cover",
    position: "top",
    quality: 84,
  },
  // Office / environmental shot → wide feature image
  {
    src: "Abdulrehman Profile Image.png",
    out: "portrait-office.webp",
    width: 1100,
    quality: 80,
  },
];

for (const j of jobs) {
  const input = path.join(IMG, j.src);
  const output = path.join(IMG, j.out);
  let pipe = sharp(input).rotate();
  pipe = pipe.resize({
    width: j.width,
    height: j.height,
    fit: j.fit ?? "inside",
    position: j.position,
    withoutEnlargement: true,
  });
  const info = await pipe.webp({ quality: j.quality }).toFile(output);
  console.log(`✓ ${j.out}  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)}KB`);
}

console.log("done.");
