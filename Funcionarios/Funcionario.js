//classe abstrata
export class Funcionario {
    constructor(nome, salario, cpf) {
        this._nome = nome;
        this._salario = salario;
        this._cpf = cpf;
        this._bonificacao = 1;
        this._senha;
    }
    /* dessa forma ninguem pode atribuir um valor a senha, 
    sendo necessario chamar o metodo cadastrarSenha*/
    get senha() {
        return this._senha;
    }
    cadastrarSenha(senha) {
        this._senha = senha;
    }
}
