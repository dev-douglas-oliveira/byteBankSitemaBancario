import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
    constructor(saldoInicial, cliente, agencia) {
        super(saldoInicial, cliente, agencia); //chamando o construtor da classe pai
    }

    sacar(valor) {
        const taxa = 1.02;
        return this._sacar(valor, taxa); //chamando o método privado da classe pai
    }
}
