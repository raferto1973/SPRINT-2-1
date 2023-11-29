//Creació d'una Promesa: Crea una promesa que es resolgui després de 2 segons i que 
//retorni la cadena de text 'Hola, món'.

const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hola, món');
    }, 2000);
  });
  
  promesa.then((valor) => {
    console.log(valor);   
  });
  