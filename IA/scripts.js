var visible = false;

function iniciar() {
    var menuIcono = document.getElementById("menuicono");
    var menu = document.querySelector(".header-content");

    menuIcono.addEventListener("click", mostrarMenu);
    window.addEventListener("resize", ajustarMenu);

    // Asegurar que el menú esté oculto por defecto en móviles
    ajustarMenu();
}

function mostrarMenu() {
    var menu = document.querySelector(".header-content");

    if (!visible) {
        menu.style.display = "flex";
        visible = true;
    } else {
        menu.style.display = "none";
        visible = false;
    }
}

function ajustarMenu() {
    var menu = document.querySelector(".header-content");

    if (window.innerWidth > 668) {
        menu.style.display = "flex"; // Siempre visible en pantallas grandes
        visible = true;
    } else {
        menu.style.display = "none"; // Oculto por defecto en móviles
        visible = false;
    }
}

window.addEventListener("load", iniciar);
