'use strict'

const numberLong = 3;

//let userNumber = Number(prompt("Inserire un numero a 4 cifre"));

//let userNumberList = [];

function NumberBetter() {
    let userNumber = Number(prompt("Inserire un numero a 4 cifre"));

    let userNumberList = [];

    for (
        let i = 0, len = userNumber.length;
        i < len;
        i += 1
    ) {
        userNumberList.push(+userNumber.charAt(i));
    }

    console.log(userNumberList);
}

NumberBetter();