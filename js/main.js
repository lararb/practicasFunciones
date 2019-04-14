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

function writeMyArray(myWordList) {
  for (const array of myWordList) {
    console.log(array.text); 
    console.log(array.total);
  }
}
writeMyArray(myWordList);


function writeThis(word, number) {
   for (let i=0; i<number; i++) {
   console.log(word);
    }
}
writeThis(writeMyArray(myWordList));



// function getRandomNumber(max) {
//     return Math.ceil(Math.random() * max);
//   }

// ten('Aguacate', getRandomNumber(10));
// ten('Pizza', getRandomNumber(10));
//console.log(writeThis(writeMyArray(myWordList), number2));




