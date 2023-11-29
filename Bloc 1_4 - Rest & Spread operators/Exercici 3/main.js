//Copiant objectes amb Spread: Crea un objecte 'objecte1'. 
//Després crea un segon objecte, 'objecte2', que sigui una còpia de 'objecte1' 
//utilitzant l'operador spread. Canvia una propietat de 'objecte2' i comprova 
//que 'objecte1' no ha canviat.


let objecte1 = {
    Nombre:     "Rafa",
    Apellido:   "Fernandez",
    Edat:       50
};

let objecte2 = {
    ...objecte1
}
console.log(objecte1);
console.log(objecte2);

objecte2.Edat =49;

console.log(objecte1);
console.log(objecte2);
