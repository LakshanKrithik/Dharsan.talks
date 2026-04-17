const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInDir(fullPath);
    } else if (fullPath.endsWith('.css') || fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      content = content.replace(/var\(--gold/g, 'var(--accent');
      content = content.replace(/btn-gold/g, 'btn-accent');
      content = content.replace(/gold-divider/g, 'accent-divider');
      content = content.replace(/gold-word/g, 'accent-word');
      
      fs.writeFileSync(fullPath, content, 'utf8');
      console.log('Updated ' + fullPath);
    }
  }
}

replaceInDir(path.join(process.cwd(), 'src'));
