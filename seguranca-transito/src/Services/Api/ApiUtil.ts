import Axios, { AxiosInstance } from 'axios';


export default class ApiUtil{

    private static tokenKey: string = "user_token";

    public static setUserToken(token: string): void{
        localStorage.setItem(ApiUtil.tokenKey, token);
    }

    public static createInstance(): AxiosInstance{

        return Axios.create({
            baseURL: "http://localhost:5000",
            transformResponse: (data, headers, status) => {
                const token: string | null = localStorage.getItem(ApiUtil.tokenKey);

                headers.set('Authorization', token);

                return data;
            }
        });
    }
}