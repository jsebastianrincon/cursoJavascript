'use strcit';

$(document).ready(function(){
///// Selector de etiquetas
  var span = $('span');
  span.css('border','1px solid blue')
  console.log(span.text());

    ///// Comillas doble son solo para las cadenas o string de texto
  var atributo = $('[title="Google"]');
  atributo.css('font-size','30px');
  console.log(atributo.text());
});