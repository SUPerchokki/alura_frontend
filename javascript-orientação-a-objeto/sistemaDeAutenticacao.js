export class metodoDeAutenticacao{
    static login(autenticavel, senha){
        if(metodoDeAutenticacao.eAutenticavel(autenticavel)){
            return(autenticavel.autenticar(senha));    
        }

        return false;

        
        
    }

    static eAutenticavel(autenticavel){
        return ("autenticar" in autenticavel && autenticavel.autenticar instanceof Function);
    }
}