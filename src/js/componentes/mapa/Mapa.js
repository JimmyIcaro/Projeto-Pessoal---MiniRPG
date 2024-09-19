
class Mapa {
    constructor(linhas, colunas) {
        this.linhas = linhas;
        this.colunas = colunas;
        this.salas = this.gerarMapa();
    }

    // Gera o mapa com diferentes tipos de salas
    gerarMapa() {
        let mapa = [];
        for (let i = 0; i < this.linhas; i++) {
            let linha = [];
            for (let j = 0; j < this.colunas; j++) {
                let tipoSala = Math.floor(Math.random() * 4);  // Gera um número aleatório entre 0 e 3
                linha.push(new Sala(tipoSala));
            }
            mapa.push(linha);
        }
        return mapa;
    }

    // Retorna a sala na posição do jogador
    getSala(x, y) {
        return this.salas[x][y];
    }
}