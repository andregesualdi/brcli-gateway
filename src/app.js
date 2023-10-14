import express from "express";
import Configuration, { configEnvironments } from "./config.js";
import routes from "./routes/index.js";
import moment from "moment-timezone";
import cors from "cors";

moment.tz.setDefault("America/Sao_Paulo");
moment.locale('pt');

const app = express();
configEnvironments();
const port = Configuration.port;

app.use(express.json());

app.use(cors());
app.use("/brcli-gateway", routes);
app.listen(port);
console.log('Rodando na porta ' + port);

export default app;