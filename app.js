
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
    document.getElementById("recomecar").removeAttribute("disabled");
    lançarConfetti();
}

// Função para sortear um amigo (Dentro da lista)
function sortearAmigo() {
    exibirNaTelaId("resultado", "")
    let tamanhoListaAmigos = listaDeAmigo.length;
    if (tamanhoListaAmigos == 0 || tamanhoListaAmigos == 1){
        exibirNaTelaId("erroNome", "Erro! Escreva dois nomes para sortear")
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
    var amigoMinuscula = amigo.toLowerCase();
    if (amigo == ""){
        exibirNaTelaId("erroNome", "Erro! Escreva um nome para adiciona-lo à lista");
    } else {
        exibirNaTelaId("erroNome", "");
        if (listaDeAmigo.includes(amigoMinuscula)){
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
            lista.addEventListener("click", function() {
                listaDeAmigo.splice(i, 1)
                autalizaAlista()
            })
        }
    }

function lançarConfetti() {
    confetti({
        particleCount: 500, 
        spread: 160,        
        origin: { x: 0.5, y: 0.5 } 
    });
}

function recomecar() {
    exibirNaTela("h1", "Amigo secreto");
    exibirNaTelaId("resultado", "");
    listaDeAmigo = [];
    autalizaAlista();
    limpaCampo();
    document.getElementById("recomecar").setAttribute("disabled", "disabled");
}
