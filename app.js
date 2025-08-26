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
    // Obtenemos el elemento de la lista
    let lista = document.getElementById("listaAmigos");

    // Limpiamos la lista existente
    lista.innerHTML = "";

    // Recorremos el arreglo Amigos
    for (let i = 0; i < Amigos.length; i++) {
        // Agregamos un <li> por cada amigo
        lista.innerHTML += "<li>" + Amigos[i] + "</li>";
    }
}

function sortearAmigo() {
    // Validar que haya amigos en el arreglo
    if (Amigos.length === 0) {
        alert("No hay amigos disponibles para sortear.");
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * Amigos.length);

    // Obtener el nombre sorteado
    let amigoSorteado = Amigos[indiceAleatorio];

    // Mostrar el resultado en el HTML
    document.getElementById("resultado").innerHTML = "El amigo secreto es: " + amigoSorteado;
}
