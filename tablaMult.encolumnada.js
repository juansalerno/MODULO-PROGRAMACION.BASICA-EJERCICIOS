







let readlineSync = require('readline-sync');
let orientaciontexto = readlineSync.question('Como desea encolumnarlo? (I/D): ');

let i;
for (i=1;i<10;i++) {
    console.log(formatear(i, 3, ' ',orientaciontexto), ' ', formatear(i*2, 3, ' ', orientaciontexto), ' ', formatear(i*3, 3, ' ', orientaciontexto), ' ', formatear(i*4, 3, ' ', orientaciontexto), ' ', formatear(i*5, 3, ' ', orientaciontexto), ' ', formatear(i*6, 3, ' ', orientaciontexto), ' ', formatear(i*7, 3, ' ', orientaciontexto), ' ', formatear(i*8, 3, ' ', orientaciontexto), ' ', formatear(i*9, 3, ' ', orientaciontexto) );
}




function formatear (cadena, tamaño, relleno, orientacion) {
    let indice = 0;
    let linea = ''
    cadena = cadena.toString()
    let largoCadena = cadena.length;
    if (orientacion == 'D') {
        for (indice = 0; indice < (tamaño-largoCadena); indice++) {
            linea = linea + relleno;
        }  return linea + cadena 
    } 
    else if (orientacion == 'I') {
        for (indice = (tamaño-largoCadena); indice > 0; indice--) {
            linea = linea + relleno;
        } return cadena + linea
    }
}
