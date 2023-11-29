//Donat un array "[ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]", 
//crea una funció en una sola línia que faci el següent:

/*Filtra els nombres majors o iguals a 10.
Multiplica cada nombre filtrat per 2.
Calcula la suma dels nombres filtrats i multiplicats per 2.
La funció ha de retornar el resultat de la suma.*/

const numeros = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];


let valorInicial = 0;

let calculo = numeros.filter((numero) => numero >= 10).map((num) => num * 2).reduce((acumulador, valorActual) => acumulador + valorActual, valorInicial,);

console.log(numeros);
console.log(calculo);

document.getElementById("show").innerHTML = " La suma total dels majors de 10 i multiplicats per dos :  " + calculo;