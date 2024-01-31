const a1 = Symbol('Ivan');
const a2 = Symbol('Ivan');

const userData = {};

userData[a1] = 34;
userData[a2] = 55;

// Создание итератора для объекта userData
userData[Symbol.iterator] = function() {
  const keys = Object.getOwnPropertySymbols(this);
  let index = 0;

  // Метод next() возвращает следующее значение итератора
  return {
    next: () => {
      return index < keys.length ?
        { value: this[keys[index++]], done: false } :
        { done: true };
    }
  };
};

// Использование итератора для итерации по userData
const iterator = userData[Symbol.iterator]();
let result = iterator.next();
while (!result.done) {
  console.log(result.value);
  result = iterator.next();
}
