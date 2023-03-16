import { Navigate } from "react-router-dom"
import VerifyAuthenticationService from "../../Services/Auth/VerifyAuthenticationService"

interface PrivateRouteProps{
    redirectTo?: string
    page: JSX.Element
}



export default function PrivateRoute({ redirectTo = "/unauthorized", page }: PrivateRouteProps){

    function userIsLogged(): boolean{
        const verifyAuthorizationService: VerifyAuthenticationService = new VerifyAuthenticationService();

        return verifyAuthorizationService.execute();
    }

    return (
        userIsLogged() ? page : <Navigate to={redirectTo}/>
    )
}