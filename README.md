# React Tic Tac Toe with Websocket Server

A 2-player tic tac toe game, using a web socket server for real-time move
updates.

## To Run Locally

1. Dependencies:
   - node
   - npm
2. Run `npm install` in both the client and server directories.
3. Start the server: `npm run start`. (PORT 3001)
4. Start the first client: `npm run start`. (PORT 3000)
5. Start the second client: `npm run start`.
   - should ask you to run on a different port since 3000 is taken
   - should automatically choose 3002
   - if it doesnt, add the port its running on to the CORS exception list in
     `server/src/serv.ts` in the `io` definition.
6. Visit http://localhost:3000 and http://localhost:3002 in separate tabs.
7. PLAY!
