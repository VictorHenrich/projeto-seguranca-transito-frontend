import IService from "../IService";
import Api from "Services/Api";


export interface UserUpdateServiceProps{
    user_uuid: string,
    username: string,
    name: string,
    position: string,
    password?: string
}


export default class UserUpdateService implements IService<UserUpdateServiceProps>{

    private url: string = "/departamento/usuario/crud/";

    async execute({
        username,
        name,
        position,
        password,
        user_uuid
    }: UserUpdateServiceProps): Promise<void> {
        const data = {
            usuario: username,
            nome: name,
            cargo: position,
            senha: password
        };

        await Api.instance.put(`${this.url}/${user_uuid}`, data);
    }

}