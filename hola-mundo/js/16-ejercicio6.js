'use strict'
/*
un programa que nos diga si el número es par o impar, debe tener un prompt itene que comprobar
que si el numero es valido que nos pida de nuevo
*/

var number = parseInt(prompt("Introduce un número",0));

while (isNaN(number)) {
  number = parseInt(prompt("Introduce un número",0));
}

if (number%2 ==0) {
  alert("Es un numero par");
} else {
  alert("Es impar");
}
