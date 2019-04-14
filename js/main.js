'use strict';

fetch ('https://raw.githubusercontent.com/oneeyedman/terms/master/terms.js')
  .then(response => response.json())
  .then(data => {
    for (const recorrido of data.results) {
      writeThis(recorrido.text, recorrido.total)
    }
  })
  
function writeThis(word, number) {
  for (let i=0; i<number; i++) {
  console.log(word);
   }
}

// function writeMyArray(arr) {
//   for (const array of arr) {
//     //console.log(array.text); 
//     //console.log(array.total);
//     writeThis(array.text, array.total);
//   }
// }

// writeMyArray(myWordList);







// function getRandomNumber(max) {
//     return Math.ceil(Math.random() * max);
//   }

// ten('Aguacate', getRandomNumber(10));
// ten('Pizza', getRandomNumber(10));
//console.log(writeThis(writeMyArray(myWordList), number2));




