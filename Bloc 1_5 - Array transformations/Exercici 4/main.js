//Reduce: Teniu una array de números [13, 7, 8, 21]. 
//Fes servir la funció reduce per a calcular la suma total dels números.

const numeros = [13, 7, 8, 21];

let valorInicial = 0;

let sumaTotal = numeros.reduce((acumulador,valorActual) => acumulador + valorActual, valorInicial,);

console.log(numeros);
console.log(sumaTotal); 

document.getElementById("show").innerHTML = " La suma total és :  " + sumaTotal;