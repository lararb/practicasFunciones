'use strict';

const myWordList =  [
  {
    text: 'Pencil',
    total: 6
  },
  {
    text: 'Thermo',
    total: 2
  },
  {
    text: 'TV',
    total: 8
  },
  {
    text: 'Phone',
    total: 4
  }
];

function writeThis(word, number) {
  for (let i=0; i<number; i++) {
  console.log(word);
   }
}

function writeMyArray(arr) {
  for (const array of arr) {
    //console.log(array.text); 
    //console.log(array.total);
    writeThis(array.text, array.total);
  }
}

writeMyArray(myWordList);







// function getRandomNumber(max) {
//     return Math.ceil(Math.random() * max);
//   }

// ten('Aguacate', getRandomNumber(10));
// ten('Pizza', getRandomNumber(10));
//console.log(writeThis(writeMyArray(myWordList), number2));




