//Every / Some: Usa every i some per a determinar si tots o alguns dels 
//elements de l'array [11, 12, 13, 14] són majors que 10, respectivament

const numeros = [11, 12, 15, 14];

let major10 = numeros.every(majorde10 = (valor) => valor > 10);
let algunmajor10 = numeros.some(algunmajorde10 = (valor2) => valor2 > 10);

console.log(numeros);
console.log(major10);
console.log(algunmajor10);

if (major10) {
    console.log("Tots els numeros son majors de 10."); 
} else{
    console.log("Algun dels númneros no son majors de 10.");
}

if (algunmajor10) {
    console.log("Algun o tots els numeros son majors de 10."); 
} else{
    console.log("no hi ha cap número major de 10");
}