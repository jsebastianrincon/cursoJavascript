'use strict';

$(document).ready(function(){

  $('#btn').html('Boton presionado');

  $('#btn').hover(function(){
    $('#btn').html('SACA EL MOUSE');
    $('#texto').show(500);
  },function(){
    $('#btn').html('PASA EL MOUSE');
    $('#texto').hide(500);

  });
});