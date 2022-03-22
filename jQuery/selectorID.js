'use strict';

$(document).ready(function(){
  console.log($('.parrafo'));
  var parrafo = $('.parrafo');

  $('.parrafo').css('font-size','45px');
  console.log(parrafo[0].textContent);
})