'use strict'

var edad1 = 30;
var edad2 = 12;

if (edad1 > edad2) {
    console.log(edad1 + " es mayor que " + edad2)
}
else{
    console.log(edad1 + " es menor que " + edad2)
}

var edad = 19;
var nombre = "David Suarez";

if (edad >= 18) {
    console.log(nombre + " tiene " + edad + " años, es mayor de edad");
    if (edad == 33) {
        console.log("Todavia eres milenial");
    }
    else if(edad >= 70){
        console.log("Eres una persona de la tercera edad");
    }
    else{
        console.log("Ya no eres milenial");
    }
}
else{
    console.log(nombre + " tiene " + edad + " años, es menor de edad");
}

//OPeradores lógicos
/*
AND: &&
OR: ||
Negacion: !
*/

var year = 2028;

//Negación
if (year != 2016) {
    console.log("El año no es 2016, realmente es: " + year);
}

//AND
if (year >= 2000 && year <= 2020) {
    console.log("Estamos en la era actual");
}
else{
    console.log("Estamos en la era post moderna");
}

// OR
if (year == 2008 || (year >= 2018 && year == 2028)) {
    console.log("El año acaba en 8");
}
else{
    console.log("Año no registrado");
}