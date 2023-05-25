// socketMiddleware.ts
import { Middleware } from "redux";
import socket, { JOIN_ROOM, MAKE_MOVE } from "../socket/socket";
import { RootState } from "../interfaces/interfaces";
import { AnyAction } from "redux";
import { makeMove, selectRole } from "../state/reducer";

const socketMiddleware: Middleware<{}, RootState> =
  (store) => (next) => (action: AnyAction) => {
    switch (action.type) {
      case makeMove.type:
        const move = { 
          room: action.payload.room, 
          row: action.payload.row,
          column: action.payload.column 
        };
        socket.emit(MAKE_MOVE, move);
        break;
      case selectRole.type:
        socket.emit(JOIN_ROOM, action.payload.role);
        break;
    }
    return next(action);
  };

export default socketMiddleware;
