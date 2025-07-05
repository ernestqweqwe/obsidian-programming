`_exhaustiveCheck` — это паттерн для проверки, что в `switch` или `if-else` по `type` или `tag` были обработаны **все** возможные варианты типа (обычно `union type` в TypeScript).

Часто используется так:

```
function handle(value: SomeUnion) {
  switch (value.type) {
    case 'a': return doA(value)
    case 'b': return doB(value)
    default:
      const _exhaustiveCheck: never = value
      throw new Error(`Unhandled case: ${value}`)
  }
}
```

**Цель:** если добавится новый вариант в union, TypeScript выдаст ошибку, т.к. `value` больше не `never`.

**Вывод:** `_exhaustiveCheck` — это хак для type-level защиты от пропущенных кейсов.