'use strit'

/*Hacer un programa que muestre todos los números entre dos números introducidos por el usuario*/

var num1 = parseInt(prompt("Introduce el primer número:", 0));
var num2 = parseInt(prompt("Introduce el segundo número:", 0));

document.write("<h1>De " + num1 + " a " + num2 + " están estos números:</h1>");
for (let i = num1; i <= num2; i++) {
    document.write(i + "<br/>");
}