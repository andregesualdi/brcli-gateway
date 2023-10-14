import express from "express";

import cadastroController from "../controllers/cadastroController/cadastro.controller.js";

import makeCallback from "./make-callback.js";

const router = express.Router();

router.route('/primeiro-acesso').post(makeCallback(cadastroController.postCodigo));

export default router;
