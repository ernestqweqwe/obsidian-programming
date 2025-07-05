`@tanstack/react-virtual` — библиотека для виртуализации больших списков и таблиц с высокой производительностью.

---

## Зачем нужен
Рендерит только видимую часть контента (и небольшой буфер), экономит DOM и ресурсы при тысячах элементов.

---

## API (через `useVirtualizer()`)

```ts
const virtualizer = useVirtualizer({
  count,
  getScrollElement: () => scrollRef.current,
  estimateSize: () => 40,
})
````

---

## Главное в `virtualizer`

- `getVirtualItems()` — массив только видимых элементов
    
- `getTotalSize()` — вся высота/ширина списка
    
- `scrollToIndex(index)` — скролл к нужному элементу
    
- `measureElement(el)` — ручное измерение размера
    

---

## Под капотом

- отслеживает `scrollTop`, `clientHeight`
    
- рассчитывает `start`, `end`, `size` для видимых элементов
    
- рендерит их в контейнер с `position: absolute`, `translateY`
    
- применяет `overscan` для плавности
    

---

## Вывод

`TanStackVirtual` — мощный инструмент виртуализации, легко интегрируется и масштабируется. Используй при работе с таблицами, списками и логами в реальном времени.