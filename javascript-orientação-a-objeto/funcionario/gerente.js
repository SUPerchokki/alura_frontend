import { Diretor } from "./diretor.js";


export class Gerente{
    constructor(nome,salario,cpf){
        super(nome,salario,cpf);
        this._bonificação = 1.1
    }

}