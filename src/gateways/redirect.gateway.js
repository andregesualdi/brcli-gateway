import { fetchWrapper } from "./infrastructure/WrapperFetch.js";

export default function makeRedirectGateway() {
    async function redirectGet(url, headers) {
        let response;
        await fetchWrapper.get(url, headers)
            .then(data => {
                response = data;
            })
            .catch((error) => {
                throw error;
            });
        return response;
    }

    async function redirectPost(url, body, headers) {
        let response;
        await fetchWrapper.post(url, body, headers)
            .then(data => {
                response = data;
            })
            .catch((error) => {
                throw error;
            });
        return response;
    }

    async function redirectPut(url, body, headers) {
        let response;
        await fetchWrapper.put(url, body, headers)
            .then(data => {
                response = data;
            })
            .catch((error) => {
                throw error;
            });
        return response;
    }

    return Object.freeze({
        redirectGet,
        redirectPost,
        redirectPut
    });
}
