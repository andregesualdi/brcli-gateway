import { cadastroDb } from "../../data-access/index.js";

import makePostCodigo from "./postCodigo.js";

const postCodigo = makePostCodigo(cadastroDb);

const cadastroService = Object.freeze({
    postCodigo
});

export default cadastroService;

export {
    postCodigo
};
