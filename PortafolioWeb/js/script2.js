function mostrar(clase) {
    "use strict";
    var items = document.getElementById("galeria").children;
    var i;

    
    for (i = 0; i < items.length; i += 1) {
       
        if (items[i].className.match(clase)) {
            items[i].style.display = "block";
        } else {
            items[i].style.display = "none";
        }
    }
}
 

function fotografia() {
    "use strict";
    mostrar("foto");
}


function ilustracion() {
    "use strict";
    mostrar("ilustracion");
}


function editorial() {
    "use strict";
    mostrar("editorial");
}


function branding() {
    "use strict";
    mostrar("branding");
}

function programacion() {
    "use strict";
    mostrar("programacion");
}


function todo() {
    "use strict";
    var items = document.getElementById("galeria").children;
    var i;

   
    for (i = 0; i < items.length; i += 1) {
        items[i].style.display = "block";
    }
}



//MENÚ HAMBURGUESA

//animacion del icono del menu
function animar() {
    "use strict";
    document.getElementById("icono").classList.toggle("cambiar");
}

//MENÚ HAMBURGUESA

function openMenu() {
    "use strict";
    animar();
    document.getElementById("menu").style.left = "0";
}
 
function closeMenu() {
    "use strict";
    animar();
    document.getElementById("menu").style.left = "100%";
}

function menu() {
    "use strict";
    if (document.getElementById("menu").style.left === "0px") {
        closeMenu();
    } else {
        openMenu();
    }
}

window.onresize = function() {
    "use strict";
    if(window.innerWidth <= 500){
        menu();
    } else {
        menuweb();
    } 
}


