const fs = require('fs');
const path = require('path');

const rootDir = '.'; // запускай в папке "Технические вопросы"
const outputFile = './Список вопросов.md';

let folders = [];

// Собираем все папки и их файлы
fs.readdirSync(rootDir).forEach(folder => {
  const folderPath = path.join(rootDir, folder);
  if (!fs.statSync(folderPath).isDirectory()) return;
  if (folder.startsWith('.')) return; // игнор скрытых папок

  const files = fs.readdirSync(folderPath).filter(f => f.endsWith('.md'));
  if (files.length === 0) return;

  const folderData = {
    name: folder,
    files: files,
    size: files.length
  };
  
  folders.push(folderData);
});

// Сортируем по размеру (от большего к меньшему)
folders.sort((a, b) => b.size - a.size);

// Распределяем по колонкам балансируя размер
const leftColumn = [];
const rightColumn = [];
let leftSize = 0;
let rightSize = 0;

folders.forEach(folder => {
  if (leftSize <= rightSize) {
    leftColumn.push(folder);
    leftSize += folder.size;
  } else {
    rightColumn.push(folder);
    rightSize += folder.size;
  }
});

// Создаем результат
let result = '# Список вопросов\n\n';
result += '## Левая колонка\n\n';

// Левая колонка
leftColumn.forEach(folder => {
  console.log(folder.name);
  result += `### ${folder.name.toUpperCase()}\n`;
  folder.files.forEach(file => {
    result += `- [[${file}]]\n`;
  });
  result += '\n';
});

result += '---\n\n## Правая колонка\n\n';

// Правая колонка
rightColumn.forEach(folder => {
  console.log(folder.name);
  result += `### ${folder.name.toUpperCase()}\n`;
  folder.files.forEach(file => {
    result += `- [[${file}]]\n`;
  });
  result += '\n';
});

fs.writeFileSync(outputFile, result, 'utf-8');
console.log('Создан:', outputFile);