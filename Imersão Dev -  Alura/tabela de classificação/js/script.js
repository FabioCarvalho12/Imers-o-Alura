function criarUsuario() {
    var nick = document.getElementById('nick').value;
    var photo = document.getElementById('photo').value;

    if (nick && photo)  {
        var tabelaUsuarios = document.getElementById('tabelaUsuarios');
        var newRow = tabelaUsuarios.insertRow(-1);
        var nickCell = newRow.insertCell(0);
        var photoCell = newRow.insertCell(1);
        var vitoriasCell = newRow.insertCell(2);
        var killsCell = newRow.insertCell(3);
        var assistenciasCell = newRow.insertCell(4);
        var totalPontosCell = newRow.insertCell(5);

        nickCell.innerText = nick;
        photoCell.innerHTML = `<img src="${photo}" alt="${nick}" style="max-width: 50px; max-height: 50px;">`;
        vitoriasCell.innerText = '0';
        killsCell.innerText = '0';
        assistenciasCell.innerText = '0';
        totalPontosCell.innerText = '0';

        document.getElementById('nick').value = '';
        document.getElementById('photo').value = '';
    } 
}

function adicionarPontos(tipo, pontos) {
    var pontosCell = document.getElementById(tipo + 'sCell');
    pontosCell.innerText = parseInt(pontosCell.innerText) + pontos;
    atualizarTotalPontos();
}

function adicionarKills() {
    adicionarPontos('kill', 1);
}

function atualizarTotalPontos() {
    var tabelaUsuarios = document.getElementById('tabelaUsuarios');
    var totalPontosCells = tabelaUsuarios.querySelectorAll('tr:not(:first-child) td:last-child');

    var totalPontos = 0;
    totalPontosCells.forEach(function(cell) {
        totalPontos += parseInt(cell.innerText);
    });

    document.getElementById('totalPontosCell').innerText = totalPontos;
}