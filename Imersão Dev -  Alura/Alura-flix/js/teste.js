var listaFilmes = [
  {
    imagem: 'https://www.cineplayers.com/sites/default/files/posters/2020/11/stellar.jpg',
    nome: 'Interestelar'
  },
  {
    imagem: 'https://upload.wikimedia.org/wikipedia/pt/e/e7/Martian_poster_2015.jpg',
    nome: 'Perdido em Marte'
  },
  {
    imagem: 'https://br.web.img3.acsta.net/medias/nmedia/18/90/67/58/20107766.jpg',
    nome: 'Harry Potter e a Ordem da Fênix'
  },
  {
    imagem: 'https://br.web.img3.acsta.net/medias/nmedia/18/90/67/58/20107766.jpg',
    nome: 'Harry Potter e a Ordem da Fênix'
  },
  {
    imagem: 'https://br.web.img3.acsta.net/medias/nmedia/18/90/67/58/20107766.jpg',
    nome: 'Harry Potter e a Ordem da Fênix'
  },
];

// Lista para armazenar os nomes dos filmes já adicionados
var filmesAdicionados = [];

// Loop para percorrer a lista de filmes
for (var i = 0; i < listaFilmes.length; i++) {

  // Verificar se o filme já foi adicionado
  if (!filmesAdicionados.includes(listaFilmes[i].nome)) {

    document.write('<div class="filme-container">');
    
    // Adicionar o nome do filme à lista de filmes adicionados
    filmesAdicionados.push(listaFilmes[i].nome);

    // Escrever o cartão do filme
    document.write(
      '<div class="filme-card">' +
        '<img class="filme-img" src="' + listaFilmes[i].imagem + '">' +
        '<p class="filme-nome">' + listaFilmes[i].nome + '</p>' +
      '</div>'
    );

    document.write('</div>');
  }
}
