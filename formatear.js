let readlineSync = require('readline-sync');
let texto = readlineSync.question('Ingrese el texto: ');
let tamañoTexto = 10
let caracterRelleno = readlineSync.question('Ingrese el caracter de relleno: ');
let orientacionTexto = readlineSync.question('Como desea encolumnar el texto? (I/D): ');

console.log(formatear (texto, tamañoTexto, caracterRelleno, orientacionTexto))


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
