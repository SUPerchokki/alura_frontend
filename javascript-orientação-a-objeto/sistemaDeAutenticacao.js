export class metodoDeAutenticacao{
    static login(autenticavel, senha){
        return(autenticavel.autenticar(senha));
    }
}