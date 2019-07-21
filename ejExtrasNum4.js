let rl = require('readline-sync');
let numeroParIngresado = rl.questionInt('Ingrese el numero par que desea analizar sus pares descendentes: ');
let i;
let linea = ''
for (i=numeroParIngresado; i>=2; i--) {
    if (i % 2 == 0 ) {
        linea = linea + i + ' ';
    }
}   console.log(linea);
