'use strict'

/*Mostrar todos los números divisores de un número ingresado.*/

var numero = parseInt(prompt("Ingresa un número:", 0));

for (let i = 1; i < numero; i++) {
    if ((numero % i) == 0) {
        console.log("Divisor: " + i);
    }
}