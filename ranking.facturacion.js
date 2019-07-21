let readlineSync = require('readline-sync');
let cantidad = 10;
let clientes = new Array(cantidad);
let facturacion = new Array(cantidad);
//Cargo ordenado, uno por uno
console.log ("Cargando los arreglos de forma ordenada" );
let numCliente;

for (numCliente = 0; numCliente < cantidad; numCliente++) {
    cliente = readlineSync.question("Cliente ", numCliente + 1, ": ");

}