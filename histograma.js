let rl = require('readline-sync');
let valoresIngresados = new Array (10);
for (let i=0; i<10; i++) {
    valoresIngresados[i] = rl.questionInt('Ingrese el valor de la posicion '+ i +': ');
}

for (i=0; i<10;i++) {
    dibujarLineas(valoresIngresados[i])
}

function dibujarLineas (num) {
    let linea = ''
    for(let j=0;j<num;j++) {
         linea = linea + '-'
    }
    console.log(linea, num)
}