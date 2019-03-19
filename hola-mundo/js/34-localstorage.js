'use strict'

//localstorage

//Comprobar si el localstorage es compatible con nuestro navegador
if (typeof(Storage) !== 'undefined') {
  console.log("localstorage dispobible");
}else {
  console.log("localstorage incompatible");
}

//Guardar datos

localStorage.setItem("titulo", "Curso de Unity");
