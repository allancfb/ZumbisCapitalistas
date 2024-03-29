class Cerebro {
    constructor(quantidade = 0) {
        this.quantidade = quantidade;
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

class Populacao {
    constructor(quantidade) {
        this.quantidade = quantidade;
        this.nascimentosPorSegundo = 360000;
    }

    incrementar() {
        this.quantidade += this.nascimentosPorSegundo;
    }

    decrementar(decremento) {
        this.quantidade -= decremento;
    }
}

class CerebroDourado extends Cerebro {
    constructor() {
        super();
    }
}

class Zumbi {
    constructor(tipo) {
        this.tipo = tipo;
        this.cerebrosPorSegundo = 1;
        this.nivel = 1;
    }

    upgrade() {
        this.nivel++;
        this.cerebrosPorSegundo *= 2;
    }

    gerarCerebros() {
        let cerebros = loja.getCpSZumbi(this.tipo);
        jogador.cerebro.incrementar(cerebros);
        jogador.populacao.decrementar(cerebros);
    }

    getCerebrosPorSegundo() {
        return this.cerebrosPorSegundo;
    }

    getNivel() {
        return this.nivel;
    }

    setCerebrosPorSegundo(cerebrosPorSegundo) {
        this.cerebrosPorSegundo = cerebrosPorSegundo;
    }

    setNivel(nivel) {
        this.nivel = nivel;
    }
}

class ZumbiEspecial extends Zumbi {
    constructor(tipo) {
        super(tipo);
        this.cerebrosPorSegundo *= 2;
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

const tipoZumbi = {
    CACADOR: 0,
    CRIMINOSO: 1,
    COMERCIANTE: 2,
    INDUSTRIAL: 3,
    INVESTIDOR: 4,
    BANQUEIRO: 5,
    BURGUES: 6
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

    comprarZumbis(tipo, quantidade) {
        let precoTotal = quantidade * loja.getPrecoZumbi(tipo);
        if (precoTotal <= jogador.cerebro.quantidade) {
            for (let i = 0; i < quantidade; i++) {
                jogador.adicionarZumbi(new Zumbi(tipo));
                jogador.cerebro.decrementar(precoTotal);
            }
        }
    }

    comprarZumbisEspeciais(tipo, quantidade) {
        for (let i = 0; i < quantidade; i++) {
            jogador.adicionarZumbiEspecial(new ZumbiEspecial(tipo));
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

    getPrecoZumbi(tipo) {
        switch (tipo) {
            case tipoZumbi.CACADOR:
                return 100;
            case tipoZumbi.CRIMINOSO:
                return 200;
            case tipoZumbi.COMERCIANTE:
                return 800;
            case tipoZumbi.INDUSTRIAL:
                return 30000;
            case tipoZumbi.INVESTIDOR:
                return 500000;
            case tipoZumbi.BANQUEIRO:
                return 3000000;
            case tipoZumbi.BURGUES:
                return 200000000;
        }
    }

    getCpSZumbi(tipo) {
        switch (tipo) {
            case tipoZumbi.CACADOR:
                return 1;
            case tipoZumbi.CRIMINOSO:
                return 4;
            case tipoZumbi.COMERCIANTE:
                return 90;
            case tipoZumbi.INDUSTRIAL:
                return 700;
            case tipoZumbi.INVESTIDOR:
                return 20000;
            case tipoZumbi.BANQUEIRO:
                return 100000;
            case tipoZumbi.BURGUES:
                return 5000000;
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
        this.populacao = new Populacao(8000000000);
        this.zumbis = [];
        this.zumbisEspeciais = [];
        this.conquistas = [];
        this.upgrades = [];
        this.cerebrosPorClique = 1;
    }

    recuperarSave(jogadorSalvo) {
        this.cerebro = new Cerebro(jogadorSalvo.cerebro.quantidade);
        this.cerebroDourado = new CerebroDourado(jogadorSalvo.cerebroDourado.quantidade);
        this.populacao = new Populacao(jogadorSalvo.populacao.quantidade);
        this.zumbis = [];
        for (let zumbi of jogadorSalvo.zumbis) {
            this.zumbis.push(new Zumbi(zumbi.tipo));
        }
        this.zumbisEspeciais = jogadorSalvo.zumbisEspeciais;
        this.conquistas = jogadorSalvo.conquistas;
        this.upgrades = jogadorSalvo.upgrades;
        this.cerebrosPorClique = jogadorSalvo.cerebrosPorClique;
    }

    adicionarZumbi(zumbi) {
        this.zumbis.push(zumbi);
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
        let jogadoresSalvos = localStorage.getItem('jogadores');
        this.jogadores = [];
        if (jogadoresSalvos != null) {
            let jogadores = JSON.parse(jogadoresSalvos);
            for (let jogadorSalvo of jogadores) {
                let jogador = new Jogador(jogadorSalvo.nome);
                jogador.recuperarSave(jogadorSalvo);
                this.jogadores.push(jogador);
            }
        }
    }

    getSaveGame(nome) {
        for (let jogador of this.jogadores) {
            if (jogador.nome == nome) {
                return jogador;
            }
        }
    }

    setSaveGame(nome) {
        let jogador = new Jogador(nome);
        this.jogadores.push(jogador);
        return jogador;
    }

    deleteSaveGame(nome) {
        this.jogadores = this.jogadores.filter(jogador => jogador.nome != nome);
    }

    getJogadores() {
        return this.jogadores;
    }

    salvarJogo() {
        localStorage.setItem('jogadores', JSON.stringify(this.jogadores));
    }
}

const gerenciador = new GerenciadorDeSaves();
const loja = new Loja();
var jogador;