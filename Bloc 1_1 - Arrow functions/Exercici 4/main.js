let numbersArray = [1, 2, 3, 4, 5];


// Función que utiliza una función de flecha dentro de un bucle
let printNumbers = (numbers) => {
  for (let number of numbers) {
    // Función de flecha para imprimir cada número
    let printNumber = () => {
      console.log(number);
    };

    // Llama a la función de flecha
    printNumber();
  }
};

printNumbers(numbersArray);