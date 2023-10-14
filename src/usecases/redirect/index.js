import { redirectGateway } from "../../gateways/index.js";

import makeRedirectGet from "./getRedirect.js";

const redirectGet = makeRedirectGet(redirectGateway);

const redirectService = Object.freeze({
    redirectGet
});

export default redirectService;

export {
    redirectGet
};
