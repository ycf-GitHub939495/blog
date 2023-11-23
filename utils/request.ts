import {useFetch, type UseFetchOptions} from "#app";
import { ElMessage } from "element-plus";
import type {_AsyncData} from "#app/composables/asyncData";
import any from "async-validator/dist-types/validator/any";

const fetch = <T = any>(url: string,options?: UseFetchOptions<T>): Promise<any> => {
    return new Promise((resolve, reject) => {
        useFetch(url,{...options,
            onRequest:({ request, options }) => {
                // Set the request headers
                options.headers = options.headers || {}
                options.headers.authorization = getItem('token')
                return options
            },
            onRequestError:({ request, options, error }) => {
                // Handle the request errors
                reject(error)
            },
            onResponse:({ request, response, options }) =>{
                // Process the response data
                setItem('token', response._data.token)
                console.log(response)
                return response._data
            },
            onResponseError:({ error, response, options }) => {
                // Handle the response errors
                reject(error)
            }
        }).then(res => {
            // console.log(res)
            resolve(res)
        }).catch(error => {
            reject(error)
        })
    })
}

export default class request {
    static get<T = any>(url:string,params?: any,options?: UseFetchOptions<T>): Promise<T>{
        return fetch<T>(url,{
            ...options,
            method: "GET",
            params
        })
    }
    static post<T = any>(url:string,data?: any,options?: UseFetchOptions<T>): Promise<T>{
        return fetch<T>(url,{
            ...options,
            method: "POST",
            body: data
        })
    }

    static Delete<T = any>(url:string,params?: any,options?: UseFetchOptions<T>): Promise<T>{
        return fetch(url,{
            ...options,
            method: "DELETE",
            params,
        })
    }

    static Put<T = any>(url:string,data?: any,options?: UseFetchOptions<T>): Promise<T> {
        return fetch<T>(url,{
            ...options,
            method: "PUT",
            body: data,
        })
    }

}



