const tareaInput = document.getElementById("tareaInput");
const agregarBtn = document.getElementById("agregarBtn");
const listaTareas = document.getElementById("listaTareas");
const mensaje = document.getElementById("mensaje");

// Añadir una tarea al pulsar el botón
agregarBtn.addEventListener("click", agregarTarea);

// También podemos añadirla pulsando Enter
tareaInput.addEventListener("keydown", function(evento) {
    if (evento.key === "Enter") {
        agregarTarea();
    }
});

function agregarTarea() {
    const texto = tareaInput.value.trim();

    // No hacemos nada si el campo está vacío
    if (texto === "") {
        return;
    }

    // Creamos el elemento de la lista
    const nuevaTarea = document.createElement("li");
    nuevaTarea.classList.add("tarea");
    //Cambiamos el botón
    nuevaTarea.innerHTML = `
        <span>${texto}</span>
        <button class="eliminar"><i class="fa-solid fa-trash"></i></button>
    `;

    // Marcar la tarea como completada al hacer clic sobre ella
    nuevaTarea.addEventListener("click", function(evento) {
        if (!evento.target.classList.contains("eliminar")) {
            nuevaTarea.classList.toggle("completada");
        }
    });

    // Eliminar la tarea
    const botonEliminar = nuevaTarea.querySelector(".eliminar");

    botonEliminar.addEventListener("click", function() {
        nuevaTarea.remove();
        actualizarMensaje();
    });

    listaTareas.appendChild(nuevaTarea);

    // Limpiamos el campo
    tareaInput.value = "";
    tareaInput.focus();

    actualizarMensaje();
}

function actualizarMensaje() {
    if (listaTareas.children.length === 0) {
        mensaje.style.display = "block";
    } else {
        mensaje.style.display = "none";
    }
}