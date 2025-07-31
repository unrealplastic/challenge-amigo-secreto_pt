//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];
let amigosSorteados = [];

function exibirMensagem(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function adicionarAmigo(){
    let nome = document.querySelector('input').value;
    if(nome == ''){
        alert('Por favor, insira um nome.');
    } else{
        amigos.push(nome);
        limparCampo();
        exibirAmigos();
        console.log(amigos);
    }
}

function limparCampo(){
    document.querySelector('input').value = '';
}

function exibirAmigos(){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    amigos.forEach(function(amigo) {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo(){
    let quantidadeAmigos = amigos.length;

    if (amigos.length === 0) {
        alert('A lista está vazia. Adicione amigos para realizar o sorteio.');
    } else if (amigosSorteados.length === quantidadeAmigos) {
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = '';
        let texto = document.createElement('p');
        texto.textContent = 'Todos os nomes já foram sorteados!';
        resultado.appendChild(texto);
        return;
    } else {
        let indice = Math.floor(Math.random() * amigos.length);
        let amigoEscolhido = amigos[indice];
        if (amigosSorteados.includes(amigoEscolhido)) {
            return sortearAmigo();
        } else {
            amigosSorteados.push(amigoEscolhido);
            mostrarResultado();
            return amigoEscolhido;
        }
    }
}

function mostrarResultado(){
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    if (amigosSorteados.length > 0) {
        let texto = document.createElement('p');
        texto.textContent = 'Último sorteado:';
        resultado.appendChild(texto);

        let ultimoSorteado = amigosSorteados[amigosSorteados.length - 1];
        let li = document.createElement('li');
        li.textContent = ultimoSorteado;
        resultado.appendChild(li);
    }
}

function novoSorteio(){
    limparCampo();
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('listaAmigos').innerHTML = '';
    amigosSorteados = [];
    amigos = [];
    console.log(amigos)
}