'use strict';
import { fill_progress_bar } from './seccion2/progress_bar.mjs'
import { write_remove } from './seccion1/writing_mecanic.mjs'
import { toggle_menu, close_menu } from './navbar/show_hide_menu.mjs'


//Hear tell event of menu button with the function show_hide_menu
const menu_btn = document.querySelector('.menu-btn')
const overlay = document.querySelector('.overlay')
menu_btn.addEventListener('click', toggle_menu)
overlay.addEventListener('click', close_menu)


// Array con diferentes textos
const textos = ["Programador", "Desarrollador", "Full-Stack"]


// Iniciar el proceso con el primer texto del array
write_remove(textos, 0, 0)


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
    fill_progress_bar(id, 0, valoresIniciales)
}


