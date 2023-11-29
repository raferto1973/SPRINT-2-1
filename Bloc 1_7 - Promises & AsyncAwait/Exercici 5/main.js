//Gestió d'errors amb async/await: Modifica la funció de l'exercici 4 per a que capturi qualsevol 
//possible error utilitzant un bloc try/catch.


function resolveren2segundos() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Hola, món');
        }, 2000);
    });
}

async function asyncCall() {
    const result = await resolveren2segundos();
    console.log(result);
    try {
        myroutine(); 
    } catch (e) {
        if (e instanceof TypeError) {
            // sentencias para manejar excepciones TypeError
        } else if (e instanceof RangeError) {
            // sentencias para manejar excepciones RangeError
        } else if (e instanceof EvalError) {
            // sentencias para manejar excepciones EvalError
        } 
    }
}
asyncCall();  