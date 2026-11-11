
// 1. Obtener los elementos del DOM

const textoContador = document.getElementById("contador");
const boton = document.getElementById("btn-like");
const tabla = document.getElementById("tabla-registros");

// 2. Crear variable del contador

let likes = 0;

// 3. Escuchar el evento de clic

boton.addEventListener("click", () => {

    // Aumentar el contador
    likes++;

    // Actualizar el DOM
    textoContador.textContent = likes;

    // Obtener la hora actual
    const fecha = new Date();

    const hora = fecha.toLocaleTimeString("es-CO", {
        hour12: false
    });

    // Crear una nueva fila
    const fila = document.createElement("tr");

    // Crear las celdas
    const celdaNumero = document.createElement("td");
    const celdaHora = document.createElement("td");

    // Asignar los valores
    celdaNumero.textContent = likes;
    celdaHora.textContent = hora;

    // Agregar las celdas a la fila
    fila.appendChild(celdaNumero);
    fila.appendChild(celdaHora);

    // Agregar la fila al inicio de la tabla
    tabla.prepend(fila);

});

