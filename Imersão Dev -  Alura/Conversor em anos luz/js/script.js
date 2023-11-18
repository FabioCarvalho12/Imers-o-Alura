// Solicita ao usuário que digite um valor em anos-luz
var anosLuz = prompt("Digite um valor em anos-luz:");

// Converte o valor em quilômetros usando a fórmula: 1 ano-luz = 9.461e+12 km
var quilometros = anosLuz * 9.461e+12;

// Mostra o resultado em um alerta
alert(anosLuz + " anos-luz equivalem a " + quilometros + " quilômetros.");
