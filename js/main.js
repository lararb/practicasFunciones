'use strict';

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }

function ten(word, number) {
    for (let i=0; i<number; i++) {
    console.log(word,);
    }
}
ten('Patata', getRandomNumber(10));
ten('Aguacate', getRandomNumber(10));
ten('Pizza', getRandomNumber(10));