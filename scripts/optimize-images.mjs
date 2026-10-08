import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.join(__dirname, "..", "public", "images");

const QUALITY = 82;

async function main() {
  if (!fs.existsSync(imagesDir)) {
    console.error("Missing public/images");
    process.exit(1);
  }

  const files = fs.readdirSync(imagesDir).filter((f) => f.endsWith(".png"));
  if (files.length === 0) {
    console.log("No PNG files to convert.");
    return;
  }

  for (const file of files) {
    const input = path.join(imagesDir, file);
    const output = path.join(imagesDir, file.replace(/\.png$/i, ".webp"));
    const before = fs.statSync(input).size;
    await sharp(input).webp({ quality: QUALITY }).toFile(output);
    const after = fs.statSync(output).size;
    const pct = Math.round((1 - after / before) * 100);
    console.log(`${file} → ${path.basename(output)} (${pct}% smaller)`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
