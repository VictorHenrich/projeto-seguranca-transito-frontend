import Api from "../Api";
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

        const { data: response } = await Api.instance.post(this.url, data);

        Api.setUserAuthPayload(response.data);
    }
}