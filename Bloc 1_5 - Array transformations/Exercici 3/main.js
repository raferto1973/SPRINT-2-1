//Find: Teniu una array de números [1, 10 , 8, 11]. 
//Utilitza la funció find per a trobar el primer número que és major a 10.

const numeros = [1, 10, 8, 11];

let major10 = numeros.find((numero) => numero > 10);

console.log(numeros);
console.log(major10); 

document.getElementById("show").innerHTML = " Els números majors de 10 son :  " + major10;
