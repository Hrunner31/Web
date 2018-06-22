'use strict'

var edad = 18;
var imprime = "";

switch (edad) {
    case 18:
        imprime = "Eres mayor de edad";
        break;
    case 25:
        imprime = "Eres Adulto";
        break;
    case 40:
        imprime = "Crisis de los 40";
        break;
    case 75:
        imprime = "Eres una persona de la tercera edad";
        break;
    default:
        imprime = "Tu edad no esta entre las opcines.";
        break;
}

console.log(imprime);
