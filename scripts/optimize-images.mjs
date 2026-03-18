import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const inputDir = path.resolve('public/images');
const sizes = [480, 800, 1200, 1920];

async function run() {
  const files = await fs.readdir(inputDir);
  for (const file of files) {
    if (!file.match(/\.(jpg|jpeg|png)$/i)) continue;
    
    const inputPath = path.join(inputDir, file);
    const parsed = path.parse(file);
    const isHero = parsed.name === 'hero';
    
    console.log(`Processing ${file}...`);
    
    for (const size of sizes) {
      if (size === 1920 && !isHero) continue; // Only hero needs 1920
      
      const outputPath = path.join(inputDir, `${parsed.name}-${size}w.webp`);
      await sharp(inputPath)
        .resize({ width: size, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(outputPath);
      console.log(`  Created ${parsed.name}-${size}w.webp`);
    }
  }
}

run().catch(console.error);
