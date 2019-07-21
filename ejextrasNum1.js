let rl = require('readline-sync');
let num1 = rl.questionInt('Ingrese el primer numero: ');
let num2 = rl.questionInt('Ingrese el segundo numero: ');
let i = 1;
let divisorMax = 1

function divisoresComunes (num1, num2) {
        if ((num1 % i == 0) && (num2 % i == 0)) return i      
}

if (num1>num2) {
    let auxiliar = num1
    num1 = num2
    num2 = auxiliar
}

for (i=1; i<=num1; i++) {
    if (divisoresComunes (num1, num2)) {
        if (i>divisorMax) divisorMax = i
    }  
} console.log ('El máximo comun divisor entre ambos numeros es: '+ divisorMax)
    



    

