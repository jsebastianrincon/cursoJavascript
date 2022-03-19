'use strict';
///// Programacion Orientada a Objetos en JS
function Persona(edad,altura,peso){
  this.edad = edad;
  this.altura = altura;
  this.peso = peso;

  this.caminar =()=>{
    console.log("La Persona esta caminando");
  }
  this.correr =()=>{
    console.log("La Persona esta corriendo");
  }
}

var Sebastian = new Persona(25,1.75,80);
var Alejandra = new Persona(24,1.55,60);

console.log(Sebastian.caminar);
console.log(Alejandra.correr);