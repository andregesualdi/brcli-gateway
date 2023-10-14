import { Cadastro } from "../../models/index.js";

export default function makePostCodigo(db) {
    return async function validarCodigo({body}) {
        const codigoAcesso = body.codigoCadastro;
        const response = await db.validarCodigoAcesso(codigoAcesso);
        if (response[0].length > 0 && response[0][0].idPaciente) {
            return new Cadastro(true);
        }
        throw "Forbidden";
    }
};
