'use strict'
//Condicional if
//si A es igual a B entonces ejecuta algo
var edad1= 3;
var edad2= 12;

// if (edad1 > edad2) {
//   console.log("edad uno es mayor que edad dos");
// }else {
//   console.log("edad dos es mayor que edad uno");
// }

/*operadores relacionales:
    Mayor: >
    Menor: <
    mayor o igual: >=
    menor o igual: <=
    igual: ==
    distinto: !=
    */

var edad = 19;
var nombre = "Leonardo Hernandez";

if (edad >= 18) {
  console.log(nombre+ " tiene "+ edad + " años, es mayor de edad");

  if (edad <= 33) {
    console.log('Todavia eres Milenial');
  }else if(edad >=70){
    console.log("eres anciano");
  }else {
    console.log("Ya no eres Milenial");
  }

}else {
  console.log(nombre+ " tiene "+ edad + " años, es menor de edad");
}

/*
//Operadores lógicos
 and: &&
 or: ||
 negacion !
 */
//Negación
 var year = 2038;

 if (year != 2016) {
   console.log("El año no es 2016 realmente es:  "+year);
 }
 // And
if (year >= 2000 && year <= 2020 && year !=2018 ) {
  console.log("Estamos en la era actual");
}else {
  console.log("estamos en la era Postmoderna");
}

//or
if (year == 2018 || (year == 2018 && year == 2028)) {
  console.log("El año se acaba en 8");
}else {
  console.log('Año no registrado');
}
