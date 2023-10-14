import express from "express";

import loginController from "../controllers/loginController/login.controller.js";

import makeCallback from "./make-callback.js";

const router = express.Router();

router.route('/login').post(makeCallback(loginController.postLogin));

export default router;
