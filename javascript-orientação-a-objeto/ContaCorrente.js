import { Conta } from "./Conta";
export class ContaCorrente extends Conta{
    static numeroDeContas = 0;
    constructor (cliente,agencia){
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas++;
    }

}
