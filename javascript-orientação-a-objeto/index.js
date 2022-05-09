import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88877766690);

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;

contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.sacar(-100);
contaCorrenteRicardo.sacar(5);

const contaCorrenteAlice = new ContaCorrente();
contaCorrenteAlice.cliente = cliente2;
contaCorrenteAlice.agencia = 102;

contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.transferir(500,contaCorrenteAlice);

console.log(contaCorrenteAlice);
