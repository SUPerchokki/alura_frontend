import { Cliente } from "./conta/Cliente.js";
import { Gerente } from "./funcionario/gerente.js"
import { Diretor } from "./funcionario/diretor.js"
import { Funcionario } from "./funcionario/funcionario.js"
import { metodoDeAutenticacao } from "./sistemaDeAutenticacao.js";


const diretor = new Diretor("Rodrigo", 10000, 12344567892);
const gerente = new Gerente("Ricardo", 5000, 98765432109);
