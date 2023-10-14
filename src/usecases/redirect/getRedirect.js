import jwt from "jsonwebtoken";
import Configuration from "../../config.js";

export default function makeRedirectGet(gateway) {
    return async function redirecionarMetodoGet({headers, params}) {
        const origem = params['origem'];
        const rota = params['rota'];
        const bearerToken = headers['authorization'];
        let redirectHeaders = {
            accept: headers['accept'],
            connection: headers['connection']
        }
        let url = origem === "mobile" ? Configuration.urlMobile : Configuration.urlDesktop;
        url = url.concat(`/${rota}`);
        let objetoDecodificado;

        if (!bearerToken) {
            throw "Unauthorized";
        }

        const token = bearerToken.split(" ");

        jwt.verify(token[1], Configuration.secret, (err, decoded) => {
            if (err) {
                throw "Unauthorized";
            }

            objetoDecodificado = decoded;
        });

        if (objetoDecodificado.type === "paciente") {
            redirectHeaders = {
                ...redirectHeaders,
                'codigo-paciente': objetoDecodificado.id
            }
        } else {
            redirectHeaders = {
                ...redirectHeaders,
                'codigo-usuario': objetoDecodificado.id
            }
        }

        return await gateway.redirectGet(url, redirectHeaders);
    }
}
