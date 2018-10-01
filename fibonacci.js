'use strict';

const fibonacci = (num, arr=[1,1]) => {
  if (num === 1 || num === 2) {
    return 1;
  }

  if (num === arr.length) {
    // return the last item of the array
    return arr[arr.length-1];
  }
  // add a new item that is the sum of the previous two
  arr.push(arr[arr.length-2] + arr[arr.length-1]);

  // put the new array into the function
  return fibonacci(num, arr);

};

const fibonacciIterative = (num) => {
  const fib = [];

  for (let i = 0; i < num; i++) {
    if (i === 0 || i === 1) {
      fib.push(1);
    } else {
      fib.push(fib[i-2] + fib[i-1]);
    }
  }
  return fib[fib.length-1];
};

console.log(fibonacciIterative(7));