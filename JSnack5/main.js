'use strict'

let userNumberList = [];
let userNumber = 0;

for(let i = 1; i <= 6; i++) {
    userNumber = Number(prompt(`Inserire un numero ${i}`));
    console.log(userNumber);
    if(userNumber % 2) {
        userNumberList.push(userNumber);
    } else {
        console.log('Numero pari non va bene');
    }
}

console.log(userNumberList);