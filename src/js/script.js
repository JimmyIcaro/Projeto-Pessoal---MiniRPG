// Instanciar o mapa e o jogador
let mapa = new Mapa(5, 5);  // Um mapa 5x5
let jogador = new Jogador(mapa);

// Função para mover o jogador e atualizar o texto
function mover(direcao) {
    jogador.mover(direcao);
    atualizarMensagem();
}

// Função que atualiza a mensagem no HTML
function atualizarMensagem() {
    let sala = mapa.getSala(jogador.x, jogador.y);
    document.getElementById("mensagem").innerText = sala.getDescricao();
}