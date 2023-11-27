let edat = prompt("Quina és la teva edat ?");

let potConduir = edat >= 18 ? "Pots conduir" : "No pots conduïr";
document.getElementById("show").innerHTML = potConduir;