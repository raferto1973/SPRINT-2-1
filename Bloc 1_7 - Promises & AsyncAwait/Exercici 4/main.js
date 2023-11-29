//Ús de async/await: Escriu una funció asíncrona que utilitzi la funció await per a esperar el 
//resultat de la promesa creada a l'exercici 1, i que després imprimeixi aquest resultat a la consola.

function resolveren2segundos() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Hola, món');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('Llamando');
    const result = await resolveren2segundos();
    console.log(result);
    
  }
  
  asyncCall();
