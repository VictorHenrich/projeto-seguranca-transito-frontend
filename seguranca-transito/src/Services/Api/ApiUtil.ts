import Axios, { AxiosInstance } from 'axios';



export interface AuthozationPayload{
    token: string,
    verify: boolean
}


export default class ApiUtil{

    private static tokenKey: string = "user_token";

    public static setUserToken(token: string): void{
        const authorizationPayload: AuthozationPayload = {
            token,
            verify: true
        }

        const authorizationPayloadBase64: string = btoa(JSON.stringify(authorizationPayload));

        localStorage.setItem(ApiUtil.tokenKey, authorizationPayloadBase64);
    }

    public static getUserToken(): AuthozationPayload{
        const authotizationPayloadBase64: string | null = 
            localStorage.getItem(ApiUtil.tokenKey)

        if(!authotizationPayloadBase64)
            throw new Error('Não existe dados de autenticação!');

        try{
            const payload: any = atob(authotizationPayloadBase64)

            return JSON.parse(payload);

        }catch(error){
            throw new Error('Dados da autenticação estão inválidos!');
        }
    }

    public static createInstance(): AxiosInstance{
        return Axios.create({
            baseURL: "http://localhost:5000"
        });
    }
}