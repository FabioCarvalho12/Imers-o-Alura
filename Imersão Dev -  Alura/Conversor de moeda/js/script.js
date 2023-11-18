// Conversão de Dólar para Real
var cotacaoEmDolar = 5.32;
var valorEmDolar = parseFloat(prompt('Digite o valor em Dólar:'));
var valorEmRealDolar = valorEmDolar * cotacaoEmDolar;

valorEmRealDolar = valorEmRealDolar.toFixed(2);
alert('Ola, Fábio, o valor do Dólar convertido é: R$ ' + valorEmRealDolar);

// Conversão de Bitcoin para Real
var cotacaoEmBitcoin = 180785.66;
var totalEmRealBitcoin = parseFloat(prompt('Digite o valor em Bitcoin:'));
var valorEmRealBitcoin = cotacaoEmBitcoin * totalEmRealBitcoin;

valorEmRealBitcoin = Number(valorEmRealBitcoin.toFixed(2));
alert('Ola, Fábio, o valor do Bitcoin convertido é: R$ ' + valorEmRealBitcoin);

// Conversão de Euro para Real
var cotacaoEmEuro = 5.25;
var valorEmEuro = parseFloat(prompt('Digite o valor em Euro:'));
var valorEmRealEuro = valorEmEuro * cotacaoEmEuro;

valorEmRealEuro = valorEmRealEuro.toFixed(2);
alert('Ola, Fábio, o valor em Euro convertido é: R$ ' + valorEmRealEuro);
