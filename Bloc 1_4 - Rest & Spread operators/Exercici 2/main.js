//Operador Rest en Funcions: Crea una funció 'suma' que utilitzi l'operador rest 
//per a acceptar un nombre indeterminat d'arguments i retornar la seva suma.

function suma(...arguments) {
    let total = 0;
    for (const arg of arguments){
        total += arg;
    }
    return total;
}

console.log(suma(1, 2, 3, 4, 5, 6, 7));
document.getElementById("show").innerHTML = suma(1, 2, 3, 4, 5, 6, 7);
