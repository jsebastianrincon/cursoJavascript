'use strict';

var div1 = document.getElementById('div1');
//Callback
div1.innerHTML = 'Nuevo texto asignado desde JS';

//Cambio de tamaño
div1.style.fontSize = '50px';

var parrafo1 = document.getElementsByClassName('parrafo1');

//Posicion a modificar
parrafo1[1].innerHTML = 'Texto nuevo de la posicion';