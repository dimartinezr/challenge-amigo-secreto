let listaNombres = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function limpiarInput() {
    document.getElementById("amigo").value = "";
}

function seleccionarUl(id) {
    return document.getElementById(id); 
}

function limpiarUl(id) {
    let ulElement = seleccionarUl(id);
    ulElement.innerHTML = "";
}

function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value.trim();
    let ulElement = seleccionarUl("listaAmigos"); 

    if (nombreAmigo === "") {
        alert("Introduce por favor un nombre válido");
    } else {
        listaNombres.push(nombreAmigo);
        console.log(listaNombres);

        let li = document.createElement("li");
        li.textContent = nombreAmigo;
        ulElement.appendChild(li);

        limpiarInput();
    }
}

function sortearAmigo() {
    let ulResultado = seleccionarUl("resultado"); 

    if (listaNombres.length === 0) {
        alert("No hay nombres para sortear");
        return;
    }

    let AmigoSecreto = listaNombres[Math.floor(Math.random() * listaNombres.length)];

    limpiarUl("listaAmigos");
    limpiarUl("resultado")
    let li = document.createElement("li");
    li.textContent = `El Amigo Secreto es: ${AmigoSecreto}`;
    ulResultado.appendChild(li);
}


