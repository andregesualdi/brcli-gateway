import {
    redirectGet,
    redirectPost,
    redirectPut
} from "../../usecases/redirect/index.js";

export default Object.freeze({
    redirectGet: (httpRequest) => redirectGet(httpRequest),
    redirectPost: (httpRequest) => redirectPost(httpRequest),
    redirectPut: (httpRequest) => redirectPut(httpRequest)
});
