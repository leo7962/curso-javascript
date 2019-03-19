'Use strict'

//Json - son las siglas de JavaScript Object Notation

var pelicula = {
  titulo: 'Batman VS Superman',
  year: 2017,
  pais: 'Estados Unidos'
};

pelicula.titulo ="Superman comienza";

var peliculas = [
  {
    titulo: "Capitana Marvel", year:2019, pais: "Estados Unidos"
  },
  pelicula
];

var caja_peliculas = document.querySelector("#peliculas");
var index;

for (var index in peliculas) {
  var p = document.createElement("p");
  p.append(peliculas[index].titulo + " - "+peliculas[index].year);
  caja_peliculas.append(p);
}

console.log(peliculas);
