export class ContaCorrente{
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
