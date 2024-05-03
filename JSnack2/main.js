'use strict'

const userPrompt1 = prompt('Inserire prima parola');
const userPrompt2 = prompt('Inserire seconda parola');

if(userPrompt1.length > userPrompt2.length) {
    console.log(userPrompt2);
    console.log(userPrompt1);
} else {
    console.log(userPrompt1);
    console.log(userPrompt2);
}
