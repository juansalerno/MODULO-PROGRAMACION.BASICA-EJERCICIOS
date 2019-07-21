let readlineSync = require('readline-sync');
let cantHijos = readlineSync.questionInt('Por favor, diga la cantidad de hijos que tiene a su cargo: ');
switch(cantHijos) {
case 1:
        console.log('No le corresponde recibir asignación alguna');
        break;
case 2:
        console.log('Le corresponde recibir una asignación total de $1500');
        break;
case 3:
        console.log('Le corresponde recibir una asignación total de $3000');
        break;
default:
        console.log('Le corresponde recibir la asignación máxima, es decir $4500');    
}