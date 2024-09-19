class Sala {
    constructor(tipo) {
        this.tipo = tipo;  // 0 = nada, 1 = tesouro, 2 = inimigo, 3 = saída
    }

    getDescricao() {
        switch (this.tipo) {
            case 0:
                return "Esta sala está vazia.";
            case 1:
                return "Você encontrou um tesouro!";
            case 2:
                return "Um inimigo apareceu!";
            case 3:
                return "Você encontrou a saída!";
        }
    }
}