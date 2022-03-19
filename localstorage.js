'use strict';

//Comprobar soporte

///// Script para almacenar datos del navegador por consola
if(typeof($storage)){
  console.log('Disponible')
}else{
  console.log('No disponible');
}
localStorage.setItem('Clave','12345');
localStorage.setItem('Edad','25');

var valor = localStorage.getItem('clave');
console.log(valor);

var persona = {
  edad:25,
  nombre:'Sebastian',
}

/////Alamcenar el archivo JSON en string
localStorage.setItem('persona',JSON.stringify(persona));

//Acceder a JSON contenido
var per = JSON.parse(localStorage.getItem(persona));

console.log(per.nombre);