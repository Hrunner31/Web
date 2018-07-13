'use strict'

//DOM Document object Model

//var caja = document.getElementById("miCaja");

/*var caja = document.querySelector("#miCaja");

function cambiaColor(color) {
    caja.style.color = color;
}

caja.innerHTML = "¡Texto desde JavaScript!";
caja.style.background = "red";
caja.style.padding = "20px";
//caja.style.color = "white";

console.log(caja);
*/

//conseguir elementos por su etiqueta

var todosLosDivs = document.getElementsByTagName("div");
for (let valor in todosLosDivs) {
    var parrafo = document.createElement("p");
    var texto = document.createTextNode(todosLosDivs[valor].textContent);
    parrafo.appendChild(texto);
    document.querySelector("#miSeccion").appendChild(parrafo);
};

//todosLosDivs[2].innerHTML = "Hola modificaron mi contenido por JS";

//console.log(todosLosDivs);

//Conseguir elementos por su clase css
var divRojo = document.getElementsByClassName("rojo");
var divAmarillo = document.getElementsByClassName("amarillo");

divAmarillo[0].style.background = "yellow";


for (let div in divRojo) {
    if (divRojo[div].className == "rojo") {
        divRojo[div].style.background = "red";
    }
}



