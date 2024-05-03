'use strict'

function NumberBetter() {
    let userNumber = prompt("Inserire un numero a 4 cifre");

    const numberLong = 4;

    if(userNumber.length == numberLong) {
    
        let sum = 0;

        for (let i = 0, len = userNumber.length; i < len; i += 1) {
            
            sum += Number(userNumber.charAt(i));
        }
        console.log(sum);

    } else {
        console.log('Non penso proprio');
    }
}

NumberBetter();