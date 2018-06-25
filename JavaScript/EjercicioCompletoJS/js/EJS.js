'use strict'

window.addEventListener("load", () => {

    var formulario = document.querySelector("#formulario");
    var box_dashed = document.querySelector(".dashed");
    box_dashed.style.display = "none";

    formulario.addEventListener('submit', function () {
       console.log("Evento submit capturado");

       var nombre = document.querySelector("#nombre").value;
       var apellido = document.querySelector("#apellidos").value;
       var edad = document.querySelector("#edad").value;

       box_dashed.style.display = "block";

       var datosUsuario = [nombre, apellido, edad];

       for (let i in datosUsuario) {
        var parrafo = document.createElement("p");
        parrafo.append(datosUsuario[i]);
        box_dashed.append(parrafo);
       }
    });

});