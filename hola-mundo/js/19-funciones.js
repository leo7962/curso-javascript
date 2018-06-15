'use strict'

/*
Una función es un grupo de orden con orden concreto y reutilizable de instrucciones
*/
//funciones
function porConsola(numero1,numero2){
  console.log("Suma: " + (numero1+numero2));
  console.log("Resta: " + (numero1-numero2));
  console.log("multiplicación: " + (numero1*numero2));
  console.log("División: " + (numero1/numero2));
  //console.log(mostrar);
  console.log("***************");
}
function porPantalla(numero1, numero2){
  document.write("Suma: " + (numero1+numero2)+ "</Br>");
  document.write("Resta: " + (numero1-numero2)+ "</Br>");
  document.write("multiplicación: " + (numero1*numero2)+ "</Br>");
  document.write("División: " + (numero1/numero2)+ "</Br>");
  //document.write(mostrar+ "</Br>");
  document.write("***********************************************"+ "</Br>");
}

function calculadora(numero1, numero2, mostrar = false) {
  //conjunto de instrucciones
  if (mostrar == false) {
      porConsola(numero1, numero2);
  }else {
      porPantalla(numero1, numero2);
  }
  return true;
}

//lamar la función

 calculadora(12, 8, true);
 calculadora(98, 2);
 calculadora(789654341,65476143216541321654,true);

/*
for (var i = 1; i <=10; i++) {
  console.log(i);
  calculadora(i, 8);
}
*/
