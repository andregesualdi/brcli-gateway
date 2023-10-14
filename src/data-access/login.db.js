import mysql from 'mysql2/promise';
import Configuration from '../config.js';

export default function makeLoginDb({Login}) {
    async function validarLogin(request) {
        const db = mysql.createPool({multipleStatements: true, uri: Configuration.conn});
        const queryUsuario = Login.selectLoginFromUsuario(request);
        const queryPacientes = Login.selectLoginFromPaciente(request);
        const query = queryUsuario.concat(queryPacientes);
        const response = await db.query(query, [1, 2]);
        return response[0];
    }

    return Object.freeze({
        validarLogin
    });
}
