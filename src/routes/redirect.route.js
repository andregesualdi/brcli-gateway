import express from "express";

import redirectController from "../controllers/redirectController/redirect.controller.js";

import makeCallback from "./make-callback.js";

const router = express.Router();

router.route('/api/:origem/:rota').get(makeCallback(redirectController.redirectGet));

export default router;
