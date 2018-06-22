'use strict'

/*
Programa que pida 2 números y que diga cual es el mayor, el menor y si son iguales
PLUS: Si los datos ingresados no son un número o son menores o iguales a cero, volverlos a pedir
*/

var numero1 = parseInt(prompt("Ingresa el primer número: ", 0));
var numero2 = parseInt(prompt("Ingresa el segundo número: ", 0));

while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {
    numero1 = parseInt(prompt("Ingresa el primer número: ", 0));
    numero2 = parseInt(prompt("Ingresa el segundo número: ", 0));
}

if (numero1 == numero2) {
    alert("Los números son iguales");
}
else if (numero1 > numero2) {
    alert("El número: " + numero1 + " es mayor, el número: " + numero2 + " es el menor");
} else {
    alert("El número: " + numero2 + " es mayor, el número: " + numero1 + " es el menor");
}