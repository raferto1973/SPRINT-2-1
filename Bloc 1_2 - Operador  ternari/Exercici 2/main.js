let num1 = parseInt(prompt("Indica un número"));
let num2 = parseInt(prompt("Indica un número"));

let compare = num1 > num2 ? `El ${num1} es més gran` : `El ${num2} es més gran`;

document.getElementById("show").innerHTML = compare;