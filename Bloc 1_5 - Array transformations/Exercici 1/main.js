//Map: Teniu un array de números [1, 2, 3, 4]. 
//Crea una nova array que contingui el quadrat de cada número.


const numeros = [1, 2, 3, 4];

let quadrat = numeros.map(function(num){
    return num*num;
})

console.log(numeros);
console.log(quadrat);

document.getElementById("show").innerHTML = " Els quadrats son " + quadrat;