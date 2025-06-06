1. Debounce (устранение дребезга)  
   - Откладывает выполнение функции, пока не пройдет указанное время с последнего вызова.  
   - Используется для событий с высокой частотой (ввод в поле, ресайз окна).  
   - Применение: экономия ресурсов, предотвращение лишних вызовов.  

2. Throttle (ограничение частоты вызовов)  
   - Гарантирует выполнение функции не чаще, чем заданный интервал.  
   - Используется для событий типа scroll, resize, mousemove.  
   - Применение: контроль нагрузки на систему, снижение количества обработчиков.
---

Реализация `debounce`  

```js
function debounce(func, delay) {
  let timeoutId;
  
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Пример использования
function handleSearch(query) {
  console.log('Поиск:', query);
}

const debouncedSearch = debounce(handleSearch, 300);

```

1. При каждом вызове очищает предыдущий таймер.  
2. Запускает новый таймер с задержкой.  
3. Функция выполняется только после завершения паузы между вызовами.  
---
Реализация `trottle`

```js
function throttle(func, delay) {
  let lastCall = 0;
  
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      func(...args);
      lastCall = now;
    }
  };
}

// Пример использования
function handleScroll(position) {
  console.log('Позиция скролла:', position);
}

const throttledScroll = throttle(handleScroll, 500);
```

- **throttle** принимает функцию (func) и интервал (delay) в миллисекундах.
- Возвращает новую функцию, которая позволяет вызывать func не чаще, чем раз в delay миллисекунд.
- Переменная lastCall хранит время последнего вызова функции.
- Если текущее время (now) минус время последнего вызова (lastCall) больше или равно delay, функция выполняется, и lastCall обновляется.
- Используется ...args для передачи всех аргументов в func.