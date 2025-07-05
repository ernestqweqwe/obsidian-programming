## Основные особенности

- Виртуализация DOM-элементов (рендерятся только видимые)
- Поддержка вертикальной и горизонтальной прокрутки
- Подходит для таблиц, списков, выпадающих списков и т.п.
- Без зависимости от React — можно использовать вне его
- Высокая производительность, адаптирована под большие объемы данных

---

## Пример использования

```tsx
import { useVirtualizer } from '@tanstack/react-virtual'

const rowVirtualizer = useVirtualizer({
  count: rows.length,
  getScrollElement: () => parentRef.current,
  estimateSize: () => 35,
})

return (
  <div ref={parentRef} style={{ overflow: 'auto', height: '400px' }}>
    <div style={{ height: `${rowVirtualizer.getTotalSize()}px`, position: 'relative' }}>
      {rowVirtualizer.getVirtualItems().map(virtualRow => (
        <div
          key={virtualRow.key}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            transform: `translateY(${virtualRow.start}px)`,
            height: `${virtualRow.size}px`,
            width: '100%',
          }}
        >
          {rows[virtualRow.index]}
        </div>
      ))}
    </div>
  </div>
)
```

---

## Основные хуки

- `useVirtualizer()` — основной хук виртуализации
    
- `getVirtualItems()` — список видимых элементов
    
- `getTotalSize()` — общая высота/ширина виртуализированного контента
    

---
# TanStack Virtual — как работает под капотом

## 1. Расчет видимой области

Библиотека отслеживает `scrollTop`/`scrollLeft` и размеры контейнера (`clientHeight`/`clientWidth`) с помощью `ResizeObserver` и событий `scroll`.

---

## 2. Определение видимых элементов

На основе:
- `estimateSize()` — предполагаемый размер элемента
- текущей позиции скролла
- количества элементов (`count`)

рассчитывается диапазон видимых индексов (`startIndex` → `endIndex`), включающий **overscan** — буфер за пределами экрана для плавности.

---

## 3. Вычисление позиций

Каждому элементу назначается `start` и `size`. Если размеры известны точно — хранятся в `measurementsCache`. Если нет — берется `estimateSize()`.

Позиции рассчитываются кумулятивно:  
`start[i] = start[i - 1] + size[i - 1]`

---

## 4. Absolute-позиционирование

Рендерятся только элементы из `getVirtualItems()` и оборачиваются в контейнер с высотой `getTotalSize()`, а каждый элемент позиционируется через `transform: translateY(...)`.

---

## 5. Обновление

При скролле или изменении размеров:
- вызывается повторный расчет диапазона и позиций
- обновляется список `virtualItems`

---

## Вывод

В основе `TanStack Virtual` — **scroll-based windowing**, расчет видимых индексов и `absolute`-рендеринг. Это минимизирует количество DOM-узлов и сохраняет плавность при работе с большими объемами данных.
```