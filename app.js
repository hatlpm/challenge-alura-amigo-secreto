// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

var listaAmigos = [];
let numeroMaxAmigos = 4; // Numero maximo de amigos

function agregarAmigo() {
    let textoDeUsuario = String(document.getElementById('amigo').value); //Nombre ingresado

    // Validar que solo sea texto (sin números)
    if (/^[a-zA-Z\s]+$/.test(textoDeUsuario) && textoDeUsuario.trim != "") {
        console.log("El texto ingresado es válido:", textoDeUsuario);
        console.log(`Tipo variable textoDeUsuario ${typeof(textoDeUsuario)}`);
        console.log(listaAmigos.length)
        if (listaAmigos.length <= numeroMaxAmigos-1) { // Comienza en cero listaAmigos.length
            if (listaAmigos.includes(textoDeUsuario)) {
                alert("El nombre esta repetido");
            } else {
                listaAmigos.push(textoDeUsuario);
                console.log(`Lista de amigos generada: ${listaAmigos}`);
                limpiarCaja();
                actualizarListaAmigos(listaAmigos);            
            } 
        } else {
            alert(`numero de amigos es mayor a ${numeroMaxAmigos}`);
            console.log(`Lista de amigos generada: ${listaAmigos}`);
            limpiarCaja();
            return
        }
    } else {
        console.log("Por favor, ingresa solo texto (sin números ni caracteres especiales).");
        alert("Por favor, ingresa solo texto (sin números ni caracteres especiales).");
        
    }

    

    

}

//FUNCION PARA LIMPIAR INPUT O CAJA
function limpiarCaja() {
    document.querySelector('#amigo').value = ''; //Forma simplificada
}

// Función para actualizar la lista de amigos
function actualizarListaAmigos(amigos) {
    // Obtener el elemento de la lista
    const lista = document.getElementById('listaAmigos');

    lista.innerHTML = "";

    // Iterar sobre el arreglo de amigos
    for (let i = 0; i < amigos.length; i++) {
      // Crear un nuevo elemento <li>
      elemento = document.createElement('li');
      elemento.textContent = amigos[i]; // Asignar el nombre del amigo al <li>

      //Agregar el <li> a la
      lista.appendChild(elemento);
    }
}

// Función para actualizar la lista de amigos
function generaAmigoAleatorio(amigos) {
    let numeroGenerado = Math.floor(Math.random()*amigos.length);
    console.log(`Numero generado: ${numeroGenerado}`);
    console.log(`El amigo sorteado es: ${amigos[numeroGenerado]}`);
    return amigos[numeroGenerado]

}

function sortearAmigo() {
       
    if (listaAmigos.length != 0) {
        let nombreAmigoSeleccionado = generaAmigoAleatorio(listaAmigos);
        const lista = document.getElementById('listaAmigos');
        lista.innerHTML = "";

        const mostrar = document.getElementById('resultado');
        mostrar.innerHTML = "El amigo sorteado es: " + nombreAmigoSeleccionado;
    } else {
        alert("No hay nombres agregados en la lista de amigos")
    }
}
