'use strict';

const countTriangularNumber = (num) => {
  if (num === 1) {
    return 1;
  }
  return num + (countTriangularNumber(num-1));
};

console.log(countTriangularNumber(5));

const countTriangularNumberIterative = (num) => {
  let count = 0;
  for (let i = num; i > 0; i--) {
    count += i;
  }
  return count;
};

console.log(countTriangularNumberIterative(1));