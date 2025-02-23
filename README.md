# 🎉 Lista de Amigos con Sorteo Aleatorio

¡Bienvenido a la **Lista de Amigos con Sorteo Aleatorio**! Este proyecto es una aplicación web sencilla que te permite gestionar una lista de amigos, agregar nombres, mostrar la lista y sortear un amigo al azar. Ideal para actividades como intercambios de regalos, juegos o simplemente para divertirte.

---

## 🚀 Funcionalidades

- **Agregar amigos**:
  - Permite agregar nombres únicos (no se permiten duplicados).
  - Valida que los nombres contengan solo letras y espacios.
  - Límite configurable en la cantidad de amigos (por defecto, 4).
- **Mostrar la lista de amigos**:
  - Visualiza los nombres agregados en una lista interactiva.
- **Sortear un amigo**:
  - Selecciona un amigo al azar de la lista y muestra el resultado.
- **Mensajes de validación**:
  - Alertas para entradas inválidas, nombres duplicados o lista vacía.

---

## 📸 Vista previa

Aquí tienes una captura de pantalla de la aplicación:

![Vista previa de la aplicación](https://via.placeholder.com/800x400?text=Captura+de+pantalla+de+la+aplicación)

---

## 🛠️ Tecnologías utilizadas

- **HTML5**: Estructura de la página.
- **CSS3**: Estilos básicos para la interfaz.
- **JavaScript**: Lógica de la aplicación, validaciones y manipulación del DOM.

---

## 📂 Estructura del proyecto

El proyecto consta de los siguientes archivos principales:

1. **`index.html`**: Archivo principal que contiene la estructura de la página.
2. **`script.js`**: Archivo JavaScript que implementa la lógica de la aplicación.

### Código de ejemplo

#### HTML (`index.html`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de Amigos</title>
</head>
<body>
    <h1>Lista de Amigos</h1>
    <input type="text" id="amigo" placeholder="Ingresa un nombre">
    <button onclick="agregarAmigo()">Agregar</button>
    <ul id="listaAmigos"></ul>
    <button onclick="sortearAmigo()">Sortear</button>
    <div id="resultado"></div>
    <script src="script.js"></script>
</body>
</html>
```

#### JavaScript (`script.js`)

```javascript
let listaAmigos = [];
const numeroMaxAmigos = 4;

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (!/^[a-zA-Z\s]+$/.test(nombre)) {
        alert("Por favor, ingresa un nombre válido (solo letras y espacios).");
        return;
    }

    if (listaAmigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    if (listaAmigos.length >= numeroMaxAmigos) {
        alert("Has alcanzado el límite máximo de amigos.");
        return;
    }

    listaAmigos.push(nombre);
    actualizarListaAmigos();
    limpiarCaja();
}

function actualizarListaAmigos() {
    const listaHTML = document.getElementById("listaAmigos");
    listaHTML.innerHTML = "";
    listaAmigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaHTML.appendChild(li);
    });
}

function limpiarCaja() {
    document.getElementById("amigo").value = "";
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("La lista está vacía. Agrega amigos antes de sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceAleatorio];
    document.getElementById("resultado").textContent = `🎉 Amigo sorteado: ${amigoSorteado}`;
}
```

---

## 📖 Cómo usar la aplicación

1. **Abre el archivo `index.html` en tu navegador.**
2. **Agrega amigos**:
   - Escribe un nombre en el campo de entrada.
   - Haz clic en el botón "Agregar".
   - Si el nombre es válido, se agregará a la lista.
3. **Sortear un amigo**:
   - Haz clic en el botón "Sortear".
   - El nombre de un amigo seleccionado al azar aparecerá en la sección de resultados.
4. **Mensajes de validación**:
   - Si intentas agregar un nombre inválido, duplicado o si la lista está vacía, recibirás un mensaje de alerta.

---

## 📁 Acceso al proyecto

Puedes clonar este repositorio para probar la aplicación en tu máquina local:

```bash
git clone https://github.com/tu-usuario/tu-repositorio.git
```

Luego, abre el archivo `index.html` en tu navegador.

---

## 👩‍💻 Autor

| [<img src="https://via.placeholder.com/100" width=115><br><sub>Tu Nombre</sub>](https://github.com/tu-usuario) |
| :---: |

---

## 📝 Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

## 🌟 Contribuciones

¡Las contribuciones son bienvenidas! Si deseas mejorar este proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama con tus cambios: `git checkout -b mi-nueva-funcionalidad`.
3. Realiza tus cambios y haz un commit: `git commit -m "Agregué una nueva funcionalidad"`.
4. Sube tus cambios: `git push origin mi-nueva-funcionalidad`.
5. Abre un pull request en este repositorio.

---

## 🎯 Estado del proyecto

🚧 Proyecto en desarrollo 🚧

---

## 📚 Recursos adicionales

- [Documentación oficial de Markdown](https://www.markdownguide.org/)
- [Guía para escribir un buen README](https://www.aluracursos.com/blog/como-escribir-un-readme-increible-en-tu-github)