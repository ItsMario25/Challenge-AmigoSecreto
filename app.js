let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, escribe un nombre.");
        return;
    }

    amigos.push(nombre);
    mostrarListaAmigos();

    input.value = "";
    input.focus();
}

function mostrarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.classList.add("button-delete");
        botonEliminar.onclick = function() {
            eliminarAmigo(i);
        };
        
        li.appendChild(botonEliminar);
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear. Agrega algunos nombres primero.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 Tu amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}

function eliminarAmigo(indice) {
    amigos.splice(indice, 1);
    mostrarListaAmigos();
}


function eliminarTodo() {
    if (amigos.length === 0) {
        alert("La lista ya está vacía.");
        return;
    }
    
    if (confirm("¿Estás seguro de que quieres eliminar todos los amigos de la lista?")) {
        amigos = [];
        mostrarListaAmigos();
        const resultado = document.getElementById("resultado");
        resultado.innerHTML = "";
    }
}