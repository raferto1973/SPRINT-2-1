//Rest en Destructuring: Crea una array amb diversos elements. 
//Utilitza destructuring i l'operador rest per a assignar els primers dos elements a variables, 
//i després assignar la resta dels elements a una tercera variable.


let var1,var2,rest;
[var1,var2, ...rest] = [1, 2, 3, 4, 5];


var3 = rest;

console.log(var1);
console.log(var2);
console.log(var3);