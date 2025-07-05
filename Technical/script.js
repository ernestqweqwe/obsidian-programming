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

  let folderContent = `**${folder.toUpperCase()}**<br><br>`;
  files.forEach(file => {
    console.log(file);
    folderContent += `[[${file}]]<br>`;
  });
  
  folders.push(folderContent);
});

// Сортируем папки по количеству контента (от большего к меньшему)
folders.sort((a, b) => b.length - a.length);

// Распределяем папки по колонкам балансируя по объему контента
const leftColumn = [];
const rightColumn = [];
let leftSize = 0;
let rightSize = 0;

folders.forEach(folder => {
  if (leftSize <= rightSize) {
    leftColumn.push(folder);
    leftSize += folder.length;
  } else {
    rightColumn.push(folder);
    rightSize += folder.length;
  }
});

// Создаем таблицу
let result = '| Колонка 1 | Колонка 2 |\n';
result += '|-----------|----------|\n';

// Заполняем таблицу построчно
const maxRows = Math.max(leftColumn.length, rightColumn.length);
for (let i = 0; i < maxRows; i++) {
  const left = leftColumn[i] || '';
  const right = rightColumn[i] || '';
  result += `| ${left} | ${right} |\n`;
}

fs.writeFileSync(outputFile, result, 'utf-8');
console.log('Создан:', outputFile);