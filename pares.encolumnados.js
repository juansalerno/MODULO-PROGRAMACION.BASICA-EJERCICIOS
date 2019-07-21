let readlineSync = require('readline-sync');
let orient = readlineSync.question('Como desea encolumnarlo? (I/D): ');
let rell = ' ';
for (let i=1; i<=25; i++)   {
    if (i % 2 == 0) {
        console.log(formatear(i, 2, rell, orient), ' ', formatear(i**2, 4, rell, orient),' ', formatear(i**3, 7, rell, orient))
    }
} 

function formatear (cadena, tamaño, relleno, orientacion) {
    let indice = 0;
    let linea = ''
    cadena = cadena.toString();
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