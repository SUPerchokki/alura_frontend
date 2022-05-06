class Cliente{
    nome;
    cpf;
   
}

class ContaCorrente{
    agencia;
    _saldo;

    sacar(valor){
        if (valor > this._saldo || valor <= 0){
            console.log("não existe saldo suficiente para o saque,saldo atual na conta: ", this._saldo);
        } else if (valor <= this._saldo){
            this._saldo = this._saldo - valor;
            return(valor);
        }
    }

    depositar(valor){
        if(valor <= 0){
            return         
        }
        this._saldo += valor;
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
