import * as models from "../models/index.js";

import makeLoginDb from "./login.db.js";
import makeCadastroDb from "./cadastro.db.js";

const loginDb = makeLoginDb(models);
const cadastroDb = makeCadastroDb(models);

export {
    loginDb,
    cadastroDb
};
