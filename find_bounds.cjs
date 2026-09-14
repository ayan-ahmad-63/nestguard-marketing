const fs = require('fs');
const { PNG } = require('pngjs');

const files = ['logo-mark.png', 'logo-row.png', 'logo-stacked.png'];

files.forEach(file => {
  const data = fs.readFileSync(`src/imports/${file}`);
  const png = PNG.sync.read(data);
  let minX = png.width, minY = png.height, maxX = 0, maxY = 0;
  
  for (let y = 0; y < png.height; y++) {
    for (let x = 0; x < png.width; x++) {
      const idx = (png.width * y + x) << 2;
      const alpha = png.data[idx + 3];
      if (alpha > 10) { // non-transparent
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  
  const w = maxX - minX + 1;
  const h = maxY - minY + 1;
  
  console.log(`${file}:`);
  console.log(`  minx: ${(minX / png.width).toFixed(4)}`);
  console.log(`  miny: ${(minY / png.height).toFixed(4)}`);
  console.log(`  cw: ${(w / png.width).toFixed(4)}`);
  console.log(`  ch: ${(h / png.height).toFixed(4)}`);
  console.log(`  aspect: ${(w / h).toFixed(4)}\n`);
});
