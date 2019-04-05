$(document).ready(function() {
  var caja = $('#caja');
  $('#mostrar').hide('slow/400/fast', function() {

  });('slow/400/fast', function() {

  });
  $('#mostrar').click(function(event) {
    $(this).hide('slow/400/fast', function() {
    });
    $('#ocultar').show('slow/400/fast', function() {
    });
    caja.slideDown('slow');
  });
  $('#ocultar').click(function(event) {
    $(this).hide('slow/400/fast', function() {
    });
    $('#mostrar').show('slow/400/fast', function() {
    });
    caja.slideUp('slow', function () {
        console.log("Cartel oculto");
    });
  });
  $('#todo').click(function(event) {
    caja.slideToggle('fast');
  });

  $('#animar').click(function() {
    caja.animate({
                  marginLeft: '500px',
                  fontSize: '40px',
                  height: '110px',
                },'slow').animate({
                  borderRadius: '900px',
                  marginTop: '90px'}, 'slow').animate({
                    borderRadius: '0px',
                    marginLeft: '0px'
                  }, 'slow').animate({
                    borderRadius: '100px',
                    marginTop: '0px'
                  }, 'slow').animate({
                                marginLeft: '500px',
                                fontSize: '40px',
                                height: '110px',
                              },'slow')
  });
});
