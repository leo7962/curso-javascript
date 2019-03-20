'use strict'

//Fetch (AJAX) y peticiones a servicios / apis rest
var div_usuarios = document.querySelector("#usuarios");
var usuarios = [];

fetch('https://jsonplaceholder.typicode.com/users')
  .then(data => data.json())
  .then(data => {
    usuarios = data;
    console.log(usuarios);

    usuarios.map((user, i) =>{
      let nombre = document.createElement('h3');

      nombre.innerHTML = i + '. '+ user.name + " Username:" + user.username;

      div_usuarios.appendChild(nombre);

      document.querySelector(".loading").style.display ='none';
    });
  });
