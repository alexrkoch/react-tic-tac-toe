import { io, Socket } from "socket.io-client";

export const JOIN_ROOM = "joinRoom";
export const MAKE_MOVE = "makeMove";
export const MOVE_MADE = "moveMade"

const socket: Socket = io("http://localhost:3001");
export default socket;
