let readlineSync = require('readline-sync');
let indice;

let arregloNumero1 = new Array (6);
for (indice = 0; indice<6; indice++) {
    arregloNumero1[indice] = readlineSync.questionInt('Ingrese el numero de la posicion ' +indice+ ' del primer arreglo: ');
}

let arregloNumero2 = new Array (6);
for (indice = 0; indice<6; indice++) {
    arregloNumero2[indice] = readlineSync.questionInt('Ingrese el numero de la posicion ' +indice+ ' del segundo arreglo: ');
}

let arregloSuma = new Array (6);
for (indice = 0; indice<6; indice++) {
    arregloSuma[indice] = arregloNumero1[indice]+arregloNumero2[indice]; 
    console.log('La suma de los numeros de ambos arreglos en la posicion '+ indice+ ' es: '+ arregloSuma[indice]);
}