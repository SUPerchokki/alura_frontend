export class ContaPoupanca{
    constructor(saldoInicial,cliente,agencia){
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }
    
    sacar(valor){
        if (valor > this._saldo || valor <= 0){
            return(console.log("não existe saldo suficiente para o saque,saldo atual na conta: ", this._saldo));
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

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}