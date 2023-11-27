//Operador ternari dins un bucle: Escriu una funció parOImpar que accepti un array de números i utilitzi un bucle per a recórrer l'array. Dins del bucle, utilitza l'operador ternari per a determinar si cada número és parell o imparell.

function parOImpar(numbers){
    let text = "";
    for (let i = 0; i < numbers.length; i++) {
        let numero =    numbers[i] % 2 === 0 ? `${numbers[i]} és parell` :
                        numbers[i] % 2 !== 0 ? `${numbers[i]} és imparell` :
                        'No és un número';
        console.log(`- El número ${numero}`);        
    }
}

let numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
parOImpar(numbersArray);

