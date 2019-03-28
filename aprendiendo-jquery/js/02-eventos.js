
$(document).ready(function () {
  //MouseOver y MouseOut

  var caja = $('#caja');

/*
  caja.mouseover(function() {
    $(this).css("background", "red");
  });

  caja.mouseout(function() {
    $(this).css("background","green");
  }); */

  function cambiaRojo(){
      $(this).css("background", "red");
    }
  function cambiaVerde(){
      $(this).css("background","green");
     }

  //hover
  caja.hover(cambiaRojo, cambiaVerde);

  //Click y doble click

  caja.click(function() {
    $(this).css("background", "blue")
           .css("color", "white");
  });

  caja.dblclick(function() {
    $(this).css("background", "pink")
           .css("color", "black");
  });

  //Focus y blur
  var nombre = $("#nombre");
  var datos = $("#datos");
  nombre.focus(function() {
    $(this).css("border","2px solid green");
  });

  nombre.blur(function() {
    $(this).css("border","1px solid #ccc");
    datos.text($(this).val()).show();
  });

  // Mousedowm y Mouseup
  datos.mousedown(function() {
    $(this).css("border-color","gray");
  });

  datos.mouseup(function() {
    $(this).css("border-color","black");
  });

  //Mousemove
  $(document).mousemove(function() {
    console.log("En el eje X: "+event.clientX);
    console.log("En el eje Y: "+event.clientY);
    $("#sigueme")
  });

});
