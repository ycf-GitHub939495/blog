import request from "~/utils/request";

export const userLogin = (params: {username:string,password:string}): Promise<string> => {
    return request.get<string>('/api/user/login',params)
}