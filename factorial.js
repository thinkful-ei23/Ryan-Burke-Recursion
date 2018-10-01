'use strict';

const factorial = (num) => {
  if (num === 1) {
    return 1;
  }

  return num * factorial(num-1);

};

const factorialIterative = (num) => {
  if (num === 0) {
    return 0;
  }
  let count = 1;
  for (let i = num; i > 0; i--) {
    count *= i;
  }
  return count;
};
console.log(factorialIterative(3));
