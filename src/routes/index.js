import express from "express";
import login from "./login.route.js";
import cadastro from "./cadastro.route.js";
import redirect from "./redirect.route.js";

const router = express.Router();

router.use(login);
router.use(cadastro);
router.use(redirect);

export default router;