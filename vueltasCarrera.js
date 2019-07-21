let readlineSync = require('readline-sync');
let vueltaUno = readlineSync.questionInt('Ingrese el tiempo de la vuelta numero 1: ');
let vueltaDos = readlineSync.questionInt('Ingrese el tiempo de la vuelta numero 2: ');
let vueltaTres = readlineSync.questionInt('Ingrese el tiempo de la vuelta numero 3: ');
let vueltaCuatro = readlineSync.questionInt('Ingrese el tiempo de la vuelta numero 4: ');
let tiempoTotal = vueltaUno + vueltaDos + vueltaTres + vueltaCuatro;
let tiempoPromedio = tiempoTotal / 4;
console.log(tiempoTotal);
console.log(tiempoPromedio);