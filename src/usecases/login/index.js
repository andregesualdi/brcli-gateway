import { loginDb } from "../../data-access/index.js";

import makePostLogin from "./postLogin.js";

const postLogin = makePostLogin(loginDb);

const loginService = Object.freeze({
    postLogin
});

export default loginService;

export {
    postLogin
};
