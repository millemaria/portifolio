const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const inputDir = path.join(__dirname, 'ezgif-split');
const outputDir = path.join(__dirname, 'public', 'sequence');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(inputDir).filter(file => file.endsWith('.png')).sort();

(async () => {
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const numStr = String(i + 1).padStart(4, '0');
    // Save as webp
    const outPath = path.join(outputDir, `${numStr}.webp`);
    await sharp(path.join(inputDir, file))
      .webp({ quality: 80 })
      .toFile(outPath);
    console.log(`Converted ${file} to ${numStr}.webp`);
  }
  console.log('Conversion complete.');
})();
