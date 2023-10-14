import jwt from "jsonwebtoken";
import Configuration from "../../config.js";

export default function makeRedirectPut(gateway) {
    return async function redirecionarMetodoPut({headers, params, body}) {
        const origem = params['origem'];
        const rota = params['rota'];
        const bearerToken = headers['authorization'];
        const redirectBody = body;
        let redirectHeaders;
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
                'codigo-paciente': objetoDecodificado.id
            }
        } else {
            redirectHeaders = {
                'codigo-paciente': headers['codigo-paciente'],
                'codigo-usuario': objetoDecodificado.id
            }
        }

        return await gateway.redirectPut(url, redirectBody, redirectHeaders);
    }
}
