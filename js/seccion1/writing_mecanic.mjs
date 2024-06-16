// Obtener el elemento donde se escribirá el texto
const text_mecanic = document.getElementById('dw')

// Función para simular la escritura y borrado del texto
export function write_remove(textos, indiceTexto, indiceCaracter) {
    const current_text = textos[indiceTexto]

    if (indiceCaracter < current_text.length) {
        text_mecanic.textContent += current_text.charAt(indiceCaracter);
        setTimeout(function () {
            write_remove(textos, indiceTexto, indiceCaracter + 1);
        }, 200) // Velocidad de escritura (ajustable)
    } else {
        setTimeout(function () {
            remove(textos, indiceTexto, indiceCaracter)
        }, 2000) // Tiempo antes de remove el texto (ajustable)
    }
}

// Función para remove el texto
function remove(textos, indiceTexto, indiceCaracter) {
    if (indiceCaracter >= 0) {
        text_mecanic.textContent = textos[indiceTexto].substring(0, indiceCaracter);
        setTimeout(function () {
            remove(textos, indiceTexto, indiceCaracter - 1);
        }, 50); // Velocidad de borrado (ajustable)
    } else {
        setTimeout(function () {
            // Escoge el siguiente texto en el array
            const siguienteIndiceTexto = (indiceTexto + 1) % textos.length
            write_remove(textos, siguienteIndiceTexto, 0)
        }, 1000) // Tiempo antes de empezar a escribir de nuevo (ajustable)
    }
}
