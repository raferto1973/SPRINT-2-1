//Promesa amb reject: Crea una promesa que es resolgui després de 2 segons si l'input és igual a 'Hola', 
//i que la rebutgi si l'input és qualsevol altra cosa.


function promesa(input) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (input === 'Hola') {
          resolve('Promesa resolta correctament');
          console.log(input);
        } else {
          reject(`Promesa rebutxada: "${input}" no és Hola`);
        }
      }, 2000);
    });
  }
  
  // Ejemplo de uso

  let input = prompt("Digues algo");
  
  promesa(input)
    .then((resultat) => {
      console.log(resultat); 
    })
    .catch((error) => {
      console.error(error); 
    });
  
