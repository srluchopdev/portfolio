window.onscroll = function() {
    myFunction();
};

var secciones = document.getElementsByTagName("section");
var fechas = document.getElementsByClassName("fecha");

function myFunction() {
    for (var i = 0; i < secciones.length; i++) {
        var topOffset = secciones[i].offsetTop;
        var nextTopOffset = (i < secciones.length - 1) ? secciones[i + 1].offsetTop : Number.MAX_VALUE;

        if (window.scrollY >= topOffset - 100 && window.scrollY < nextTopOffset - 100) {
            eliminaClase();
            if (fechas[i - 1]) {
                fechas[i - 1].classList.add("seleccionado");
            }
        }
    }
}

function eliminaClase() {
    for (var i = 0; i < fechas.length; i++) {
        fechas[i].classList.remove("seleccionado");
    }
}
