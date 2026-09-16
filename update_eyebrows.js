const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.tsx')) results.push(file);
    }
  });
  return results;
}

const files = walk('./src');
let count = 0;
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let original = content;
  
  if (content.includes('font-mono text-sm text-ng-orange tracking-widest uppercase')) {
    if (f.includes('PageHero.tsx')) {
      content = content.replace(
        /className=\"font-mono text-sm text-ng-orange tracking-widest uppercase mb-8 relative z-10\"/g,
        'className={`font-mono text-sm text-ng-orange tracking-widest uppercase mb-8 relative z-10 ${align === \\'center\\' ? \\'\\' : \\'ml-1\\'}`}'
      );
    } else {
      content = content.replace(
        /className=\"font-mono text-sm text-ng-orange tracking-widest uppercase /g,
        'className=\"font-mono text-sm text-ng-orange tracking-widest uppercase ml-1 '
      );
      content = content.replace(
        /className=\"font-mono text-sm text-ng-orange tracking-widest uppercase\"/g,
        'className=\"font-mono text-sm text-ng-orange tracking-widest uppercase ml-1\"'
      );
    }
    
    if (content !== original) {
      fs.writeFileSync(f, content);
      console.log('Updated: ' + f);
      count++;
    }
  }
});
console.log('Total files updated: ' + count);
