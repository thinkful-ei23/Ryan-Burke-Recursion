'use strict';

// Input: [1, 2, 3]
// Output: [2, 4, 6]

const doubleArray = (arr) => {
  if (!arr.length) {
    return [];
  }
  const newElement = arr[0] * 2;
  return [newElement, ...doubleArray(arr.slice(1))];

};
const array = [20,4,3];

const doubleArrayIterative = (arr) => {

  return arr.map(element => {
    return element * 2;
  });
};

console.log(doubleArrayIterative([20,4,3]));