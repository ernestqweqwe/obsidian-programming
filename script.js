const fs = require('fs');
const path = require('path');

const rootDir = './topics';
const outputFile = './combined.md';

let result = '';

fs.readdirSync(rootDir).forEach(folder => {
  const folderPath = path.join(rootDir, folder);
  if (!fs.statSync(folderPath).isDirectory()) return;

  const files = fs.readdirSync(folderPath).filter(f => f.endsWith('.md'));
  if (files.length === 0) return;

  result += `${folder}\n---\n`;

  files.forEach(file => {
    const filePath = path.join(folderPath, file);
    const relativePath = path.relative(rootDir, filePath).replace(/\\/g, '/');
    const link = `[[${relativePath}]]`;
    const content = fs.readFileSync(filePath, 'utf-8');
    result += `${link}\n${content}\n---\n`;
  });
});

fs.writeFileSync(outputFile, result, 'utf-8');
console.log('Собрано в', outputFile);
