## Общие свойства контейнера

> [!info]- display: grid | inline-grid
> 
> - Задаёт контейнер как грид-контейнер.
> - `grid`: блочный уровень.
> - `inline-grid`: строчный уровень.

> [!info]- grid
> 
> - Сокращение для `grid-template` и `grid-auto-flow`.
> - Пример: `grid: 100px / 1fr 1fr / row dense`.

## Свойства шаблона сетки

> [!info]- grid-template-columns
> 
> - Определяет количество и размеры столбцов сетки.
> - Пример: `grid-template-columns: 100px 1fr 2fr` — три столбца с указанными размерами.
> - Может использовать `px`, `fr`, `%`, `auto`, `minmax()`, `repeat()`.

> [!info]- grid-template-rows
> 
> - Определяет количество и размеры строк сетки.
> - Пример: `grid-template-rows: 50px auto` — две строки с указанными размерами.
> - Аналогично `grid-template-columns`.

> [!info]- grid-template-areas
> 
> - Задаёт именованные области сетки для размещения элементов.
> - Пример: `grid-template-areas: "header header" "main sidebar"` — определяет области с именами `header`, `main`, `sidebar`.
> - Используется с `grid-area` у дочерних элементов.

> [!info]- grid-template
> 
> - Сокращение для `grid-template-rows`, `grid-template-columns`, `grid-template-areas`.
> - Пример: `grid-template: 100px 200px / 1fr 2fr / "header header" "main sidebar"`.

## Свойства неявной сетки

> [!info]- grid-auto-columns
> 
> - Задаёт размер автоматически создаваемых столбцов (неявная сетка).
> - Пример: `grid-auto-columns: 100px` — все неявные столбцы будут 100px.
> - Работает, если элементы выходят за пределы явной сетки.

> [!info]- grid-auto-rows
> 
> - Задаёт размер автоматически создаваемых строк (неявная сетка).
> - Пример: `grid-auto-rows: 50px` — все неявные строки будут 50px.

> [!info]- grid-auto-flow
> 
> - Контролирует, как автоматически размещаются элементы в сетке.
> - `row` (по умолчанию): заполняет строки.
> - `column`: заполняет столбцы.
> - `dense`: заполняет пробелы, игнорируя порядок.

## Выравнивание и отступы

> [!info]- gap | row-gap | column-gap
> 
> - Задаёт промежутки между элементами сетки.
> - `gap: 10px` — общий отступ.
> - `row-gap`: отступ между строками.
> - `column-gap`: отступ между столбцами.

> [!info]- justify-items
> 
> - Выравнивание содержимого всех элементов сетки вдоль оси столбцов (inline-axis).
> - `start`: к началу ячейки.
> - `end`: к концу ячейки.
> - `center`: по центру.
> - `stretch` (по умолчанию): растягивает содержимое.

> [!info]- align-items
> 
> - Выравнивание содержимого всех элементов сетки вдоль оси строк (block-axis).
> - `start`, `end`, `center`, `stretch` — аналогично `justify-items`.

> [!info]- place-items
> 
> - Сокращение для `align-items` и `justify-items`.
> - Пример: `place-items: center start`.

> [!info]- justify-content
> 
> - Выравнивание всей сетки вдоль оси столбцов, если есть свободное пространство.
> - `start`, `end`, `center`, `space-between`, `space-around`, `space-evenly`, `stretch`.

> [!info]- align-content
> 
> - Выравнивание всей сетки вдоль оси строк, если есть свободное пространство.
> - `start`, `end`, `center`, `space-between`, `space-around`, `space-evenly`, `stretch`.

> [!info]- place-content
> 
> - Сокращение для `align-content` и `justify-content`.
> - Пример: `place-content: center space-between`.

## Свойства элементов сетки

> [!info]- grid-column-start
> 
> - Задаёт начальную линию столбца для элемента сетки.
> - Пример: `grid-column-start: 2` — начинается со второй линии столбца.
> - Может использовать числа, имена линий или `span`.

> [!info]- grid-column-end
> 
> - Задаёт конечную линию столбца для элемента сетки.
> - Пример: `grid-column-end: 4` — заканчивается на четвёртой линии.

> [!info]- grid-row-start
> 
> - Задаёт начальную линию строки для элемента сетки.
> - Пример: `grid-row-start: 1` — начинается с первой линии строки.

> [!info]- grid-row-end
> 
> - Задаёт конечную линию строки для элемента сетки.
> - Пример: `grid-row-end: 3` — заканчивается на третьей линии.

> [!info]- grid-column
> 
> - Сокращение для `grid-column-start` и `grid-column-end`.
> - Пример: `grid-column: 2 / 4` — занимает столбцы со второй по четвёртую линию.

> [!info]- grid-row
> 
> - Сокращение для `grid-row-start` и `grid-row-end`.
> - Пример: `grid-row: 1 / 3` — занимает строки с первой по третью линию.

> [!info]- grid-area
> 
> - Задаёт положение элемента через линии или именованную область.
> - Сокращение для `grid-row-start`, `grid-column-start`, `grid-row-end`, `grid-column-end`.
> - Пример: `grid-area: 1 / 2 / 3 / 4` или `grid-area: header`.

> [!info]- justify-self
> 
> - Переопределяет `justify-items` для конкретного элемента.
> - `start`, `end`, `center`, `stretch`.

> [!info]- align-self
> 
> - Переопределяет `align-items` для конкретного элемента.
> - `start`, `end`, `center`, `stretch`.

> [!info]- place-self
> 
> - Сокращение для `align-self` и `justify-self`.
> - Пример: `place-self: center start`.