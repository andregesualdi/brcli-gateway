import express from "express";
import Configuration, { configEnvironments } from "./config.js";
import routes from "./routes/index.js";
import moment from "moment-timezone";

moment.tz.setDefault("America/Sao_Paulo");
moment.locale('pt');

const app = express();
configEnvironments();
const port = Configuration.port;

app.use(express.json());
app.use("/", routes);
app.listen(port);
console.log('Rodando na porta ' + port);

export default app;