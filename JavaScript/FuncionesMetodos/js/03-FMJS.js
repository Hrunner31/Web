'use strict'

//Funciones anonimas 
//Es una función que no tiene nombre

/*var pelicula = function (nombre) {
    return "La pelicula es: " + nombre;
}*/

function sumame(num1, num2, sumaYMuestra, sumaPorDos) {
    var sumar = num1 + num2;

    sumaYMuestra(sumar);
    sumaPorDos(sumar);
    return sumar;
}

sumame(5, 7, dato => {
    console.log("La suma es: ", dato);
},
    dato => {
        console.log("La suma por dos es: ", (dato * 2));
    }
);

//console.log(sumame(4, 5));