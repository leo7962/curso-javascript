$(document).ready(function() {
  //Mover elementos por la pagina
  $('.elemento').draggable();

  //Redimensionar elementos
  $('.elemento').resizable();

  //seleccionar elementos y ordenar elementos
  //$('.lista-seleccionable').selectable();
  $('.lista-seleccionable').sortable({
    update: function(event, ui) {
      console.log("Ha cambiado la lista");
    }
  });
  //drop
  $('#elemento-movido').draggable();
  $('#area').droppable({
    drop: function() {
      console.log("Has soltado algo dentro");
    }
  });

  //efectos
  $('#mostrar').click(function() {
    //$('.caja-efectos').fadeToggle('slow/400/fast', function() {
    //});
    //$('.caja-efectos').toggle("explode");
    //$('.caja-efectos').toggle("blind");
    //$('.caja-efectos').toggle("slide");
    //$('.caja-efectos').toggle("drop");
    //$('.caja-efectos').toggle("fold");
    //$('.caja-efectos').toggle("puff");
    //$('.caja-efectos').toggle("scale");
    $('.caja-efectos').toggle("shake", 4000);
  });

  //ToolTip
  $(document).tooltip();
  //Diaolog
  $("#lanzar").click(function() {
    $("#popup").dialog();
  });


});
