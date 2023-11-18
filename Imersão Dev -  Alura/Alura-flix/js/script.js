// Esta é a lista de filmes. Cada filme é um objeto com duas propriedades: imagem e nome.

var listaFilmes = [
  {
    imagem: 'https://www.cineplayers.com/sites/default/files/posters/2020/11/stellar.jpg',
    nome: 'Interestelar '
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
    imagem: 'https://br.web.img2.acsta.net/pictures/21/12/16/10/26/5839797.jpg',
    nome: 'Dragon Ball Super: Super Herói'
  },
  {
    imagem: 'https://br.web.img3.acsta.net/pictures/15/05/28/17/20/502228.jpg',
    nome: 'The Last - Naruto o Filme'
  },
  {
    imagem: 'https://br.web.img3.acsta.net/medias/nmedia/18/87/30/91/19874163.jpg',
    nome: '2012'
  },
  {
    imagem: 'https://br.web.img3.acsta.net/pictures/19/04/26/17/30/2428965.jpg',
    nome: 'Vingadores: Ultimato'
  },
  {
    imagem: 'https://lumiere-a.akamaihd.net/v1/images/lion_king_the_2019_la_ih_ptb_1000_x_1440_2baad78d.jpeg',
    nome: 'O Rei Leão'
  },
  {
    imagem: 'https://br.web.img3.acsta.net/pictures/19/03/27/21/03/0464387.jpg',
    nome: 'Toy Story 4'
  },
  {
    imagem: 'https://img.elo7.com.br/product/zoom/23646C7/big-poster-filme-capita-marvel-tamanho-90x60-cm-presente-geek.jpg',
    nome: 'Capitã Marvel'
  },
  {
    imagem: 'https://upload.wikimedia.org/wikipedia/pt/b/be/Aladdin_%282019%29.jpg',
    nome: 'Aladdin'
  },
  {
    imagem: 'https://upload.wikimedia.org/wikipedia/pt/thumb/6/63/Joker_%282019%29.jpg/250px-Joker_%282019%29.jpg',
    nome: 'Coringa'
  },
  {
    imagem: 'https://upload.wikimedia.org/wikipedia/pt/thumb/4/4f/Frozen_2_poster.jpg/250px-Frozen_2_poster.jpg',
    nome: 'Frozen II'
  },
  {
    imagem: 'https://img.elo7.com.br/product/original/294C1F8/poster-star-wars-a-ascensao-skywalker-lo01-tamanho-90x60-cm-quadro-star-wars.jpg',
    nome: 'Star Wars: A Ascensão Skywalker'
  },
  {
    imagem: 'https://br.web.img2.acsta.net/pictures/19/07/05/17/30/5167951.jpg',
    nome: 'Homem-Aranha: Longe de Casa'
  },
  {
    imagem: 'https://m.media-amazon.com/images/I/61bC10sxHOL._AC_UF894,1000_QL80_.jpg',
    nome: 'Os Incríveis 2'
  }
  
];
  // ... Meus filmes aqui ...

// Esta é uma variável que usaremos para percorrer a lista de filmes.
var i = 0;

// Este é um loop que continuará enquanto 'i' for menor que o número de filmes na lista.
while (i < listaFilmes.length) {

  // Aqui estamos escrevendo um novo contêiner de filme no documento HTML.
  document.write('<div class="filme-container">');
  
  // Este é outro loop que percorre a lista de filmes.
  for (var i = 0; i < listaFilmes.length; i++) {
    
    // Aqui estamos verificando se a URL da imagem do filme atual termina com .jpg ou .jpeg.
    if (/(.jpg|.jpeg)$/i.test(listaFilmes[i].imagem)) {
      
      // Se a URL da imagem for válida, escrevemos um novo cartão de filme no contêiner de filme.
      document.write(
        '<div class="filme-card">' +
          '<img class="filme-img" src="' + listaFilmes[i].imagem + '">' +
          '<p class="filme-nome">' + listaFilmes[i].nome + '</p>' +
        '</div>'
      );
      
    } else {
      // Se a URL da imagem não for válida, registramos um erro no console.
      console.error(
        "A URL " +
          listaFilmes[i].imagem +
          "Isso não é uma imagem! :/ "
      );
    }
  }
}
