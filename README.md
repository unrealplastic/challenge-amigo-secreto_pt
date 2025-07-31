# Projeto: Sorteador de Amigos

Este projeto foi desenvolvido como parte do desafio de lógica de programação do curso [ONE - Oracle Next Education]. O principal objetivo é praticar a lógica de programação com JavaScript, desenvolvendo uma aplicação que simula o sorteio de nomes de forma aleatória, sem repetições.

## Funcionalidades

A aplicação permite:

- ✅ Adicionar nomes de amigos a uma lista;
- ✅ Visualizar a lista atualizada de amigos;
- ✅ Sortear aleatoriamente um nome que ainda não foi sorteado;
- ✅ Exibir o último nome sorteado;
- ✅ Reiniciar o sorteio e limpar a lista.

## Lógica do Projeto

A lógica foi implementada inteiramente em **JavaScript** puro, utilizando as seguintes funções:

### `adicionarAmigo()`
Adiciona um nome digitado no campo de input à lista de amigos, valida se o campo está vazio e atualiza a visualização da lista.

### `limparCampo()`
Limpa o conteúdo do campo de input após a adição de um nome.

### `exibirAmigos()`
Percorre a lista de amigos e exibe os nomes na tela dinamicamente usando elementos HTML.

### `sortearAmigo()`
Sorteia aleatoriamente um nome da lista, garantindo que o mesmo nome não seja sorteado mais de uma vez. Quando todos os nomes forem sorteados, exibe uma mensagem informando que o sorteio foi finalizado.

### `mostrarResultado()`
Exibe o nome do último amigo sorteado na tela.

### `novoSorteio()`
Limpa todos os dados, incluindo a lista de amigos e os sorteados, reiniciando o sistema para um novo sorteio.

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla)

## Como executar
```bash
git clone git@github.com:unrealplastic/challenge-amigo-secreto_pt.git
