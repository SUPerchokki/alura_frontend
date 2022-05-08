import { Cliente } from "./Cliente";
import { ContaCorrente } from "./ContaCorrente";

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88877766690;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.sacar(-100);
contaCorrenteRicardo.sacar(5);

const contaCorrenteAlice = new ContaCorrente();
