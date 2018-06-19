'use strict'

//Son arrays dentro de un arrays

var categoria = ['Acción', 'Terror', 'Comedia'];
var peliculas = ['La verdad duele', 'La vida es bella', 'Gran Torino'];

peliculas.sort();
peliculas.reverse();

console.log(peliculas);

var cine = [categoria, peliculas];

// console.log(cine[0][1]);
// console.log(cine[1][2]);

// var elemento = prompt("Introduce tu pelicula: ");
// do {
//   elemento = prompt("Introduce tu pelicula: ");
//   peliculas.push(elemento);
// } while (elemento != "Acabar");
// peliculas[0] = undefined;
// peliculas.pop();

var indice = peliculas.indexOf('Gran Torino');
if (indice > -1) {
  peliculas.splice(indice, 1);
}



var peliculas_String = peliculas.join();

var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", ");
console.log(indice);

console.log(cadena_array);
