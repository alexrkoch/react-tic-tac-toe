import express, { Request, Response } from "express";
import http from "http";
import { Server, Socket } from "socket.io";
import cors from "cors";

const app = express();
const server = http.createServer(app);
app.use(cors());
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000", "http://localhost:3002"],
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});

app.use(express.static("public"));

app.get("/", (req: Request, res: Response) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket: Socket) => {
  console.log(`user connected: ${socket.id}`);

  socket.on("disconnect", () => {
    console.log(`user disconnected: ${socket.id}`);
  });

  socket.on("joinRoom", (room) => {
    socket.join(room);
    console.log(`user ${socket.id} joined ${room}`);
  });

  socket.on("makeMove", (data) => {
    const { room, row, column } = data;
    const move = {row, column};
    socket.to(room).emit("moveMade", move);
    console.log(`user ${socket.id} posted move ${row}, ${column} to room ${room}`);
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
