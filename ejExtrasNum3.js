let nro
let linea = ''
function esPrimo (nro) {
       for (let i=2; i<nro; i++) {
           if (nro % i == 0) {
               return false
           }   
       } 
       return true
    }
for (let j=1; j<999; j++) {
    if (esPrimo(j)) {
        linea = linea + j + ' '; 
    }  
} 
console.log(linea);
