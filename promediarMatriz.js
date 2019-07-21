let rl = require('readline-sync');
let nroFilas = rl.questionInt('Ingrese el numero de filas: ');
let nroColumnas = rl.questionInt('Ingrese el numero de columnas: ');
let tabla = new Array  (nroFilas);
let fila, columna

for(fila=0;fila<nroFilas;fila++) {
   tabla[fila] = new Array(nroColumnas)
}

for(fila=0;fila<nroFilas;fila++) {
    for (columna = 0; columna<nroColumnas; columna++) {
        tabla[fila][columna] = Math.floor(Math.random()*100)
        
    }
}
let suma = 0;
for(fila=0;fila<nroFilas;fila++) {
    for (columna = 0; columna<nroColumnas; columna++) {
        suma = suma + (tabla[fila][columna])
    }
}


console.log(tabla);
console.log('El promedio es: '+(suma/(nroFilas*nroColumnas)));


