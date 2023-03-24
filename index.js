import { Cliente } from "./Cliente.js"; // importando a classe Cliente
import { ContaCorrente } from "./ContaCorrente.js"; // importando a classe ContaCorrente
import { ContaPoupanca } from "./ContaPoupanca.js"; // importando a classe ContaPoupanca
import { Conta } from "./Conta.js"; // importando a classe Conta

const cliente1 = new Cliente("Ricardo", 11122233309); // criando um objeto do tipo Cliente

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001); // criando um objeto do tipo ContaCorrente
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001); // criando um objeto do tipo ContaPoupanca
contaPoupanca.sacar(10);

console.log(contaPoupanca);
console.log(contaCorrenteRicardo);
