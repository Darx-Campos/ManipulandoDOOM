let caja = document.getElementById("caja");
let boton = document.getElementById("crear");
let resultado = document.getElementById("resultado");

boton.addEventListener("click", () => {

    resultado.innerHTML = "";

    let palabra = caja.value.toUpperCase();

    for (let letra of palabra) {

        resultado.innerHTML += `
            <div>
                <strong>${letra}</strong>
                <input type="text" placeholder="Escribe aqui">
            </div>
        `;
    }

});