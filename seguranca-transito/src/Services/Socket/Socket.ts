import SocketUtil from "./SocketUtil";
import { Socket } from "socket.io-client";

const socket: Socket = SocketUtil.createInstance('departament_user');


export default socket;