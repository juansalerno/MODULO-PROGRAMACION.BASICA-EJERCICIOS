let rl=require('readline-sync'); //Voy a pedir un texto, necesito el modulo readline
let letras="abcdefghijklmnopqrstuvwxyz"; //Voy a contar letras necesito saber cuales son
let cantidades=new Array(letras.length); //Voy a contar necesito un espacio para guardar las cantidades particulares de cada letra
let totalLetras=0; //Voy a calcular la probabilidad, necesito la cantidad general de letras
inicializarArreglo(cantidades);
let texto = rl.question("Ingrese el texto a evaluar: ");
totalLetras = calcularCantidades(texto,letras,cantidades); //Esta funcion cuenta las cantidades particulares y general del texto
mostrarListado(letras,cantidades,totalLetras); //Esta funcion realiza el listado de la informacion

function inicializarArreglo(cantidades) {
    for (let i=0; i<cantidades.length; i++)
        cantidades[i]=0;
}
function calcularCantidades(texto,letras,cantidades) {
    let letra=""; //aca se guarda cada caracter del recorrido del texto de uno por vez
    let posicion; //aca se guarda la posicion del caracter en la lista de letras, si es que se encuentra o -1 si no
    let total=0; //variable que guarda cantidad total de caracteres que son letras
    for (let i=0; i<texto.length; i++) {
        letra=texto.charAt(i).toLowerCase(); //cada caracter se lleva a minusculas
        posicion=letras.indexOf(letra); // se busca el caracter en la lista de letras
        if (posicion>=0) {
            cantidades[posicion]++; //encuentra el caracter, lo cuenta para la letra
            total++; // y tambien para el total
        }
    }
    return total;
}
function mostrarListado(cadenaLetras, arregloCantidades, totalLetras) {
    for (let i=0; i<cadenaLetras.length; i++) {
        if (arregloCantidades[i]>0)
            console.log("la letra "+cadenaLetras.charAt(i)+
            " aparece "+arregloCantidades[i]+" veces con una "+
            "probabilidad de "+arregloCantidades[i]/totalLetras);
    }
}