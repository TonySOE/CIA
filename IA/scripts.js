var visible = false;

function iniciar() {
    var menuIcono = document.getElementById("menuicono");
    var menu = document.querySelector(".header-content");

    menuIcono.addEventListener("click", mostrarMenu);
    window.addEventListener("resize", ajustarMenu);


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
        menu.style.display = "flex";
        visible = true;
    } else {
        menu.style.display = "none";
        visible = false;
    }
}

window.addEventListener("load", iniciar);
