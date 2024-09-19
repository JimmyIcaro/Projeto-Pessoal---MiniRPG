class Jogador {
    constructor(mapa, 
        // name, life, maxLife, atack, defense, mgcPoints 
        ) {
        // name = this.name
        // life = 0 
        // maxLife = 0 
        // atack = 0
        // defense = 0
        // mgcPoints = 0
        this.mapa = mapa;
        this.x = 0;  // Posição inicial
        this.y = 0;  // Posição inicial
    }

    // Movimentação do jogador
    mover(direcao) {
        switch (direcao) {
            case "norte":
                if (this.x > 0) this.x--;
                break;
            case "sul":
                if (this.x < this.mapa.linhas - 1) this.x++;
                break;
            case "leste":
                if (this.y < this.mapa.colunas - 1) this.y++;
                break;
            case "oeste":
                if (this.y > 0) this.y--;
                break;
            default:
                console.log("Direção inválida!");
        }
        this.descreverSalaAtual();
    }

    // Descreve o que há na sala atual
    descreverSalaAtual() {
        let sala = this.mapa.getSala(this.x, this.y);
        console.log(sala.getDescricao());

        if (sala.tipo === 3) {
            console.log("Parabéns! Você encontrou a saída e venceu o jogo!");
        }
    }
}
