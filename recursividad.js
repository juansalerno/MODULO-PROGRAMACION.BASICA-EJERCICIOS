function factorial(j) {
    if (j==1) return  1;
    else return (j * factorial(j-1));
}
console.log(factorial(5));