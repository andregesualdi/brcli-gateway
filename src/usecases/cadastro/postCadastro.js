import { Cadastro } from "../../models/index.js";

export default function makePostCadastro(db) {
    return async function cadastrarPaciente({body}) {
        const response = await db.cadastrarPaciente(body);
        if (response[0] && response[0].affectedRows > 0) {
            return new Cadastro(true);
        }
        throw "Forbidden";
    }
};
