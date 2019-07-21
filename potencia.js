let readlineSync = require('readline-sync');
let base = readlineSync.questionInt('Ingrese el numero base de la potencia que quiere calcular: ');
let exponente = readlineSync.questionInt('Ingrese el exponente: ');
let resultado = 0
function calcularPotencia (base,exponente) {
        return resultado = base**exponente
}
if (exponente>=0) {
    resultado = calcularPotencia(base,exponente);
    console.log('El resultado de la potencia es: ', resultado);
} else
    console.log('El exponente debe ser mayor o igual a cero');