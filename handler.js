
let caja = document.getElementById("caja");
let resultado = document.getElementById("resultado");

caja.addEventListener("keyup", (e) => {
   // resultado.innerHTML = e.target.value;
 let palabra = e.target.value;
 let contarVocales = 0
 for (let i = 0; i < palabra.length; i++) {
    switch (palabra[i]){
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            contarVocales++;
            break;
    }
}
    resultado.innerHTML = contarVocales;
});