// =================================
// CLIENTE FÁCIL - APP
// =================================


// Abrir páginas do sistema

function abrirPagina(pagina){


    let paginas = document.querySelectorAll(".pagina");


    paginas.forEach(function(item){

        item.classList.add("escondido");

    });



    document.getElementById(pagina)
    .classList.remove("escondido");


}
