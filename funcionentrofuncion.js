'use strict';


var n1 = prompt("Ingrese una palabra","NO ingreso nada");
var n2 = prompt("Ingrese otra palabra","NO ingreso nada");

function MostrarConsola(n1,n2){

    console.log(n1 + ' ' +n2);

}

function EnDocumento(n1,n2){

      document.write(n1 + ' ' +n2);

}


function Mostrar(n1,n2,n3 = false){

  if(n3 == false){
      MostrarConsola(n1,n2);
  }else{
     EnDocumento(n1,n2);
  }
}

function MostarDeNuevo(n1,n2){
  EnDocumento(n1,n2);
}

Mostrar(n1, n2, true);