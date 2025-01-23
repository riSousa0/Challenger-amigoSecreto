
let listaDeAmigo = [];
let amigo = "";
const listaAmigos = document.getElementById("listaAmigos")

// amigo sorteado
function amigoSorteado(amigo){
    exibirNaTelaId("erroNome", "")
    exibirNaTelaId("resultado", `O seu amigo secreto é ${amigo}`);
    let indexAmigo = listaDeAmigo.indexOf(amigo);
    listaDeAmigo.splice(indexAmigo, 1);
    autalizaAlista();
    amigo = "";
}

// Função para sortear um amigo (Dentro da lista)
function sortearAmigo() {
    exibirNaTelaId("resultado", "")
    let tamanhoListaAmigos = listaDeAmigo.length;
    if (tamanhoListaAmigos == 0){
        exibirNaTelaId("erroNome", "Erro! Nenhum nome na lita")
    } else {
    // Função para escolher pelo index
    let indexAmigoSorteado = Math.floor(Math.random() * tamanhoListaAmigos);
    console.log(listaDeAmigo[indexAmigoSorteado]);
    amigo = listaDeAmigo[indexAmigoSorteado];
    return amigoSorteado(amigo);
    }
}

function adicionarAmigo() {
    exibirNaTelaId("resultado", "");
    amigo = document.querySelector("input").value;
    if (amigo == ""){
        exibirNaTelaId("erroNome", "Erro! Adicione um nome");
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

// Exibir um mensagem tela pelo id ou tag
function exibirNaTelaId(id, texto) {
    let campo = document.getElementById(id);
    campo.innerHTML = texto;
}

function exibirNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

// Limpeza input
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


