'use strict';

fetch ('https://raw.githubusercontent.com/oneeyedman/terms/master/terms.js')
  .then(response => response.json())
  .then(data => {
    writeMyArray(data.results);
  })
  

function writeThis(word, number) {
  for (let i=0; i<number; i++) {
  console.log(word);
   }
}

function writeMyArray(arr) {
  for (const array of arr) {
    writeThis(array.text, array.total);
  }
}





// function getRandomNumber(max) {
//     return Math.ceil(Math.random() * max);
//   }

// ten('Aguacate', getRandomNumber(10));
// ten('Pizza', getRandomNumber(10));
//console.log(writeThis(writeMyArray(myWordList), number2));




