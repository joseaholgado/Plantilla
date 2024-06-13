// This is function active of progress bar in the seccion of skills
export function llenar_barra_progreso(id, valor, valoresIniciales) {
    const barraProgreso = document.getElementById(id).querySelector('.progreso')
    const porcentajeText = document.getElementById(id).querySelector('.porcentaje')

    barraProgreso.style.width = valor + '%'
    porcentajeText.textContent = valor + '%'

    if (valor < valoresIniciales[id]) {
        valor++;
        setTimeout(() => llenar_barra_progreso(id, valor, valoresIniciales), 40) // Velocidad de llenado (ajustable)
    }
}
