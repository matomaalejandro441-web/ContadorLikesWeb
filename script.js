
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

    // Incrementar el contador
    likes++;

    // Actualizar el número en pantalla
    textoContador.textContent = likes;

    // Obtener la fecha y hora actual
    const fecha = new Date();

    // Formatear la hora en formato HH:MM:SS
    const hora = fecha.toLocaleTimeString("es-CO", {
        hour12: false
    });

    // Mostrar información en consola
    console.log("Likes actuales:", likes);
    console.log("Hora del clic:", hora);

});



console.log("Elementos del DOM seleccionados correctamente");
console.log("Contador inicial:", likes);
