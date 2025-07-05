Singleton гарантирует, что в приложении существует только один экземпляр класса, и предоставляет к нему глобальную точку доступа.

```js
class Singleton {
  constructor() {
    // Проверяем, существует ли уже экземпляр
    if (Singleton.instance) {
      return Singleton.instance;
    }
    // Если экземпляра нет, создаем его
    this.data = null;
    Singleton.instance = this;
  }

  // Метод для получения экземпляра
  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  // Пример метода для работы с данными
  setData(value) {
    this.data = value;
  }

  getData() {
    return this.data;
  }
}

// Пример использования
const instance1 = Singleton.getInstance();
instance1.setData("Hello, Singleton!");

const instance2 = Singleton.getInstance();
console.log(instance2.getData()); // Выведет: Hello, Singleton!
console.log(instance1 === instance2); // Выведет: true (это один и тот же объект)
```

### Объяснение:

1. **Один экземпляр**: Поле Singleton.instance хранит единственный экземпляр класса. Если он уже существует, конструктор возвращает его.
2. **Статический метод**: getInstance() — это точка доступа для получения экземпляра Singleton.
3. **Пример использования**: Демонстрирует, что обе переменные (instance1 и instance2) ссылаются на один и тот же объект, а данные, установленные через один экземпляр, доступны через другой.
					1. **Простота**: Код использует возможности JavaScript для создания Singleton без лишних сложностей