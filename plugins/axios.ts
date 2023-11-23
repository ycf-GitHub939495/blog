import axios, {AxiosError, type AxiosInstance, type AxiosResponse, type InternalAxiosRequestConfig} from "axios";
import {getItem} from "~/utils";

const request: AxiosInstance = axios.create({
    baseURL: "",
    timeout: 10000,
    headers: {
        "Content-type": "application/json;charset=UTF-8;"
    }
})

request.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token = getItem('token')
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }
        return config;
    },
    (error: AxiosError) => {

    }
)

request.interceptors.response.use(
    (response:AxiosResponse) => {
        return response
    },
    (error: AxiosError) => {

    }
)

export default defineNuxtPlugin((nuxt) =>{
    return {
        provide: {
            axios: request
        }
    }
})
