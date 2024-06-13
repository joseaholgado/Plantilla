'use strict';
import { llenar_barra_progreso } from './seccion1/barra_progreso.mjs'
import { escribirYBorrar } from './seccion2/escritura_mecanica.mjs'

// Array con diferentes textos
const textos = ["Desarrollador Full-Stack", "Programador", "Desarrollador Web"]


// Iniciar el proceso con el primer texto del array
escribirYBorrar(textos, 0, 0)


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
// Iniciar el llenado desde 0 para cada barra de progreso
for (const id in valoresIniciales) {
    llenar_barra_progreso(id, 0, valoresIniciales)
}