import mysql from 'mysql2/promise';
import Configuration from '../config.js';

export default function makeCadastroDb({Cadastro}) {
    async function validarCodigoAcesso(codigoAcesso) {
        const db = mysql.createPool(Configuration.conn);
        const query = Cadastro.selectCodigoAcesso(codigoAcesso);
        const response = db.query(query);
        return response;
    }

    async function cadastrarPaciente(request) {
        const db = mysql.createPool(Configuration.conn);
        const query = Cadastro.updatePaciente(request);
        const response = db.query(query);
        return response;
    }

    return Object.freeze({
        validarCodigoAcesso,
        cadastrarPaciente
    });
}
