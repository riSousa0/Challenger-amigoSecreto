
let listaDeAmigo = [];
let amigo = "";
const listaAmigos = document.getElementById("listaAmigos");


function amigoSorteado(amigo){
    exibirNaTelaId("erroNome", "");
    exibirNaTelaId("amigoSorteado", `${amigo} é seu amigo secreto`);
    let indexAmigo = listaDeAmigo.indexOf(amigo);
    listaDeAmigo.splice(indexAmigo, 1);
    autalizaAlista();
    amigo = "";
    document.getElementById("recomecar").removeAttribute("disabled")
}

// Função para sortear um amigo (Dentro da lista)
function sortearAmigo() {
    exibirNaTelaId("amigoSorteado", "")
    let tamanhoListaAmigos = listaDeAmigo.length;
    if (tamanhoListaAmigos == 0 || tamanhoListaAmigos == 1){
        exibirNaTelaId("erroNome", "Erro! Escreva dois nomes para sortear")
    } else {
        // Função para escolher pelo index
        let indexAmigoSorteado = Math.floor(Math.random() * tamanhoListaAmigos);
        amigo = listaDeAmigo[indexAmigoSorteado];
        return amigoSorteado(amigo);
    }
}

function adicionarAmigo() {
    exibirNaTela("h1", "Amigo secreto");
    exibirNaTelaId("amigoSorteado", "");
    amigo = document.querySelector("input").value;
    if (amigo == ""){
        exibirNaTelaId("erroNome", "Erro! Escreva um nome para adiciona-lo à lista");
    } else {
        exibirNaTelaId("erroNome", "");
        if (listaDeAmigo.includes(amigo)){
            exibirNaTelaId("erroNome", `Erro! Esse nome ${amigo} ja foi adicionado`);
        } else {
            exibirNaTelaId("erroNome", "");
            listaDeAmigo.push(amigo);
            console.log(listaDeAmigo);
            autalizaAlista();
            limpaCampo();
        }
    }
}

function recomecar() {
    exibirNaTela("h1", "Amigo secreto");
    exibirNaTelaId("amigoSorteado", "");
    listaDeAmigo = []
    autalizaAlista()
    limpaCampo()
    document.getElementById("recomecar").setAttribute("disabled", "disabled")
}

// Exibir um mensagem tela pelo id ou tag
function exibirNaTelaId(id, texto) {
    let campo = document.getElementById(id);
    campo.innerHTML = texto;
}

function exibirNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

// Limpeza
function limpaCampo(){
    amigo = document.querySelector("input");
    amigo.value = "";
}

// Lista na vertical
function autalizaAlista(){
    exibirNaTelaId("listaAmigos", '');
    for (let i = 0; i < listaDeAmigo.length; i++){
        const lista = document.createElement("li");
        lista.innerHTML = listaDeAmigo[i];
        listaAmigos.appendChild(lista);
    }
}


