'use strict'

//Es el Browser object Model
function getBom() {
  console.log(window.innerHeight);
  console.log(window.innerWidth);
  console.log(screen.width);
  console.log(screen.height);
  console.log(window.location);
  console.log(window.location.href);
}

function redirect(url) {
  window.location.href = url;
}

function abrirVentana(url) {
  window.open(url,"","width=400,height=300");
}

getBom();
