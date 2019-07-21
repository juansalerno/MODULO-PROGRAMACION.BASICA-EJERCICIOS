let readlineSync = require('readline-sync');
let edad = readlineSync.questionInt('Por favor, ingrese cuantos años tiene de edad: ');
if(edad>=18){
    console.log('El precio de la entrada al establecimiento es $150');} 
if((edad<18) && (edad>=3))  {
    console.log('El precio de la entrada al establecimiento es $80');}
if(edad<3) {
    console.log('Al tener menos de 3 años de edad, no debe pagar para entrar al establecimiento');}