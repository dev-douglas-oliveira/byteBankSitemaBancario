//Classe abstrata
export class Conta {
    constructor(saldoInicial, cliente, agencia) {
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
        if (this.constructor == Conta) {
            throw new Error(
                "Você não deveria instanciar um objeto do tipo Conta diretamente, pois essa é uma classe abstrata."
            );
        }
    }

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            //verifica se o novoValor é uma instância de Cliente
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    //método abstrato - sempre precisa sobrescrever
    sacar(valor) {
        throw new Error("O método Sacar da conta é abstrato.");
    }

    _sacar(valor, taxa) {
        //método privado
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
    }
    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this._saldo += valor;
    }
    tranferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}
