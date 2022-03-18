var edad = 17;
var texto ='';

switch(edad){
  case 17:
    texto = 'No tienes aun la mayoria de edad';
  break;
  
  case 18:
    texto = 'Eres mayor de edad';
  break;

  default:
    texto = 'Valor invalido';
}
console.log(texto);
