//Filter: Teniu una array de números [1, 2, 3, 4]. 
//Crea una nova array que només contingui els números parells.

const numeros = [1, 2, 3, 4];

function parells(numero) {
    if (numero % 2 == 0) {
        return numero;
    }
}
 
let numparells = numeros.filter(parells);

console.log(numeros);
console.log(numparells);

document.getElementById("show").innerHTML = " Els números parells son " + numparells;