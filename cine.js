let readlineSync = require('readline-sync');
let cantButacas = readlineSync.questionInt('Ingrese la cantidad de butacas que tiene el cine: ');
let arregloButacas = new Array (cantButacas)
function recorrerButacas (arreglo, cantidad) {
    let indice = 0;
    for (indice=0; indice<cantidad; indice++){
        arreglo[indice] = readlineSync.questionInt('La butaca '+(indice+1)+ ' esta ocupada? (Escriba el numero 1 por si o el numero 0 por no): ');
    }
}
function analizarButacas (arreglo, cantidad) {
    let indice = 0;
    let desocupadas = 0
    while (indice<cantidad) {
        if (arreglo[indice] == 0) {
            desocupadas++
        } indice++
    }   return desocupadas
}

recorrerButacas(arregloButacas, cantButacas);
desocupadas = analizarButacas(arregloButacas,cantButacas);
console.log('La cantidad de butacas desocupadas es: '+ desocupadas)

