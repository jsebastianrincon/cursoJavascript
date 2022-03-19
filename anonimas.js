'use strict.js';

function sumar(n1,n2,multiplicar){
  var suma = n1 + n2;
  multiplicar(suma);
  return suma;
};


sumar(1,2,function(d){
  console.log("La suma es " + d);
  console.log("La multiplicacion es " + d * 2);
})