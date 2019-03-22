'use strict'

//Fetch (AJAX) y peticiones a servicios / apis rest
var div_usuarios = document.querySelector("#usuarios");
var div_usuario = document.querySelector("#usuario");


  getUsuarios()
    .then(data => data.json())
    .then(users => {
      listadoUsuarios(users.data);

      return getUsuario();
    })
    .then(data =>data.json())
    .then(user => {
      usuario(user.data);
    });

  function getUsuarios() {
    return fetch('https://reqres.in/api/users');
  }

  function getUsuario() {
    return fetch('https://reqres.in/api/users/2');
  }

  function listadoUsuarios(usuarios) {
    usuarios.map((user, i) =>{
      let nombre = document.createElement('h3');

      nombre.innerHTML = i + '. '+ user.first_name + " Last Name:" + user.last_name;

      div_usuarios.appendChild(nombre);

      document.querySelector(".loading").style.display ='none';
    });
  }

  function usuario(user) {
    console.log(user);
      let nombre = document.createElement('h4');
      let avatar = document.createElement('img');
      nombre.innerHTML = user.first_name + " " + user.last_name;
      avatar.src = user.avatar;
      avatar.width = '100';

      div_usuario.appendChild(nombre);
      div_usuario.appendChild(avatar);

      document.querySelector("#usuario .loading").style.display ='none';

  }
