import sharp from "sharp";
import { readdir, stat } from "node:fs/promises";
import path from "node:path";

const staticJobs = [
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

async function collectPngFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectPngFiles(fullPath)));
    } else if (entry.name.endsWith(".png")) {
      files.push(fullPath);
    }
  }

  return files;
}

async function runJob(job) {
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

for (const job of staticJobs) {
  await runJob(job);
}

const iconPngs = await collectPngFiles("public/assets/icons");
for (const input of iconPngs) {
  await runJob({
    input,
    output: input.replace(/\.png$/, ".webp"),
    resize: { width: 2048, height: 2048, fit: "inside", withoutEnlargement: true },
    webp: { quality: 82 },
  });
}
