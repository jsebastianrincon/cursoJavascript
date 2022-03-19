'use strict';

//Parametro Rest

///...p --> Parametro REST  (Se almacenan en un array)

function ListadoPaises(p1,p2, ...p){
    console.log(p1);
    console.log(p2);
    console.log(p);
}


ListadoPaises('Colombia','Inglaterra','Alemania','Italia');