import { Conta } from "./Conta.js";
export class ContaCorrente extends Conta {
    static numeroDeContas = 0; //atributo estático para contar o número de contas criadas
    constructor(cliente, agencia) {
        super(0, cliente, agencia); //chamando o construtor da classe pai
        ContaCorrente.numeroDeContas += 1; //incrementando o número de contas criadas
    }

    sacar(valor) {
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }
}
