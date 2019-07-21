let rl = require('readline-sync');
let positivos = 0
let totalNum = 0
let n = rl.questionInt('Ingrese numero: ');
while (n!=0) {
    if (n>0) positivos = positivos + 1
    totalNum = totalNum + 1
    n = rl.questionInt('Ingrese numero: ');
} 
if (totalNum != 0) {
    console.log(positivos, 'positivos.' , (positivos/totalNum)*100,'% del total.');
}
