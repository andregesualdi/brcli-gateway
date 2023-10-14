class Login {
    constructor(
        access_token,
        authorized,
        userType,
        expiresIn
    ) {
        this.access_token = access_token;
        this.authorized = authorized;
        this.userType = userType;
        this.expiresIn = expiresIn;
    }

    static selectLoginFromUsuario(req) {
        return `SELECT id FROM usuarios WHERE nomeAcesso = '${req.usuario}' AND senha = '${req.senha}';`;
    }

    static selectLoginFromPaciente(req) {
        return `SELECT idPaciente FROM pacientes WHERE nomeAcesso = '${req.usuario}' AND senha = '${req.senha}';`;
    }   
}

export default Login;