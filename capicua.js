let readlineSync = require('readline-sync');
let fraseIngresada = readlineSync.question('Ingrese la palabra o frase que desea analizar si es un Palindromo: ');

function esPolindromo (frase) {
    let indice;
    let dimenFrase = frase.length;
    let arregloFrase = frase.split('');
    let linea=''
    for (let indice = 0; indice<dimenFrase; indice++) {
        linea = linea + arregloFrase[indice].replace(' ','')
    }
    let lineaInvertida = ''
    for (indice = (dimenFrase-1); indice>=0; indice--) {
        lineaInvertida = lineaInvertida + arregloFrase[indice].replace(' ','')
    }   
    if (lineaInvertida == linea) {
        return true
    } else return false
}

console.log(esPolindromo(fraseIngresada.toLowerCase()));
