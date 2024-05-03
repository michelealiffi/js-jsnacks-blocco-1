'use strict'

let number = [10, 55, 60, 20, 80, 14, 27, 33, 94, 47];

let sum = 0;

for (let i = 0; i < number.length; i++) {
    sum += number[i];
}

let calcMiddle = sum / number.length;

console.log("La media aritmetica è: " + calcMiddle);