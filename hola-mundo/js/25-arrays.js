'use strict'
//Arreglos o matrices es una colecciòn de tipos de datos en una sola variables

var nombres =["Leonardo Hernández", "Monica Juliana", "Manuel Alejandro", "Damaris", 52, true];

var lenguajes = new Array("PHP","JS","Go", "Java","c#", "pascal","C++");

// console.log(nombres.length);
// console.log(lenguajes);

// var elemento = parseInt(prompt("¿Qué elemento del array quieres?",0));
// if (elemento >= nombres.length) {
//   alert("Introduce el numero correcto menor que: "+ nombres.length);
// }else {
//   alert("El elemento seleccionado es: "+nombres[elemento]);
// }

document.write ("<h1>Lenguajes de programaciòn del 2018 </h1>");

document.write("<ul>")
// for (var i = 0; i < lenguajes.length; i++) {
//   document.write("<li>"+lenguajes[i]+"</li>");
// }

// lenguajes.forEach((elemento,indice)=>{
//   document.write("<li>"+indice+" "+elemento+"</li>");
// });

for (var lenguaje in lenguajes) {
  document.write("<li>"+lenguajes[lenguaje]+"</li>");
}

document.write("</ul>");

//busquedas en Un array

var busqueda = lenguajes.findIndex(lenguaje => lenguaje == "JS");
console.log(busqueda);

var precios = [10, 20 , 30, 50, 80, 12]
var busqueda = precios.some(precio => precio >= 10);
console.log(busqueda);
