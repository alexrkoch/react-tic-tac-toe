import express, { Request, Response } from 'express';
import http from 'http';
import { Server, Socket } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));

app.get('/', (req: Request, res: Response) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket: Socket) => {
  console.log(`user connected: ${socket.id}` );

  socket.on('disconnect', () => {
    console.log(`user disconnected: ${socket.id}`);
  });

  socket.on('move', (data: any) => {
    console.log('move: ' + data);
    io.emit('move', data);
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
