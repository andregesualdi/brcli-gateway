import * as models from "../models/index.js";

import makeLoginDb from "./login.db.js";

const loginDb = makeLoginDb(models);

export {
    loginDb
};
