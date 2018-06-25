'use strict'

//Plantillas de texto 

var nombre = prompt("METE TU NOMBRE", "");
var apellidos = prompt("METE TUS APELLIDOS", "");

//var texto = "Mi nombre es: " + nombre + " Mis apellidos son: " + apellidos;

//document.write(texto);

var texto = `
    <h1>Hola que tal</h1>
    <h3>Mi nombre es: ${nombre}</h3>
    <h3>Mi apellido es: ${apellidos}</h3>
`;