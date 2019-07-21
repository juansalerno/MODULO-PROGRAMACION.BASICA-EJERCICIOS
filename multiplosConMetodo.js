let readlineSync = require('readline-sync');
let num1 = readlineSync.questionInt('Ingrese el primer numero, sobre el que quiere saber si es multiplo del segundo que escoja: ');
let num2 = readlineSync.questionInt('Ingrese el segundo numero: ');
let resultado = 0
function esMultiplo (num1,num2) {
        if(num2 % num1 == 0) return resultado = true
        else return resultado = false
}
resultado = esMultiplo (num1,num2);
console.log(resultado);