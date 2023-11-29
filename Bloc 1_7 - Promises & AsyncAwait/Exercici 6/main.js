//Promise.all: Crea dues promeses que es resolguin després de 2 i 3 segons, respectivament. 
//Utilitza Promise.all per a esperar que ambdues promeses es resolguin, i imprimeix els resultats a la consola.

var promesa1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "Hola");
  });
var promesa2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "Rafa");
});

Promise.all([promesa1, promesa2]).then((values) => {
  console.log(values[0]);
  console.log(values[1]);
  console.log(values); 
});
