// Obtener el elemento donde se escribirá el texto
const textoMecanico = document.getElementById('dw')

// Función para simular la escritura y borrado del texto
export function escribirYBorrar(textos, indiceTexto, indiceCaracter) {
    const textoActual = textos[indiceTexto]

    if (indiceCaracter < textoActual.length) {
        textoMecanico.textContent += textoActual.charAt(indiceCaracter);
        setTimeout(function () {
            escribirYBorrar(textos, indiceTexto, indiceCaracter + 1);
        }, 200) // Velocidad de escritura (ajustable)
    } else {
        setTimeout(function () {
            borrar(textos, indiceTexto, indiceCaracter)
        }, 2000) // Tiempo antes de borrar el texto (ajustable)
    }
}

// Función para borrar el texto
function borrar(textos, indiceTexto, indiceCaracter) {
    if (indiceCaracter >= 0) {
        textoMecanico.textContent = textos[indiceTexto].substring(0, indiceCaracter);
        setTimeout(function () {
            borrar(textos, indiceTexto, indiceCaracter - 1);
        }, 50); // Velocidad de borrado (ajustable)
    } else {
        setTimeout(function () {
            // Escoge el siguiente texto en el array
            const siguienteIndiceTexto = (indiceTexto + 1) % textos.length
            escribirYBorrar(textos, siguienteIndiceTexto, 0)
        }, 1000) // Tiempo antes de empezar a escribir de nuevo (ajustable)
    }
}
