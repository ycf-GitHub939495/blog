import axios, {AxiosError, AxiosInstance} from "axios";

const request: AxiosInstance = axios.create({
    baseURL: "",
    timeout: 10000,
    headers: {
        "Content-type": "application/json;charset=UTF-8;"
    }
})

request.interceptors.request.use(
    (config) => {
        return config;
    },
    (error: AxiosError) => {

    }
)

request.interceptors.response.use()

export default request;