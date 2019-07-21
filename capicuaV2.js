let rl = require('readline-sync');
let textoIngresado = rl.question('Ingrese la palabra: ');
textoIngresado = textoIngresado.toLowerCase();
let longitudTexto = textoIngresado.length;
let indiceIzq = 0;
let indiceDer = (longitudTexto-1);
contador = 0
while (indiceIzq<indiceDer) {
    if (textoIngresado.charAt(indiceIzq) == textoIngresado.charAt(indiceDer)) contador++
    indiceIzq++
    indiceDer--
}
console.log((contador == indiceDer)) 
