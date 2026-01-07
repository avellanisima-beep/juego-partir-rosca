function cambiarFondo(color) {
    document.documentElement.style.setProperty('--fondo-ui', color);
}

function moverElemento(id, x, y) {
    const el = document.getElementById(id);
    el.style.left = x + "px";
    el.style.top = y + "px";
}

function cambiarTexto(id, texto) {
    document.getElementById(id).innerText = texto;
}
