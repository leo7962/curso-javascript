'use strict'
//Arreglos o matrices es una colecciòn de tipos de datos en una sola variables

var nombres =["Leonardo Hernández", "Monica Juliana", "Manuel Alejandro", "Damaris", 52, true];

var lenguajes = new Array("PHP","JS","Go", "Java","c#", "pascal","C++");

console.log(nombres.length);
console.log(lenguajes);

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

lenguajes.forEach((elemento,indice)=>{
  document.write("<li>"+indice+" "+elemento+"</li>");
});

document.write("</ul>");
