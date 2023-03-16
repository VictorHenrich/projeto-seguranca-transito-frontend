import ApiUtil, { AuthozationPayload } from "../Api/ApiUtil";
import IService from "../IService";



export default class VerifyAuthenticationService implements IService<void, boolean>{
    execute(props: void): boolean {
        let logged: boolean = false;

        try{

            const authorizationPayload: AuthozationPayload = ApiUtil.getUserToken();

            if(!authorizationPayload)
                throw new Error('Usuário não autorizado!');

            else
                logged = true;

        }catch(error){

            logged = false;
        }

        return logged;
    }

}