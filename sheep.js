'use strict';

/* 3 - Another sheep jump over the fence
2 - Another sheep jump over the fence
1 - Another sheep jump over the fence

*/

const sheep = (num) => {
  if (num === 0) {
    return;
  }
  console.log(`${num} - Another sheep jump over the fence`);
  sheep(num - 1);
};

// sheep(3);

// iterative

const iterativeSheep = (num) => {

  for (let i = 0; i < num; i++) {
    console.log(`${i + 1} - Another sheep jump over the fence`);
  }
};

iterativeSheep(4);

