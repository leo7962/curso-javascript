'use strict'

/* hacer un programa
pida 6 numeros y los guarde en un array
tiene que mostrar el array entero / todos sus elementos en el cuerpo de la página y consola
ordenarlo y mostrarlo
invertir su orden y mostrarlo
mostrar cuantos elementos tiene el array
busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice
*/

//var numeros = new Array(6);
function mostrarArray(elementos, textoCustom = "") {
  document.write("<h1>El contenido del array"+textoCustom+"</h1>");
  document.write("<ul>")
  elementos.forEach((elemento, index) =>{
    document.write("<li>"+elemento+"</li>");
  });
  document.write("</ul>");
}

var numeros = [];

//pidiendo los numeros
for (var i = 0; i <= 5; i++) {
  //numeros[i] = parseInt(prompt("Introduce un número", 0))
numeros.push(parseInt(prompt("Introduce un número", 0)));

}
//Mostrando por consola
console.log(numeros);

//Mostrando en el cuerpo de la pagina
mostrarArray(numeros);

// ordenar y mostrarlo
numeros.sort(function (a,b) {
  return a-b;
});
mostrarArray(numeros, " Ordenado");

//invertir y mostrar
numeros.reverse();
mostrarArray(numeros, " Revertir");

//Cuantos elementos contiene el array
document.write("<h1>El array tiene: "+numeros.length+"</h1>");

//Busqueda

var busqueda = parseInt(prompt("Busca un número", 0));

var posicion = numeros.findIndex(numero => numero == busqueda);

if (posicion && posicion != -1) {
  document.write("<hr><h1>Encontrado </h1></hr>");
  document.write("<h1>La posiciòn de la busqueda: "+posicion+ "</h1><hr>");
}else {
    document.write("<h1>No Encontrado </h1></hr>");
}
