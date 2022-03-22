'use strict';

$(document).ready(function(){

  $('#btnMostrar').click(function(){
      $('#texto').html('Boton presionado');
  });
  $('#btnOcultar').click(function(){
      $('#texto').hide(1500);
      $('#texto').show(1500);
  });
});