'use strict'

let sum = 0;

for(let i = 0; i < 10; i++) {
    sum += Number(prompt(`Inserire un numero ${i}`));
}

console.log(sum);