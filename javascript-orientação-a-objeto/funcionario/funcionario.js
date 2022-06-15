export class Funcionario{
    constructor(nome,salario,cpf){
        this._nome = nome;
        this._salario = salario;
        this._cpf = cpf	;

        this._senha;
        this._bonificação = 1;
    }

    get senha(){
        return (_senha);
    }

    cadastrarSenha(senha){
        this._senha = senha;
    }

    autenticar(senha){
        return(senha == this._senha);
    }

}