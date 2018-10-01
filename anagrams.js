'use strict';

const anagram = (string, arr=[]) => {
  const possibilites = factorial(string.length);
  if (possibilites === arr.length) {
    return arr;
  }

  let firstLetter = string[0];
  // if you have a string of x Length, scramble the rest
  for (let i = 0; i < string.length - 1; i++) {
    const toScramble = string.substring(1, string.length);
    // ea
    // we want ea and ae
    console.log(toScramble);
  }

  let newString = string.concat(firstLetter);
  return anagram(newString.slice(1), arr);

};


function getAllPermutations(string) {
  var results = [];

  if (string.length === 1) {
    results.push(string);
    return results;
  }

  for (var i = 0; i < string.length; i++) {
    var firstChar = string[i];
    var charsLeft = string.substring(0, i) + string.substring(i + 1);
    var innerPermutations = getAllPermutations(charsLeft);
    for (var j = 0; j < innerPermutations.length; j++) {
      results.push(firstChar + innerPermutations[j]);
    }
  }
  return results;
}

console.log(getAllPermutations('tea'));

// tea
// put [t, e, a ] in an array
// build all the new words in a new array from that

// push each of these into an array
// 
// tea[0] + tea[1] + tea[2]
// tea[0] + tea[2] + tea[1]
// tea[1] + tea[0] + tea[2]
// tea[1] + tea[2] + tea[0]
// tea[2] + tea[0] + tea[1]
// tea[2] + tea[1] + tea[0]

// 6 combinations
//factorial(string.length)

// tea
// tae
// eat
// eta
// ate
// aet