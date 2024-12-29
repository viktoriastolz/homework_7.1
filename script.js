"use strict";

function createCounter() {
  let count = 0; 

  return function (num) {
      count += num;
      return count; 
  };
}

const sum = createCounter();

console.log(sum(4)); // 4
console.log(sum(6)); // 10
console.log(sum(10)); // 20
console.log(sum(7)); // 27








