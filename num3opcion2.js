let i;
let n;
let contador = 0
function cantidadDeDivisores (i) {
    for (n=1; n<=i; n++) {
        if (i % n == 0) {
        contador = contador + 1
        }   
    }   return contador
}


for (i=1; i<=999; i++) {
    contador = cantidadDeDivisores(i) 
        if (contador == 2) console.log(i);
    }     

 
