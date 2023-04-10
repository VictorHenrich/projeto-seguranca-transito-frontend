import Axios, { CreateAxiosDefaults, AxiosInstance } from "axios"


const config: CreateAxiosDefaults = {
    baseURL: "http://localhost:5000"
}


export interface UserAuthPayload{
    username: string,
    email: string,
    token: string,
    verify: boolean
}

class Api{
    private static readonly storageKey: string = "user_payload";

    public static readonly instance: AxiosInstance = Axios.create(config);
    
    public static setUserAuthPayload({
        email,
        token,
        username
    }: Omit<UserAuthPayload, "verify">): void{
        let payload: UserAuthPayload = {
            username,
            token,
            email,
            verify: true
        }

        let payloadBase64: string = atob(JSON.stringify(payload));

        localStorage.setItem(Api.storageKey, payloadBase64);

        Api.instance.defaults.headers.Authorization = token;
    }

    public static getUserAuthPayload(): UserAuthPayload{
        let payloadBase64: string | null = localStorage.getItem(Api.storageKey);

        if(!payloadBase64)
            throw new Error("Payload do usuário encontrasse vazio!");

        try{

            let payload: string = btoa(payloadBase64);

            return JSON.parse(payload);

        }catch(error){
            throw new Error("Falha ao realizar a conversão dos dados do usuário!");
        }
    }
}




export default Api;