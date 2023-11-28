//Callbacks amb arrays: Escriu una funció processarElements que accepti dos paràmetres: 
//un array i una funció de callback. La funció processarElements ha d'invocar la funció de 
//callback per cada element de l'array.


const arrayElements = ["un", "dos", "tres", "quatre"];

function processarElements(arrayElements, callback) {    
    callback(arrayElements);
}

function processar(arrayElements) {    
    arrayElements.forEach(elemento =>  console.log(elemento));
}

processarElements(arrayElements, processar);