//Operador Spread en Arrays: Crea dues arrays, array1 i array2. 
//Utilitza l'operador spread per a crear una tercera array que 
//contingui tots els elements de array1 i array2.


const arrays1 = [1, 2, 3];
const arrays2 = [4, 5, 6];

const arrayCombined = [...arrays1,...arrays2];
console.log(arrayCombined);