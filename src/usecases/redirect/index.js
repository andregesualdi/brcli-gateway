import { redirectGateway } from "../../gateways/index.js";

import makeRedirectGet from "./getRedirect.js";
import makeRedirectPost from "./postRedirect.js";
import makeRedirectPut from "./putRedirect.js";

const redirectGet = makeRedirectGet(redirectGateway);
const redirectPost = makeRedirectPost(redirectGateway);
const redirectPut = makeRedirectPut(redirectGateway);

const redirectService = Object.freeze({
    redirectGet,
    redirectPost,
    redirectPut
});

export default redirectService;

export {
    redirectGet,
    redirectPost,
    redirectPut
};
