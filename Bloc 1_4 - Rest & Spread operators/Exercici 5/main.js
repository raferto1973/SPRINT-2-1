//Spread en Funcions: Crea una funció que accepti tres arguments. 
//Després, crea una array amb tres elements i crida la funció utilitzant 
//l'operador spread amb aquesta array.

function suma (a,b,c) {
    return a + b+ c;
}

const numeros = [1, 2, 3];

console.log(suma(...numeros));