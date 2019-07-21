let rl = require('readline-sync');
let cantidad = rl.questionInt("cuantos? ");
let caracter = rl.questionInt("que? ");



function dibujar (cantidad, caracter) {
    let linea="";
    for (let i=0; i<cantidad; i++) {
        linea=linea+caracter+" ";
    } return linea  
}

linea = dibujar(cantidad, caracter);
console.log(linea);