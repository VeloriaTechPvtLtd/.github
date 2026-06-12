import sharp from "sharp";
import { stat } from "node:fs/promises";

const jobs = [
  {
    input: "public/assets/hero-platform-visual.png",
    output: "public/assets/hero-platform-visual.webp",
    resize: { width: 1360, withoutEnlargement: true },
    webp: { quality: 82 },
  },
  {
    input: "public/logo.png",
    output: "public/logo.webp",
    resize: { width: 128, height: 128, fit: "contain" },
    webp: { quality: 85 },
  },
  {
    input: "public/logo.png",
    output: "public/logo.png",
    resize: { width: 128, height: 128, fit: "contain" },
    png: { compressionLevel: 9, palette: true },
  },
  {
    input: "public/images/arenzo.png",
    output: "public/images/arenzo.webp",
    resize: { width: 960, withoutEnlargement: true },
    webp: { quality: 82 },
  },
];

for (const job of jobs) {
  const source =
    job.input === job.output
      ? await sharp(job.input).toBuffer()
      : job.input;

  let pipeline = sharp(source);
  if (job.resize) {
    pipeline = pipeline.resize(job.resize);
  }
  if (job.webp) {
    await pipeline.webp(job.webp).toFile(job.output);
  } else if (job.png) {
    await pipeline.png(job.png).toFile(job.output);
  }

  const [before, after] = await Promise.all([
    stat(job.input),
    stat(job.output),
  ]);
  console.log(
    `${job.output}: ${(before.size / 1024).toFixed(0)}KB -> ${(after.size / 1024).toFixed(0)}KB`,
  );
}
