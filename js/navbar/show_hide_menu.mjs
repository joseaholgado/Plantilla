export function toggle_menu() {
    const sidebar = document.querySelector('.sidebar')
    const overlay = document.querySelector('.overlay')

    sidebar.classList.toggle('active')
    overlay.classList.toggle('active')
}

export function close_menu() {
    const sidebar = document.querySelector('.sidebar')
    const overlay = document.querySelector('.overlay')

    sidebar.classList.remove('active')
    overlay.classList.remove('active')
}
