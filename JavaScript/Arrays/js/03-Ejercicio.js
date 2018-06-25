'use strict'

/*
1. Pedir 6 numeros por pantalla y los ingrese en un array
2. Mostrar el array entero en el cuerpo de la pagina y en la consola
3. Ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice
*/

var numeros = new Array(6);
//var numeros = [];

function mostrarArray(elemtos, textoCUstom = "") {
    document.write("<h1>Contenido del Array " + textoCUstom + "</h1>");
    document.write("<ul>")
    elemtos.forEach((element, index) => {
        document.write("<li><strong>" + numeros[index] + "</strong></h1>")
    });
    document.write("</ul>")
}

document.write("<h1>Contenido del Array</h1>");
document.write("<ul>")

for (let i = 0; i <= 5; i++) {
    numeros[i] = parseInt(prompt("Ingresa un número", 0));
    //numeros.push(parseInt(prompt("Ingresa un número", 0)));
    document.write("<li><strong>" + numeros[i] + "</strong></h1>"); //Mostrar array en pantalla
};

document.write("</ul>")

console.log(numeros);

//ordenar y mostrar
//numeros.sort()
console.log(numeros.sort(function (a, b) {
    return a - b;
}));

mostrarArray(numeros.sort(function (a, b) {
    return a - b;
}), "ordenado");

//Invertir y Mostrar
mostrarArray(numeros.reverse(), "invertido");

//Contar elementos
document.write("<h1>El array tiene: " + numeros.length + " elementos</h1>")


//Busqueda
var busqueda = parseInt(prompt("Busca un número", 0));

var posicion = numeros.findIndex(numero => numero == busqueda);

if (posicion && posicion != -1) {
    document.write("<h1>Posición de la busqueda: " + posicion + "</h1>");
}
else{
    document.write("<h1>No encontrado</h1>");
}


