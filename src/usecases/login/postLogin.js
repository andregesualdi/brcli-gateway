import jwt from "jsonwebtoken";
import Configuration from "../../config.js";
import { Login } from "../../models/index.js";

export default function makePostLogin(db) {
    return async function login({body}) {
        const request = body;
        const response = await db.validarLogin(request);
        if (response[0].length > 0) {
            const id = response[0][0].id;
            const token = jwt.sign({
                id: id,
                type: "nutricionista"
            }, Configuration.secret, { expiresIn: 1800 });
            return new Login(token, true, "nutricionista", 7200);
        } else if (response[1].length > 0) {
            const id = response[1][0].idPaciente;
            const token = jwt.sign({
                id: id,
                type: "paciente"
            }, Configuration.secret, { expiresIn: 1800 });
            return new Login(token, true, "paciente", 1800);
        } else {
            throw "Forbidden";
        }
    }
};
