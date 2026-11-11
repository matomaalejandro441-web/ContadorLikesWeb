
// ====================================
// 1. SELECCIONAR ELEMENTOS DEL DOM
// ====================================

// Obtener el contador
const textoContador = document.getElementById("contador");

// Obtener el botón de likes
const boton = document.getElementById("btn-like");

// Obtener el cuerpo de la tabla
const tabla = document.getElementById("tabla-registros");

// ====================================
// 2. INICIALIZAR VARIABLE DEL CONTADOR
// ====================================

let likes = 0;


// ====================================
// 3. EVENTO PARA AUMENTAR LOS LIKES
// ====================================



boton.addEventListener("click", () => {

    // 1. Aumentar los likes
    likes++;

    // 2. Actualizar el contador
    textoContador.textContent = likes;

    // 3. Obtener la hora actual
    const fecha = new Date();

    const hora = fecha.toLocaleTimeString("es-CO", {
        hour12: false
    });

    // 4. Crear una nueva fila
    const fila = document.createElement("tr");

    // 5. Crear las celdas de la fila
    const celdaNumero = document.createElement("td");
    const celdaHora = document.createElement("td");

    // 6. Agregar los datos a las celdas
    celdaNumero.textContent = likes;
    celdaHora.textContent = hora;

    // 7. Agregar las celdas a la fila
    fila.appendChild(celdaNumero);
    fila.appendChild(celdaHora);

    // 8. Insertar la fila al inicio de la tabla
    tabla.prepend(fila);

    console.log("Like registrado:", likes, hora);

});




console.log("Elementos del DOM seleccionados correctamente");
console.log("Contador inicial:", likes);
