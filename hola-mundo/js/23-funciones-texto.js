'use strict'
//Transformación de textos

var numero = 44;
var texto1 = "Bienvenido al curso de JavasScript curso de Leonardo"
var texto2 = "Es cool";

// var dato = numero.toString();
//   dato = texto1.toLowerCase();
//   dato = texto2.toUpperCase();
//
// console.log(dato);
//
// //Calcular longitud
// var nombre = "Leonardo Fabián Hernández Peña";
// //var nombre =["Hola", "Hola"];
//
// //console.log(nombre.length);
//
// //concatenar textos
//
// //var textoTotal = texto1+texto2;
// var textoTotal = texto1.concat(" ",texto2);
// console.log(textoTotal);

var busqueda = texto1.indexOf("curso");
var busqueda = texto1.lastIndexOf("curso");
var busqueda = texto1.search("curso");
var busqueda = texto1.match(/curso/g);
var busqueda = texto1.substr(14,5);
var busqueda = texto1.charAt(44);
var busqueda = texto1.startsWith("Bien");
var busqueda = texto1.endsWith("Leonardo");
var busqueda = texto1.includes("JavasScript");
console.log(busqueda);
