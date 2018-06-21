'use strict'

/*
Utilizando un bucle, mostrar la suma y la media de los números introducidos 
*/

var suma = 0;
var contador = 0;

do {
    var numero = parseInt(prompt("Introduce números hasta que metas uno negativo", 0));
    if (isNaN(numero)) {
        numero = 0;
    } else if (numero >= 0) {
        //suma = suma + numero;
        suma += numero;
    }
} while (numero >= 0);