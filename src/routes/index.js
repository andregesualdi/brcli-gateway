import express from "express";
import login from "./login.route.js";
import cadastro from "./cadastro.route.js";

const router = express.Router();

router.use(login);
router.use(cadastro);

export default router;