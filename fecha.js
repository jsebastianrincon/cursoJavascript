'use strict';

//Fechas

//Este archivo se va a hacer con POO
var fecha = new Date();
var hora = fecha.getHours().toString();
var minutos = fecha.getMinutes().toString();
var segundos = fecha.getSeconds().toString();
//Impresion de los datos
console.log(fecha);
console.log(hora);
console.log(minutos);
console.log(segundos);

console.log(hora+':'+ minutos+ ':'+segundos);