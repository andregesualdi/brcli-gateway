import { redirectGateway } from "../../gateways/index.js";

import makeRedirectGet from "./getRedirect.js";
import makeRedirectPost from "./postRedirect.js";

const redirectGet = makeRedirectGet(redirectGateway);
const redirectPost = makeRedirectPost(redirectGateway);

const redirectService = Object.freeze({
    redirectGet,
    redirectPost
});

export default redirectService;

export {
    redirectGet,
    redirectPost
};
