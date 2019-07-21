let readlineSync = require('readline-sync');
function cargarArreglo (arreg, dimension) {
    let indice = 0
    for (indice=0; indice<dimension; indice++) {
        arreg[indice] = readlineSync.questionInt('Ingrese la nota del trimestre numero '+ (indice+1)+ ': ');
    
    } 
}
function promediarArreglo (arreg, dimension) {
        let suma = 0
        let indice = 0
        for (indice=0; indice<dimension; indice++) {
            suma = suma + arreg[indice]
        }    return suma/dimension
}

let alumno = ''
let arregloNotas = new Array (3)
alumno = readlineSync.question('Ingrese el nombre del alumno: ');
while (alumno != '') {
    cargarArreglo(arregloNotas,3);
    console.log('Las notas son: '+ arregloNotas)
    let promedio = promediarArreglo(arregloNotas,3)
    console.log('El promedio es: '+promedio);
    alumno = readlineSync.question('Ingrese el nombre del alumno: ');
}
