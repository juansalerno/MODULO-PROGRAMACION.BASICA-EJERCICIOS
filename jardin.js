let readlineSync=require('readline-sync');
let cantidadAlumnos = readlineSync.questionInt('Ingrese la cantidad de alumnos del curso, para salir ingrese el 0: ');

function analizarCupos (cantidad) {
    if (cantidad<=30) console.log('Amarilla');
        else if (cantidad>30 && cantidad<=35) console.log('Verde');
        else if (cantidad>35 && cantidad<=40) console.log('Azul');
        else if (cantidad>40) console.log('La cantidad de alumnos supera el máximo permitido de cualquiera de las salas.')
}

while (cantidadAlumnos > 0) {
    analizarCupos (cantidadAlumnos)
    cantidadAlumnos = readlineSync.questionInt('Ingrese la cantidad de alumnos del curso, para salir ingrese el 0: ');
}