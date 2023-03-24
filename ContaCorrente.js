import { Cliente } from "./Cliente.js"; // importando a classe Cliente

export class ContaCorrente {
    static numeroDeContas = 0; //atributo estático para contar o número de contas criadas

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

    constructor(agencia, cliente) {
        this.agencia = agencia;
        this.cliente = cliente;
        this._saldo = 0;
        ContaCorrente.numeroDeContas += 1;
    }

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
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
