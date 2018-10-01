//reverse string
'use strict';

const reverseString = (string) => {

  if (string.length === 0) {
    return '';
  }
  const length = string.length;
  return string[length-1] + reverseString(string.slice(0, string.length - 1));

};

const reverseStringIterative = (string) => {
  const newArr = [];
  for (let i = string.length; i > 0; i--) {
    newArr.push(string[i-1]);
  }
  return newArr.join('');
};

console.log(reverseStringIterative('hello'));

