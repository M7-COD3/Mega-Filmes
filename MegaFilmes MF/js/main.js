const btnseries = Array.from(document.getElementsByClassName("btnseries"));
btnseries.forEach(item => {
    item.addEventListener("click", (myPrevent) => {
        myPrevent.preventDefault(event);
        const eventAtribute = event.target.getAttribute("data");
        btnseries.forEach(item => {
            const itemAtribute = item.getAttribute("data");
            if (eventAtribute === itemAtribute) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        })
    })
})

//validação de pesquisas
const pesquisar = document.querySelector(".pesquisar");
const btnpesquisas = document.querySelector(".btnpesquisas");
const divErro = document.getElementsByClassName("divErro");
const voltar = document.querySelector(".voltar");

voltar.addEventListener("click", (a) => {
    a.preventDefault();
    sairback("divErro")
    function sairback(classe) {
        $("." + classe).slideUp();
    }
})

function verErros(classe) {
    $("." + classe).slideDown();
}

function negar(classe) {
    $("." + classe).hide();
}
negar("divErro");

function negar(classe) {
    $("." + classe).hide();
}
negar("filmesinfodesa");

function negar(classe) {
    $("." + classe).hide();
}

function negar(classe) {
    $("." + classe).hide();
}
negar("filmesinfoanne");

function verErros2(classe) {
    $("." + classe).show();
}

btnpesquisas.addEventListener("click", (myClick) => {
    myClick.preventDefault();
    const verPesquisa = pesquisar.value;
    switch (verPesquisa) {
        //from
        case "from":
            verErros2("filmesinfo");
            negar("filmesinfodesa");
            negar("filmesinfoanne");
            break;
        case "From":
            verErros2("filmesinfo");
            negar("filmesinfodesa");
            negar("filmesinfoanne");
            break;
        case "FROM":
            verErros2("filmesinfo");
            negar("filmesinfodesa");
            negar("filmesinfoanne");
            break;

        //anne
        case "anne":
            verErros2("filmesinfoanne");
            negar("filmesinfodesa");
            negar("filmesinfo");
            break;
        case "Anne":
            verErros2("filmesinfoanne");
            negar("filmesinfodesa");
            negar("filmesinfo");
            break;
        case "ANNE":
            verErros2("filmesinfoanne");
            negar("filmesinfodesa");
            negar("filmesinfo");
            break;
        
        //desaparecidos
        case "Desaparecidos":
            verErros2("filmesinfodesa");
            negar("filmesinfoanne");
            negar("filmesinfo");
            break;
        case "desaparecidos":
            verErros2("filmesinfodesa");
            negar("filmesinfoanne");
            negar("filmesinfo");
            break;
        case "DESAPARECIDOS":
            verErros2("filmesinfodesa");
            negar("filmesinfoanne");
            negar("filmesinfo");
            break;
        case "":
            break;
        default:
            verErros("divErro");
            divErro.style.display = "block";
    }
});


