let a = parseInt(prompt("Indica un número"));        
let b = parseInt(prompt("Indica un altre número"));

let add = (a, b) => a + b;
document.getElementById("show").innerHTML = " La suma dels numeros és : " + add(a, b);