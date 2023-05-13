// socketMiddleware.ts
import { Middleware } from "redux";
import socket from "../socket/socket";
import { RootState } from "../interfaces/interfaces";
import { AnyAction } from "redux";
import { updateBoard } from "../state/reducer";

const socketMiddleware: Middleware<{}, RootState> = (store) => (next) => (action: AnyAction) => {
  if (action.type === updateBoard.type) {
    socket.emit("message", action.payload.index);
  }
  return next(action);
};

export default socketMiddleware;
