let arregloCompletar = new Array (10);
let indice;
for (indice=0; indice<10; indice++) {
    arregloCompletar[indice] = Azar (100)

}
for (indice = 0; indice<10; indice++) {
    console.log('El numero aleatorio de la posición ', indice, 'es el: '+ arregloCompletar[indice]);
}

function Azar (tope) {
    return Math.floor(Math.random()*tope)
}