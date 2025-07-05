**Условие** 
```js 
/**
На вход подается массив, состоящий из перелетов.
Нужно отсортировать его так, чтобы сложился правильный путь.
**/

const flights = [
  {from: 'Riga', to: 'Deli'}, 
  {from: 'London', to: 'Moscow'},
  {from: 'NY', to: 'London'}, 
  {from: 'Moscow', to: 'Spb'},
  {from: 'Spb', to: 'Riga'}
]

function sortRoute (flights) { ...code }
sortRoute(flights);
```

Решение
```js
function sortRoute(flights) {
    // создаем мапы для уменьшения сложности алгоритма для поиска старта
    // Map нет смысла юзать тк у нас ключи будут простые строки
    
  const fromTo = {};
  const toFrom = {};

  // заполняем обе мапы в один проход
  for (const flight of flights) {
    fromTo[flight.from] = flight.to;
    toFrom[flight.to] = flight.from;
  }


  let start = null;
  // Шаг 2: Ищем старт — такой from, которого нет среди to (т.е. нет в toFrom)
  for (const from in fromTo) {
    if (!toFrom(from) {
      start = from;
      break;
    }
  }

//   уточняем у интервьера надо ли что-то нам делать если старта нет
//   if (start === null) {
//     throw new Error('Не найден начальный пункт маршрута');
//   }

  // нам ненужно сортировать исходный массив тк нам проще собрать новый из мапы
  const result = [];
  // создаем начальную точку пути и сетаем в нее стартовую
  let current = start;

  while (fromTo[current]) {
    result.push({ from: current, to: fromTo[current] });
    // переключаем след точку нашего пути
    current = fromTo[current];
  }

  return result;
```