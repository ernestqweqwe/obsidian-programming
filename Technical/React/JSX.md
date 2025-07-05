JSX (JavaScript XML) — это расширение синтаксиса JavaScript, которое позволяет писать HTML-подобную структуру прямо в JavaScript коде. JSX был разработан Facebook для использования с React и обеспечивает более наглядный и интуитивно понятный способ описания пользовательского интерфейса.

Можно ли писать код на React без JSX?
Да, абсолютно. JSX — это синтаксический сахар для функции React.createElement()
```js
// JSX
const element = <h1 className="greeting">Привет, мир!</h1>;


// Альтернативный метод написания
const element = React.createElement(
  'h1',
  { className: 'greeting' },
  'Привет, мир!'
);
```