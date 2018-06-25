'use strict'

//Multidimencionales

var categorias = ['Acción', 'Terror', 'Comedia'];
var peliculas = ['La verdad duele', 'La vida es bella', 'Gran torino'];

var cine = [categorias, peliculas];

/*console.log(cine[0][1]);
console.log(cine[1][2]);*/

var elemento = "";

do{
    elemento = prompt("Ingrese una nueva pelicula", "");
    peliculas.push(elemento); //Forma de agregar un elemento a un array

} while (elemento != "ACABAR")

peliculas.pop(); //ELimina el ultimo elemnto del array

console.log(peliculas);

var peliculas_string = peliculas.join();

console.log(peliculas_string);

var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", ");

document.write("<ul>")
for(let cadena in cadena_array){
    document.write("<li>" + cadena_array[cadena] + "</li>")
}
document.write("</ul>")

console.log(cadena_array);

var precios = [10, 20, 30, 40]

var busqueda = peliculas.find(pelicula => pelicula == "Batman") // Busqueda un elemento de la lista
//findIndex => Trae el indice del elemento del cual se está buscando.
var busquedaPrecio = precios.some(precio => precio >= 20);
//some => Arroja un true o false según el valor de la condición o la pregunta que se está realizando

console.log(busquedaPrecio);

console.log(busqueda);