export class metodoDeAutenticacao{
    static login(funcionario, senha){
        return(funcionario.senha == senha);
    }
}