```js
function isPangram(string) {
  const letters = new Set(
    string
      .toLowerCase()
      .replace(/[^a-z]/g, '')
      .split('')
  );
  return letters.size === 26;
}
```
**Временная сложность**:`O(n)` (26 вызовов includes(), каждый O(n)).
> [!info]- Объяснение:
>- **string.toLowerCase()**: Преобразует строку в нижний регистр, чтобы игнорировать регистр букв.
>- .**replace(/[^a-z]/g, ''):** Удаляет все символы, не являющиеся буквами (пробелы, цифры, знаки препинания и т.д.), с помощью регулярного выражения.
>- .**split(''):** Преобразует строку в массив символов.
>- **new Set(...):** Создает множество, которое автоматически удаляет дубликаты, оставляя только уникальные буквы.
>- **letters.size** === 26: Проверяет, содержит ли множество ровно 26 букв (число букв в английском алфавите).
---
Другие способы реализации
```js

function isPangram(string){
  return 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .every((x) => string.toLowerCase().includes(x));
}
```

```js
function isPangram(string){
      // 97 - 122

    let allLetters = ''

    for (let i = 97; i <= 122; i++) {
        allLetters += String.fromCharCode(i)
    }

    const set = new Set(allLetters)

    for (char of string.toLocaleLowerCase().replaceAll(' ', '')) {

        if (set.has(char)) {
            set.delete(char)
        }

    }

    if (set.size === 0) return true
    return false
}
```