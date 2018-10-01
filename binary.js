'use strict';

function binary(num, count=0) {
  if (num === 0 && count !== 0) {
    return '';
  }

  if (num === 0) {
    return '0';
  }

  count++;
  const binaryNum = Math.floor(num%2);
  return binary(Math.floor(num/2), count) + binaryNum;
}

const binaryIterative = (num) => {
  if (num === 0) {
    return '0';
  }

  const arr = [];

  // while (num > 0) {
  //   console.log(num);
  //   const binaryNum = Math.floor(num%2);
  //   arr.push(binaryNum);
  //   num = Math.floor(num/2);
  // }

  for (let i = num; i > 0; i = Math.floor(i/2)) {
    const binaryNum = Math.floor(i%2);
    // console.log(i);
    console.log(binaryNum);
    arr.push(binaryNum);
  }

  return arr.join('');
};

console.log(binaryIterative(5));
// console.log(binary(5));