'use strict';

var global  = "Variable Global";

function MostrarConsola(){
  var variable_funcion = "Variable interna de la funcion";
  console.log(global);
  console.log(variable_funcion);
}
MostrarConsola();

//La variable solo funciona dentro de la funcion
console.log(variable_funcion);
console.log(global);