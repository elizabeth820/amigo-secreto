let Amigos = [];

function agregarAmigo() {
    // 1. Capturar el valor del campo de entrada
    let nombre = document.getElementById("amigo").value;

    // 2. Validar la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // 3. Actualizar el array de amigos
    Amigos.push(nombre);

    // 4. Mostrar la lista de amigos en la página
    document.getElementById("listaAmigos").innerHTML = Amigos;

    // 5. Limpiar el campo de entrada
    document.getElementById("amigo").value = "";
}