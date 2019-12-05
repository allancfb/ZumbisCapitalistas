class Cerebro {
    constructor() {
        this.quantidade = 0;
    }

    incrementar(incremento) {
        if (typeof incremento === 'number') {
            this.quantidade += incremento;
        }
        else {
            console.error('nao pode')
        }
    }

    decrementar(decremento) {
        this.quantidade -= decremento;
    }

    getQuantidade() {
        return this.quantidade;
    }

    setQuantidade(quantidade) {
        this.quantidade = quantidade;
    }
}

class CerebroDourado extends Cerebro {
    constructor() {
        super();
    }
}

class Zumbi {
    constructor() {
        this.cerebrosPorClique = 1;
        this.nivel = 1;
    }

    upgrade() {
        this.nivel++;
        this.cerebrosPorClique *= 2;
    }

    gerarCerebros(cerebro) {
        cerebro.incrementar(this.cerebrosPorClique);
    }

    getCerebrosPorClique() {
        return this.cerebrosPorClique;
    }

    getNivel() {
        return this.nivel;
    }

    setCerebrosPorClique(cerebrosPorClique) {
        this.cerebrosPorClique = cerebrosPorClique;
    }

    setNivel(nivel) {
        this.nivel = nivel;
    }
}

class ZumbiEspecial extends Zumbi {
    constructor() {
        super();
        this.cerebrosPorClique *= 2;
    }
}

// definir
class Conquista {
    constructor(texto, condicao) {
        this.texto = texto;
        this.condicao = condicao;
        this.desbloqueado = false;
    }

    desbloquear() {
        this.desbloqueado = true;
    }

    getTexto() {
        return this.texto;
    }

    getCondicao() {
        return this.condicao;
    }

    getDesbloqueado() {
        return this.desbloqueado;
    }

    setTexto(texto) {
        this.texto = texto;
    }

    setCondicao(condicao) {
        this.condicao = condicao;
    }

    setDesbloqueado(desbloqueado) {
        this.desbloqueado = desbloqueado;
    }
}

class Upgrade {
    constructor(efeito) {
        this.efeito = efeito;
        this.nivel = 0;
        this.desbloqueado = false;
    }

    aplicar() {
        if (this.desbloqueado = false) {
            this.desbloqueado = true;
        }

        switch (efeito) {
            case efeito.HUMANO:
                // TODO
            case efeito.LOJA:
                // TODO
            case efeito.ZUMBI:
                // TODO
        }

        this.nivel++;
    }

    getEfeito() {
        return this.efeito;
    }

    getNivel() {
        return this.nivel;
    }

    getDesbloqueado() {
        return this.desbloqueado;
    }
}

// definir
const efeito = {
    ZUMBI: 'zumbi',
    HUMANO: 'humano',
    LOJA: 'loja'
}

class Humano {
    constructor(tipoCerebro) {
        this.tipoCerebro = tipoCerebro;
        this.qtdDeCerebros = 1;
    }

    gerarCerebro(cerebro) {
        cerebro.incrementar(this.qtdDeCerebros);
    }

    getTipoCerebro() {
        return this.tipoCerebro;
    }

    getQtdCerebros() {
        return this.qtdDeCerebros;
    }
}

// definir
const tipoCerebro = {
    NORMAL: 'normal',
    DOURADO: 'dourado'
}

class Loja {
    constructor() {
        this.listaItens = ['Comprar Zumbis', 'Comprar Zumbis Especiais', 'Comprar Upgrades', 'Comprar Cérebro Dourado'];
    }

    comprarZumbis(quantidade, zumbis) {
        for (let i = 0; i < quantidade; i++) {
            zumbis.push(new Zumbi());
        }
    }

    comprarZumbisEspeciais(quantidade, zumbisEspeciais) {
        for (let i = 0; i < quantidade; i++) {
            zumbisEspeciais.push(new ZumbiEspecial());
        }
    }

    comprarCerebrosDourados(quantidade, cerebroDourado) {
        cerebroDourado.incrementar(quantidade);
    }

    comprarUpgrade(efeito, upgrades) {
        for (let upgrade of upgrades) {
            if (upgrade.efeito = efeito) {
                upgrade.aplicar();
                break;
            }
        }
    }

    mostrarCatalogo() {
        // TODO
    }

    getListaItens() {
        return this.listaItens;
    }
    
    setListaItens(listaItens) {
        this.listaItens = listaItens;
    }
}

class Jogador {
    constructor(nome) {
        this.nome = nome;
        this.cerebro = new Cerebro();
        this.cerebroDourado = new CerebroDourado();
        this.zumbis = [];
        this.zumbisEspeciais = [];
        this.conquistas = [];
        this.upgrades = [];
    }

    getNome() {
        return this.nome;
    }

    getCerebro() {
        return this.cerebro;
    }

    getCerebroDourado() {
        return this.cerebroDourado;
    }

    getZumbis() {
        return this.zumbis;
    }

    getZumbisEspeciais() {
        return this.zumbisEspeciais;
    }

    getConquistas() {
        return this.conquistas;
    }

    getUpgrades() {
        return this.upgrades;
    }

    setNome(nome) {
        this.nome = nome;
    }

    setCerebro(cerebro) {
        this.cerebro = cerebro;
    }

    setCerebroDourado(cerebroDourado) {
        this.cerebroDourado = cerebroDourado;
    }

    setZumbis(zumbis) {
        this.zumbis = zumbis;
    }

    setZumbisEspeciais(zumbisEspeciais) {
        this.zumbisEspeciais = zumbisEspeciais;
    }

    setConquistas(conquistas) {
        this.conquistas = conquistas;
    }

    setUpgrades(upgrades) {
        this.upgrades = upgrades;
    }
}

class GerenciadorDeSaves {
    constructor() {
        this.jogadores = [];
    }

    getSaveGame(nome) {
        for (let jogador of this.jogadores) {
            if (jogador.nome = nome) {
                return this.jogadores
            }
        }
    }

    setSaveGame(nome) {
        const jogador = new Jogador(nome);
        this.jogadores.push(jogador);
        return jogador;
    }

    deleteSaveGame(nome) {
        for (let jogador of this.jogadores) {
            if (jogador.nome = nome) {
                return this.jogadores;
            }
        }
    }

    getJogadores() {
        return this.jogadores;
    }
}

const gerenciador = new GerenciadorDeSaves()