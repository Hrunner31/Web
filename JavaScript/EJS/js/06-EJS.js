'use strict'

/*Realizar un programa que diga si un número es par o impar*/

var numero = parseInt(prompt("Ingresa un número:", 0));

while (isNaN(numero)) {
    numero = parseInt(prompt("Ingresa un número:", 0));
}

if ((numero % 2) == 0) {
    alert("Es un numero par");
}
else{
    alert("Es impar");
}