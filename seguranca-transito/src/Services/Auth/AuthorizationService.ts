import api from "../Api/Api";
import ApiUtil from "../Api/ApiUtil";
import IService from "../IService";



export interface AuthorizationServiceProps{
    departament: string,
    username: string,
    password: string
}



export default class AuthorizationService implements IService<AuthorizationServiceProps>{
    private readonly url: string = "/autenticacao/departamento";

    async execute({
        username,
        password,
        departament
    }: AuthorizationServiceProps): Promise<void> {
        
        const data = {
            usuario: username,
            senha: password,
            departamento: departament
        };

        const { data: response } = await api.post(this.url, data);

        ApiUtil.setUserToken(response.data);
    }
}