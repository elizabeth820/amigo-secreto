let Amigos = [];

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    Amigos.push(nombre);

    // Llamamos a la función que actualiza la lista en HTML
    mostrarLista();

    // Limpiamos campo de texto
    document.getElementById("amigo").value = "";
}

function mostrarLista() {
    // 1. Obtenemos el elemento de la lista
    let lista = document.getElementById("listaAmigos");

    // 2. Limpiamos la lista existente
    lista.innerHTML = "";

    // 3. Recorremos el arreglo Amigos
    for (let i = 0; i < Amigos.length; i++) {
        // 4. Agregamos un <li> por cada amigo
        lista.innerHTML += "<li>" + Amigos[i] + "</li>";
    }
}