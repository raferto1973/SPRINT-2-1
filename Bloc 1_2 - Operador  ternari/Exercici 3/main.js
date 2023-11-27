// Ús enllaçat d'operadors ternaris: Escriu una expressió que utilitzi enllaços d'operadors ternaris per determinar si un número és positiu, negatiu o zero.

let num1 = parseInt(prompt("Primer exercici \n Indica un número"));               

let signeNumero =   num1 > 0  ? 'Positiu' :
                    num1 == 0 ? 'Zero' :
                    num1 < 0  ? 'Negatiu' :                    
                    'No és un número';
    
document.getElementById("show").innerHTML = `El ${num1} és ${signeNumero}`;
console.log( signeNumero );



//Operador ternari amb funcions: Crea una funció trobarMaxim que accepti tres paràmetres (a, b, c) i utilitzi l'operador ternari per determinar el valor màxim.

alert("Ara anem per el segon exercici. Cicka aceptar");+5

let numA = parseInt(prompt("Indica un número"));  
let numB = parseInt(prompt("Indica un número"));  
let numC = parseInt(prompt("Indica un número"));  

let trobarMaxim =   numA > numB & numA > numC ? numA :
                    numB > numC ? numB :
                    numC;

console.log(trobarMaxim);
document.getElementById("show2").innerHTML = `El número més gran entre ${numA}, ${numB} i ${numC}, és ${trobarMaxim}`;