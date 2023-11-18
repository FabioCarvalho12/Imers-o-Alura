// Arrays para armazenar nomes, imagens e trailers dos filmes favoritos
var listaNomesFilmes = [];
var listaImagensFilmes = [];
var listaTrailersFilmes = [];

// Função para adicionar um novo filme à lista
function adicionarFilme() {
  // Obter os valores dos campos de entrada do usuário
  var imagemFilmeFavorito = document.getElementById("imagemFilme").value;
  var nomeFilmeFavorito = document.getElementById("nomeFilme").value;
  var trailerFilmeFavorito = document.getElementById("trailerFilme").value;

  // Verificar se o endereço da imagem termina com .jpg ou .jpeg
  if (
    imagemFilmeFavorito.endsWith("jpg") ||
    imagemFilmeFavorito.endsWith("jpeg")
  ) {
    // Adicionar os dados do filme aos arrays
    listaNomesFilmes.push(nomeFilmeFavorito);
    listaImagensFilmes.push(imagemFilmeFavorito);
    listaTrailersFilmes.push(trailerFilmeFavorito);

    // Limpar o conteúdo da lista de filmes no HTML
    var elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML = "";

    // Iterar sobre os arrays e criar elementos HTML para cada filme
    for (var i = 0; i < listaNomesFilmes.length; i++) {
      elementoListaFilmes.innerHTML += `<div class='container_filme'> <a href="${listaTrailersFilmes[i]}" target="blank"><img src="${listaImagensFilmes[i]}"></a> <p class="nome-filme">${listaNomesFilmes[i]}</p> </div>`;
    }

    // Limpar os campos de entrada após adicionar o filme
    limparCampos();
  } else {
    // Alerta se o endereço da imagem não terminar com .jpg ou .jpeg
    alert(
      "Endereço de imagem inválido!!\nInsira um endereço com final .jpg ou jpeg"
    );
    // Limpar os campos de entrada em caso de erro
    limparCampos();
  }
}

// Função para limpar os campos de entrada
function limparCampos() {
  document.getElementById("imagemFilme").value = "";
  document.getElementById("nomeFilme").value = "";
  document.getElementById("trailerFilme").value = "";
}
