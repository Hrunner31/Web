'use strict'

/*Imprimir la tabla de multiplicar del número ingresado*/

/*var numero = parseInt(prompt("Ingresa un número:", 1));

document.write("<h1>Tabla del " + numero + "</h1>");
for (let i = 1; i <= 10; i++) {
    document.write(numero + " x " + i + " = " + (numero * i) + "<br/>");
    console.log(numero + " x " + i + " = " + (numero * i));
}
*/

for (let c = 1; c <= 10; c++) {
    document.write("<h1>Tabla del " + c + "</h1>")
    for (let i = 1; i <= 10; i++) {
        document.write(c + " x " + i + " = " + (c * i) + "<br/>");
    }
}