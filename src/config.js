import dotenv from "dotenv";

class Configuration {
    static port;
    static secret;
    static conn;
    static urlMobile;
    static urlDesktop;
}

export function configEnvironments() {
    dotenv.config();
    Configuration.port = process.env.PORT;
    Configuration.secret = process.env.SECRET;
    Configuration.conn = process.env.CONN;
    Configuration.urlMobile = process.env.URL_MOBILE_BFF;
    Configuration.urlDesktop = process.env.URL_DESKTOP_BFF;
}

export default Configuration;