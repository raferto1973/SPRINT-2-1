//Fusionant Objectes amb Spread: Crea dos objectes amb propietats diferents. 
//Utilitza l'operador spread per a fusionar aquests dos objectes en un de nou.

let objecte1 = {
    nombre:     "Rafa",
    apellido:   "Ruiz"
}

let objecte2 = {
    Edat:       50,
    telefono:   123456789
}

let objecte3 = {...objecte1, ...objecte2};

console.log(objecte1);
console.log(objecte2);
console.log(objecte3);
