'use strict'
//localstorage

  //Comprobar si el localstorage es compatible con nuestro navegador
  if (typeof(Storage) !== 'undefined') {
    console.log("localstorage dispobible");
  }else {
    console.log("localstorage incompatible");
  }

  //Guardar datos
   localStorage.setItem("nombre de usuario", "Leo");

   //Recuperar Elemento
   document.querySelector("#peliculas").innerHTML=localStorage.getItem("nombre de usuario");

   //Guardar Objetos
   var usuario = {
     nombre: "Leonardo Hernández",
     email: "leo9622@gmail.com",
     web: "www.google.com"
   };

   localStorage.setItem("usuario", JSON.stringify(usuario));

   //Recuperar Objetos
   var userjs = JSON.parse(localStorage.getItem("usuario"));

   console.log(userjs);
   document.querySelector("#datos").append(userjs.nombre+" - "+userjs.email);

   //localStorage.removeItem("usuario");
   localStorage.clear();
