import { io, Socket } from "socket.io-client";
import Api, { UserAuthPayload } from "./Api";



export default class WebSocket{
    private static connectionUrl: string = "ws://localhost:3000"

    public static createInstance(namespace: string | null = null): Socket | void{
        let url: string = `${WebSocket.connectionUrl}`;

        let authorizationPayload: UserAuthPayload | void;

        try{
            authorizationPayload = Api.getUserAuthPayload();   
        }finally{
            if(!authorizationPayload) return;

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
}