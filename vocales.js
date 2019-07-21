let readlineSync = require('readline-sync');
let fraseIngresada = readlineSync.question('Ingrese la frase que quiere analizar cuantas letras vocales tiene: ');
let longitudFraseIngresada = fraseIngresada.length;
let fraseMinus = fraseIngresada.toLowerCase()
let arreglo = fraseMinus.split('');
let contador = 0
for (let indice = 0; indice<longitudFraseIngresada; indice++) {
    if (arreglo[indice] == 'a' || arreglo[indice] == 'e' || arreglo[indice] == 'i' || arreglo[indice] == 'o' ||arreglo[indice] == 'u') contador++ 
}
console.log('La cantidad de letras vocales que posee es: '+ contador)