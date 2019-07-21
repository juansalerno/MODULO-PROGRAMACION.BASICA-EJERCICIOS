let v1 = new Array (3);
v1[0]=1;
v1[1]=2;
v1[2]=3;
let v2 = new Array (3);
v2[0]=4;
v2[1]=5;
v2[2]=6;
let v3 = new Array (3);
v3[0]=2;
v3[1]=1;
v3[2]=2;
let v4 = new Array (3);
v4[0]=1;
v4[1]=2;
v4[2]=1;
let multiplicacion1 = new Array (3);
let multiplicacion2 = new Array (3);
let arregloResultado = new Array (3);

function multiplicarArreglos (arreglo1,arreglo2,arregloMultiplicacion, dimensionArreglos) {
    let indice = 0
    for (indice=0; indice<dimensionArreglos; indice++) {
        arregloMultiplicacion[indice] = arreglo1[indice]*arreglo2[indice];
    }
}

multiplicarArreglos(v1,v2,multiplicacion1,3);
multiplicarArreglos(v3,v4,multiplicacion2,3);
multiplicarArreglos(multiplicacion1,multiplicacion2,arregloResultado,3);
console.log(arregloResultado);

