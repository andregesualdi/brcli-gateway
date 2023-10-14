class Cadastro {
    constructor(
        valido
    ) {
        this.valido = valido;
    }

    static selectCodigoAcesso(codigoAcesso) {
        return `SELECT idPaciente FROM pacientes WHERE codigoAcesso = ${codigoAcesso}`;
    }

    static updatePaciente(req) {
        return `UPDATE pacientes SET nomeAcesso = '${req.usuario}', senha = '${req.senha}' WHERE codigoAcesso = '${req.codigo}`;
    }
}

export default Cadastro;