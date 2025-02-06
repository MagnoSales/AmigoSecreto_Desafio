//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Array para armazenar a lista de amigos
let amigos = [];

// Função para inserir amigo - função que está no Html - linha 24
function adicionarAmigo() {
    let inputAmigo = document.getElementById('amigo'); 
    let nomeAmigo = inputAmigo.value;
    let listaAmigos = document.getElementById('listaAmigos');

    // Validações
    if (nomeAmigo === '') {
        alert('Por favor, insira um nome.');
        return
    } else {
        amigos.push(nomeAmigo);
    }
    console.log("Lista após adicionar:", amigos);

    // Limpa o input
    inputAmigo.value = '';

    // Chama a função para atualizar a lista visual
    atualizarLista();
}

// Função para atualizar a lista visual
function atualizarLista() {
    // Obter o elemento da lista
    let lista = document.getElementById('listaAmigos');
    
    // Limpar a lista existente
    lista.innerHTML = "";
    console.log("Atualizando lista visual. Array atual:", amigos);
    // Percorrer o array e criar elementos para cada nome
    for (let i = 0; i < amigos.length; i++) {
        console.log(`Adicionando item ${i + 1}: ${amigos[i]}`);
        // Criar elemento de lista para cada amigo
        let itemLista = document.createElement('li');
        itemLista.innerText = amigos[i];
        
        // Adicionar o elemento à lista
        lista.appendChild(itemLista);
    }
    console.log("Lista visual atualizada. Total de itens:", amigos.length);
}

// Função para sortear amigo - função que está no HTML - linha 29
function sortearAmigo() {
    // Validar se há amigos disponíveis
    if (amigos.length === 0) {
        alert('Não há amigos para sortear. Adicione alguns nomes primeiro.');
        return;
    }

    // Gerar um índice aleatório
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obter o nome sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar o resultado
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo sorteado foi: ${amigoSorteado}`;

    console.log("Índice sorteado:", indiceAleatorio); // Log do índice
    console.log("Amigo sorteado:", amigoSorteado);    // Log do amigo sorteado
}
