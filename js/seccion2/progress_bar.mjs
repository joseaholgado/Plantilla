// This is function active of progress bar in the seccion of skills
export function fill_progress_bar(id, valor, valoresIniciales) {
    const barraProgreso = document.getElementById(id).querySelector('.progreso')
    const porcentajeText = document.getElementById(id).querySelector('.porcentaje')

    barraProgreso.style.width = valor + '%'
    porcentajeText.textContent = valor + '%'

    if (valor < valoresIniciales[id]) {
        valor++;
        setTimeout(() => fill_progress_bar(id, valor, valoresIniciales), 40) // Velocidad de llenado (ajustable)
    }
}
