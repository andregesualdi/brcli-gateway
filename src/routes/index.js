import express from "express";
import login from "./login.route.js";

const router = express.Router();

router.use(login);

export default router;