alert('Ola, Bem vindo ao jogo Mentalista. ')
alert('você tem 10 tentativas para acertar o numero secreto')
var nome = prompt('Antes de começar o jogo, me fale seu nome: ')
alert ('Entao vamos la ' + nome + ', Boa sorte!')

//declarando variavel do numero secreto
var numeroSecreto = parseInt(Math.random() * 1001 + 1);

//declarando variavel para contar as tentativas
var tentativas = 0;

//declarando variavel para limitar as tentativas
var limiteTentativas = 10;

//declarando variavel para indicar se perdeu ou não
var perdeu = false;

//chamando a função que verifica se acertou ou não
verifica();

//funcao que verifica se acertou ou não
function verifica() {
  //usando um laço while para repetir o jogo
  //adicionando a condição && (e) para verificar se as duas condições são verdadeiras

  while (chute != numeroSecreto && tentativas < limiteTentativas) {
    //pedindo ao usuario para digitar um numero do 0 a 1000

    var chute = prompt(nome + ' Digite um numero do 1 a 1000');
    //incrementando a variavel tentativas em um
    tentativas++;
    //verificando se o usuario acertou ou errou

    if (chute == numeroSecreto) {
      //mostrando uma mensagem de parabéns
      alert('Você acertou');
      //saindo do laço com break
      break;
    } else if (chute > numeroSecreto) {
      //mostrando uma mensagem de erro e pedindo outro numero
      alert('Você errou! O numero secreto é menor que: ' + chute);
      alert(' Você ja deu ' + tentativas + ' tentativas!');
    } else if (chute < numeroSecreto) {
      //mostrando uma mensagem de erro e pedindo outro numero
      alert('Você errou! O numero secreto é maior que: ' + chute);
      alert(' Você ja deu ' + tentativas + ' tentativas!');
    }
    //verificando se atingiu o limite de tentativas
    if (tentativas == limiteTentativas) {
      //atribuindo o valor true à variavel perdeu
      perdeu = true;
      //saindo do laço com break
      break;
    }
  }
}

//verificando se perdeu ou não
if (perdeu) {
  //mostrando a mensagem de você perdeu
  alert('Você perdeu! :(');
  alert('Aperte F5 e tente novamente!')
} else {
  //mostrando a mensagem de você acertou
  alert('Parabens '+ nome + '! Você acertou em ' + tentativas + ' tentativa(s)');
}
