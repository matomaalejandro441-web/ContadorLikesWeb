
// ====================================
// 1. SELECCIONAR ELEMENTOS DEL DOM
// ====================================

// Obtener el contador
const textoContador = document.getElementById("contador");

// Obtener el botón de likes
const boton = document.getElementById("btn-like");

// Obtener el cuerpo de la tabla
const tabla = document.getElementById("tabla-registros");

// Obtener el botón de reinicio
const botonReset = document.getElementById("btn-reset");


// ====================================
// 2. INICIALIZAR VARIABLE DEL CONTADOR
// ====================================

let likes = 0;


// ====================================
// 3. EVENTO PARA AUMENTAR LOS LIKES
// ====================================

boton.addEventListener("click", () => {

    // Aumentar los likes
    likes++;

    // Actualizar el contador en pantalla
    textoContador.textContent = likes;

    // Cambiar el color cuando los likes superen 10
    if (likes > 10) {
        textoContador.classList.add("contador-limite");
    } else {
        textoContador.classList.remove("contador-limite");
    }

    // Obtener la hora actual
    const fecha = new Date();

    const hora = fecha.toLocaleTimeString("es-CO", {
        hour12: false
    });

    // Crear una nueva fila
    const fila = document.createElement("tr");

    // Crear las celdas de la fila
    const celdaNumero = document.createElement("td");
    const celdaHora = document.createElement("td");

    // Agregar los datos a las celdas
    celdaNumero.textContent = likes;
    celdaHora.textContent = hora;

    // Agregar las celdas a la fila
    fila.appendChild(celdaNumero);
    fila.appendChild(celdaHora);

    // Insertar la fila al inicio de la tabla
    tabla.prepend(fila);

    console.log("Like registrado:", likes, hora);

});


// ====================================
// 4. EVENTO PARA REINICIAR EL CONTADOR
// ====================================

botonReset.addEventListener("click", () => {

    // Reiniciar el contador
    likes = 0;

    // Actualizar el número en pantalla
    textoContador.textContent = likes;

    // Restaurar el color original
    textoContador.classList.remove("contador-limite");

    // Limpiar el historial de registros
    tabla.innerHTML = "";

    console.log("Contador reiniciado");

});


// ====================================
// 5. MENSAJES DE VERIFICACIÓN
// ====================================

console.log("Elementos del DOM seleccionados correctamente");
console.log("Contador inicial:", likes);
