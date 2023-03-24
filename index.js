import { Cliente } from "./Cliente.js"; // importando a classe Cliente
import { ContaCorrente } from "./Conta/ContaCorrente.js"; // importando a classe ContaCorrente
import { ContaPoupanca } from "./Conta/ContaPoupanca.js"; // importando a classe ContaPoupanca
import { ContaSalario } from "./Conta/ContaSalario.js";

const cliente1 = new Cliente("Ricardo", 11122233309); // criando um objeto do tipo Cliente

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001); // criando um objeto do tipo ContaCorrente
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001); // criando um objeto do tipo ContaPoupanca
contaPoupanca.sacar(10);

const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(100);
contaSalario.sacar(10);

//const conta = new Conta(0, cliente1, 1001); // criando um objeto do tipo Conta

console.log(contaPoupanca);
console.log(contaCorrenteRicardo);
console.log(contaSalario);
