let readlineSync = require ('readline-sync');
let base = readlineSync.questionInt('Ingrese la altura: ');
let altura = readlineSync.questionInt('Ingrese la altura: ');
area = base * altura;
console.log(area);