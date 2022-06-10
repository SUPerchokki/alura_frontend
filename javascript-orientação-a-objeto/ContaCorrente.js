import { Conta } from "./Conta";
export class ContaCorrente extends Conta{
    static numeroDeContas = 0;
    constructor (cliente,agencia){
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas++;
    }

    sacar(valor){
        taxa = 1.1 * valor;
        const valorSacado = taxa * valor; 
        if(this._saldo <= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
    }

}
