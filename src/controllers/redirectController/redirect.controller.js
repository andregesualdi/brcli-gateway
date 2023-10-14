import {
    redirectGet
} from "../../usecases/redirect/index.js";

export default Object.freeze({
    redirectGet: (httpRequest) => redirectGet(httpRequest)
});
