'use strict'

/*Calculadora
- Pida dos números por pantalla
- Si se ingresa un número mal que los vuelva a pedir
- Mostrar el resultado 
*/

var num1 = parseInt(prompt("Introduce el primer número:", 0));
var num2 = parseInt(prompt("Introduce el segundo número:", 0));

while (num1 < 0 || num2 < 0 || isNaN(num1) || isNaN(num2)) {
    num1 = parseInt(prompt("Introduce el primer número:", 0));
    num2 = parseInt(prompt("Introduce el segundo número:", 0));
}

var resultado = "La suma es: " + (num1 + num2) + "<br/>"
    + "La resta es: " + (num1 - num2) + "<br/>"
    + "La multiplicación es: " + (num1 * num2) + "<br/>"
    + "La división es: " + (num1 / num2) + "<br/>";

var resultadoAlerta = "La suma es: " + (num1 + num2) + "\n"
    + "La resta es: " + (num1 - num2) + "\n"
    + "La multiplicación es: " + (num1 * num2) + "\n"
    + "La división es: " + (num1 / num2) + "\n";

document.write(resultado)
alert(resultadoAlerta);


