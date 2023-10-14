import {
    postLogin
} from "../../usecases/login/index.js";

export default Object.freeze({
    postLogin: (httpRequest) => postLogin(httpRequest)
});
