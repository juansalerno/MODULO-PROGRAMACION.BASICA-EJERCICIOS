let readlineSync = require('readline-sync');
let cantDados = readlineSync.questionInt('Ingrese la cantidad de dados sobre los cuales desea calcular la probabilidad de sacar un 6 en cada uno de ellos: ');
let probabilidad = 1/(6**cantDados);
console.log('La probabilidad de sacar un 6 es: '+ probabilidad);