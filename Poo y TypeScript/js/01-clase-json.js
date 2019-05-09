var bicicleta = {
  color: 'rojo',
  modelo: 'bmx',
  frenos: 'de disco',
  velocidadmax: '60km',
  cambiaColor: function(nuevo_color){
    this.color = nuevo_color;
    console.log(this);
  }
};

bicicleta.cambiaColor("Azul");
