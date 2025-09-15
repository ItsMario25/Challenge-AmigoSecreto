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


// Función para sortear todos los amigos en pares
function sortearGrupo() {
    if (amigos.length < 4) {
        alert("Se necesitan al menos 4 amigos para hacer un sorteo grupal.");
        return;
    }

    if (amigos.length % 2 !== 0) {
        alert("El número de amigos debe ser par para hacer un sorteo grupal.");
        return;
    }
    
    let amigosMezclados = [...amigos];

    for (let i = amigosMezclados.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [amigosMezclados[i], amigosMezclados[j]] = [amigosMezclados[j], amigosMezclados[i]];
    }

    let resultadoHTML = "<li><strong>🎊 Resultado del Sorteo Grupal:</strong></li>";
    
    for (let i = 0; i < amigosMezclados.length; i += 2) {
        const persona1 = amigosMezclados[i];
        const persona2 = amigosMezclados[i + 1];
        
        resultadoHTML += `<li>${persona1} 🤝 ${persona2}</li>`;
    }

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = resultadoHTML;
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