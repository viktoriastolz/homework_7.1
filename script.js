"use strict";

function createCounter() {
  let count = 0; // Локальная переменная

  return function (num) {
      count += num;
      return count; // Возвращает текущее значение
  };
}

const sum = createCounter();

console.log(sum(4)); // 4
console.log(sum(6)); // 10
console.log(sum(10)); // 20
console.log(sum(7)); // 27








