import {
    redirectGet,
    redirectPost
} from "../../usecases/redirect/index.js";

export default Object.freeze({
    redirectGet: (httpRequest) => redirectGet(httpRequest),
    redirectPost: (httpRequest) => redirectPost(httpRequest)
});
