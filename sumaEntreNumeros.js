let readlineSync = require('readline-sync');
let primerNumero = readlineSync.questionInt('Ingrese el primer numero entero: ');
let segundoNumero = readlineSync.questionInt('Ingrese el segundo numero entero: ');
let componenteUnoSumatoria = (segundoNumero-primerNumero)+1
//Tomo la cantidad de términos: que es la resta entre el ultimo y el primero de la cadena, más 1.//
let componenteDosSumatoria = segundoNumero+primerNumero
//El segundo componente es la suma de los dos terminos ingresados//
let sumatoria = (componenteUnoSumatoria*componenteDosSumatoria)/2
console.log('La suma es: '+sumatoria);
