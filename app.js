//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Array para armazenar a lista de amigos
let amigos = [];

// Função para inserir amigo
function adicionarAmigo() {
    let inputAmigo = document.getElementById('amigo'); 
    let nomeAmigo = inputAmigo.value;
    let listaAmigos = document.getElementById('listaAmigos');

    // Validações
    if (nomeAmigo === '') {
        alert('Este nome não é válido, digite outro nome!');
        return
    } else {
        amigos.push(nomeAmigo);
    }
    console.log("Lista inicial:", amigos);

    inputAmigo.value = '';
}