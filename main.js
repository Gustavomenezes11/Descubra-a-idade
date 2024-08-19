//Função de Calcular//
function calcular() {
    const ano = document.getElementsByClassName("anoquenasceu")[0].value
    const calculoum = 2024 - ano
    const resultado = document.getElementsByClassName("resultadonatela")[0].innerHTML = calculoum
}

//Pagina no modo azul//
function modoazul(){
    document.body.style.backgroundColor= "DarkBlue"
    const corazul = document.getElementById("campoprincipal").style.backgroundColor="DarkBlue"
}

//Pagina no modo vermelho//
function modovermelho(){
    document.body.style.backgroundColor= "DarkRed"
    const corvermelho = document.getElementById("campoprincipal").style.backgroundColor = "DarkRed"
}
