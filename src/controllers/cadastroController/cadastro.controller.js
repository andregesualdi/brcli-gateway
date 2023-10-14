import {
    postCodigo,
    postCadastro
} from "../../usecases/cadastro/index.js";

export default Object.freeze({
    postCodigo: (httpRequest) => postCodigo(httpRequest),
    postCadastro: (httpRequest) => postCadastro(httpRequest),
});
