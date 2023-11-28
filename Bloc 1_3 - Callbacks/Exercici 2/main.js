//Callbacks amb operacions matemàtiques: Escriu una funció calculadora que accepti tres paràmetres: 
//dos nombres i una funció de callback.La funció calculadora ha d'invocar la funció de callback 
//amb els dos nombres com a paràmetres. Després, crida calculadora amb una funció que faci la suma dels dos nombres.


function callback(missatge) {
    document.getElementById("show").innerHTML = missatge;
}

function calculadora(num1, num2, callback) {
    let missatge = "El resultat de la suma és: " + (num1 + num2);
    callback(missatge);
}

calculadora(5, 4, callback);