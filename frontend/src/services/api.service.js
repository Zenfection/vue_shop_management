import axios from "axios"

const commonConfig = {
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
};

const ApiService = {
    init(baseURL) {
        axios.defaults.baseURL = baseURL;
    },

    get(resource) {
        return axios.get(resource, commonConfig);
    },

    post(resource, data) {
        return axios.post(resource, data, commonConfig);
    },

    delete(resource) {
        return axios.delete(resource, commonConfig);
    }
}

export default ApiService;