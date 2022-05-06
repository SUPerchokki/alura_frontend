class Cliente{
    nome;
    cpf;
   
}

class ContaCorrente{
    agencia;
    #saldo;

    sacar(valor){
        if (valor > this.#saldo || valor <= 0){
            console.log("não existe #saldo suficiente para o saque, saldo atual na conta: ", this.#saldo);
        } else if (valor <= this.#saldo){
            this.#saldo = this.#saldo - valor;
            console.log("Saque concluido com sucesso, conte suas notas");
        }
    }

    depositar(valor){
        if(valor > 0){
            this.#saldo += valor;
        } else {
            console.log("deposito invalido tente novamente");
        }
    }

}

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
