import { cadastroDb } from "../../data-access/index.js";

import makePostCodigo from "./postCodigo.js";
import makePostCadastro from "./postCadastro.js";

const postCodigo = makePostCodigo(cadastroDb);
const postCadastro = makePostCadastro(cadastroDb);

const cadastroService = Object.freeze({
    postCodigo,
    postCadastro
});

export default cadastroService;

export {
    postCodigo,
    postCadastro
};
