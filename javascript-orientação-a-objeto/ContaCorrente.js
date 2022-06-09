import { Conta } from "./Conta";
export class ContaCorrente extends Conta{
    static numeroDeContas = 0;
    

    constructor (){
    
        ContaCorrente.numeroDeContas++;
    }

 

}
