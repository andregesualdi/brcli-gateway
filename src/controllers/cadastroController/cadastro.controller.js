import {
    postCodigo
} from "../../usecases/cadastro/index.js";

export default Object.freeze({
    postCodigo: (httpRequest) => postCodigo(httpRequest)
});
