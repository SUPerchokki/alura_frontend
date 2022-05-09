import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    static numeroDeContas = 0;
    
    agencia;
    
    _cliente;
    _saldo = 0;

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    constructor (cliente,agencia){
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas++;
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
