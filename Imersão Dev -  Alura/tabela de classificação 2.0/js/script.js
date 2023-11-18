// Array para armazenar os jogadores
let jogadores = [
  {nome:'Fábio',
  vitoria:0,
  empate:0,
  derrota:0,
  pontos:0,
},
{
  
  nome:'Luciana',
  vitoria:0,
  empate:0,
  derrota:0,
  pontos:0,
},
{
  
  nome:'Pedro',
  vitoria:0,
  empate:0,
  derrota:0,
  pontos:0,
},


];

// Função para montar a tabela de jogadores na interface
function montaTabela() {
  // Obtém o elemento da tabela pelo ID
  var tabJogadores = document.getElementById("tabelaJogadores");
  // Limpa o conteúdo atual da tabela
  tabJogadores.innerHTML = '';
  // Itera sobre a lista de jogadores e cria uma linha para cada um na tabela
  jogadores.forEach((jogador, index) => {
    const listItem = document.createElement('tr');
    // Preenche as células da linha com os dados do jogador
    listItem.innerHTML = `
      <td>${jogador.nome}</td>
      <td>${jogador.vitoria}</td>
      <td>${jogador.empate}</td>
      <td>${jogador.derrota}</td>
      <td>${jogador.pontos}</td>
      <td><button onClick="adicionarVitoria(${index})">Vitória</button></td>
      <td><button onClick="adicionarEmpate(${index})">Empate</button></td>
      <td><button onClick="adicionarDerrota(${index})">Derrota</button></td>
      <td><button onclick="removerJogador(${index})">Remover</button>
    `;
    // Adiciona a linha à tabela
    tabJogadores.appendChild(listItem);
  });
}

// Função para adicionar um novo jogador à lista
function adicionarJogador() {
  // Obtém o elemento do input com o ID 'novoJogador'
  var novoJogador = document.getElementById("novoJogador");
  // Verifica se o campo de nome do jogador está vazio
  if (!novoJogador.value) {
    alert("Digite um nome!");
    return false;
  }
  // Adiciona um novo jogador à lista com valores iniciais
  jogadores.push({
    nome: novoJogador.value,
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  });
  // Atualiza a tabela na interface
  montaTabela();
  // Limpa o campo de input
  novoJogador.value = "";
}

// Função para adicionar uma vitória a um jogador específico
function adicionarVitoria(indice) {
  jogadores[indice].vitoria += 1;
  jogadores[indice].pontos += 3;
  montaTabela();
}

// Função para adicionar um empate a um jogador específico
function adicionarEmpate(indice) {
  jogadores[indice].empate += 1;
  jogadores[indice].pontos += 1;
  montaTabela();
}

// Função para adicionar uma derrota a um jogador específico
function adicionarDerrota(indice) {
  jogadores[indice].derrota += 1;
  montaTabela();
}

// Função para remover um jogador da lista pelo índice
function removerJogador(index) {
  jogadores.splice(index, 1);
  montaTabela();
}

// Chama a função para montar a tabela inicialmente
montaTabela();
