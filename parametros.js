'use strict';


var n1 = prompt("Ingrese una palabra","NO ingreso nada");
var n2 = prompt("Ingrese otra palabra","NO ingreso nada");

//Codigo para unir 2 parametros
function UnirPalabras(n1,n2){

  var palabrasUnidas = n1 + ' ' + n2;

  return palabrasUnidas;
}

var Resultado = UnirPalabras(n1,n2);
console.log(Resultado);


function UnirPalabras(n1, n2, n3 = false){

  var palabrasUnidas = n1 + ' ' + n2;

  return palabrasUnidas;
}

var Resultado = UnirPalabras(n1,n2);
console.log(Resultado);



/////Codigo para unir 3 parametros

function UnirPalabras(n1,n2,n3 = false){

  if(n3 == false){
      console.log(n1 + ' ' +n2);
  }else{
     document.write(n1 + ' ' +n2);
  }
}

UnirPalabras(n1, n2, true);