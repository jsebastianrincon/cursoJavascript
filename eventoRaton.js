'use strict';

var boton = document.querySelector('#boton');
var div = document.querySelector('#div');

//Escuchador de eventos
/*
boton.addEventListener('click',function(){
  console.log('Clic Presionado');
  div.innerHTML = 'Boton presionado';
})
*/
function Pulsar(){
  div.innerHTML = 'Boton presionado';

}

function Alerta(){
  alert('Pulso el div');
}

//Onclick --> clic mouse
//oncontextmenu --> boton secundario
//onmouseenter --> rueda
//onmousedown --> mover mouse hacia abajo
//ondblclick --> doble click
//onmouseleave --> soltar clic
//onmouseover --> pasar hacia arriba
//onmouseup --> pasar hacia abajo