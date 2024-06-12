'use strict';

// Array con diferentes textos
const textos = ["Desarrollador Full-Stack", "Programador", "Desarrollador Web"];

// Obtener el elemento donde se escribirá el texto
const textoMecanico = document.getElementById('dw');

// Función para simular la escritura y borrado del texto
function escribirYBorrar(textos, indiceTexto, indiceCaracter) {
    const textoActual = textos[indiceTexto];

    if (indiceCaracter < textoActual.length) {
        textoMecanico.textContent += textoActual.charAt(indiceCaracter);
        setTimeout(function () {
            escribirYBorrar(textos, indiceTexto, indiceCaracter + 1);
        }, 200); // Velocidad de escritura (ajustable)
    } else {
        setTimeout(function () {
            borrar(textos, indiceTexto, indiceCaracter);
        }, 2000); // Tiempo antes de borrar el texto (ajustable)
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
            const siguienteIndiceTexto = (indiceTexto + 1) % textos.length;
            escribirYBorrar(textos, siguienteIndiceTexto, 0);
        }, 1000); // Tiempo antes de empezar a escribir de nuevo (ajustable)
    }
}

// Iniciar el proceso con el primer texto del array
escribirYBorrar(textos, 0, 0);


// Valores iniciales para cada barra de progreso
const valoresIniciales = {
    angular: 40,
    js: 80,
    figma: 70,
    html: 100,
    java: 80,
    github: 50,
    php: 50,
    laravel: 30,
    css: 80,
    python: 50
};

function llenarBarraProgreso(id, valor) {
    const barraProgreso = document.getElementById(id).querySelector('.progreso');
    const porcentajeText = document.getElementById(id).querySelector('.porcentaje');

    barraProgreso.style.width = valor + '%';
    porcentajeText.textContent = valor + '%';

    if (valor < valoresIniciales[id]) {
        valor++;
        setTimeout(() => llenarBarraProgreso(id, valor), 40); // Velocidad de llenado (ajustable)
    }
}

// Iniciar el llenado desde 0 para cada barra de progreso
for (const id in valoresIniciales) {
    llenarBarraProgreso(id, 0);
}

