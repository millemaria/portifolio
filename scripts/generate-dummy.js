const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const outputDir = path.join(__dirname, 'public/sequence');
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

(async () => {
  for (let i = 1; i <= 89; i++) {
    const numStr = String(i).padStart(4, '0');
    
    const r = Math.floor((i / 89) * 20);
    const g = Math.floor((i / 89) * 10);
    const b = Math.floor((i / 89) * 40) + 10;
    
    const svgText = `
      <svg width="1920" height="1080">
        <rect width="100%" height="100%" fill="rgb(${r},${g},${b})" />
        <ellipse cx="960" cy="540" rx="${(i / 89) * 400 + 100}" ry="${(i / 89) * 300 + 50}" fill="rgba(200,100,255,0.05)" />
        <text x="50%" y="540" font-size="80" font-family="sans-serif" font-weight="bold" fill="rgba(255,255,255,0.1)" text-anchor="middle" dominant-baseline="middle">USER WILL PROVIDE ${numStr}.webp</text>
        <text x="50%" y="640" font-size="30" font-family="sans-serif" fill="rgba(255,255,255,0.05)" text-anchor="middle" dominant-baseline="middle">Awwwards Scrollytelling Demo</text>
      </svg>
    `;

    await sharp(Buffer.from(svgText))
      .webp({ quality: 80 })
      .toFile(path.join(outputDir, `${numStr}.webp`));
    console.log(`Generated sequence placeholder ${numStr}.webp`);
  }
  console.log('Finished generating mock WebP sequence.');
})();
