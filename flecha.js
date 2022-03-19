'use strict.js';

function sumar(n1,n2,fun){
  var suma = n1 + n2;
  fun(suma);
  return suma;
};

//Funcion Flecha
sumar(1,2,d =>{
  console.log("La suma es " + d);
  console.log("La multiplicacion es " + d * 2);
})