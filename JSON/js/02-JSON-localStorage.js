'use strict'

//LocalStorage


//COmprobar disponibilidad del localStorage
if (typeof(Storage) !== 'undefined') {
    console.log("LocalStorage disponible");
}
else   {
    console.log("LocalStorage incompatible");
}

//Guardar datos
localStorage.setItem("Titulo", "Curso Máster en JavaScript");

//Recuperar elemento
document.querySelector("#peliculas").innerHTML = localStorage.getItem("Titulo");

//Guardar objetos 
var usuario = {
    nombre: "Ana",
    email: "json@js.co",
    web: "https://www.json.co"
};

localStorage.setItem("usuario", JSON.stringify(usuario));

//recuperar json del localStorage y poderlo usar
var userJs = JSON.parse(localStorage.getItem("usuario"));

console.log(userJs);
document.querySelector("#datos").append(userJs.web + " - " + userJs.nombre);

//Borrar localStorage por item
localStorage.removeItem("usuario");

//Borrar localStorage completo
localStorage.clear("usuario");