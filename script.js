                         // criandoa função
function ExpRecMenu(){
    const header = document.querySelector("header");


                         // vai add a animção

    header.classList.add("animando");

                         // tirar a amimação

    header.classList.toggle("menu_aberto");


                         // isso serve para contar quanto tempo da parte acima que desaparece

    setTimeout(() => {
        header.classList.remove("animando");
    }, 250);
}