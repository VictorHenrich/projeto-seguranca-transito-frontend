import { io, Socket } from "socket.io-client";
import ApiUtil, { AuthozationPayload } from "../../Services/Api/ApiUtil";



export default class SocketUtil{
    private static connectionUrl: string = "ws://localhost:3000"

    public static createInstance(namespace: string | null = null): Socket{
        let url: string = `${SocketUtil.connectionUrl}`;

        let authorizationPayload: AuthozationPayload = ApiUtil.getUserToken();

        const headers = {
            "Authorization": `${authorizationPayload.token}`
        }

        if(namespace)
            url += `/${namespace}`;
        
        return io(
            url,
            {
                extraHeaders: headers
            }
        );
    }
}