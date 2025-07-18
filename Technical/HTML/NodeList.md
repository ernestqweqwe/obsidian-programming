**NodeList** — коллекция узлов DOM (элементы, текст, комментарии и т.д.), возвращаемая методами, такими как `document.querySelectorAll` или `element.childNodes`.

## Ключевые характеристики
- **Типы узлов**: Содержит любые узлы (`Element`, `Text`, `Comment` и др.).
- **Живая или статическая**:
  - Живая: обновляется при изменении DOM (например, `childNodes`).
  - Статическая: не обновляется (например, `querySelectorAll`).
- **Похожа на массив**: Имеет индексы и `length`, но не полноценный массив.
- **Поддержка перебора**: Имеет метод `forEach` и поддерживает `for...of`.

## Основные свойства и методы
- `length` — количество узлов.
- `item(index)` — возвращает узел по индексу.
- `forEach(callback)` — перебирает узлы.
- `entries()`, `keys()`, `values()` — возвращают итераторы для пар [индекс, узел], индексов или узлов.

## Отличия от HTMLCollection
- **NodeList**: Может быть статической или живой, содержит любые узлы, поддерживает `forEach`.
- **HTMLCollection**: Всегда живая, только элементы, без `forEach`.