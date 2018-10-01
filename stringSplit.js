'use strict';

const stringSplit = (string, by, arr=[], count=0) => {
  if (!string.length) {
    return arr;
  }

  if (by === '') {
    arr.push(string[0]);
    return stringSplit(string.slice(1), by, arr, count);
  }

  if (string[0] !== by) {
    if (arr[count] === undefined) {
      arr[count] = '';
    }
    arr[count] = arr[count] + string[0];
    return stringSplit(string.slice(1), by, arr, count);
  } else {
    count++;
    return stringSplit(string.slice(1), by, arr, count);
  }
};

console.log(stringSplit('hello i am', ' '));

// const stringSplitIterative = (string, by) => {
//   const arrToReturn = [];
//   if (by === '') {
    
//   }

//   for (let i = 0; i < string.length; i++) {
//     if (string[i] !== by) {
//       arrToReturn.push(string[i]);
//     }

//   }

// };
