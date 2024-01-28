import Debug from 'debug';
import express from 'express';
import {createServer} from 'http';
import {Server} from 'socket.io';
import mongoose from 'mongoose';
import {PORT, DB_NAME} from './utils/config';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

const debug = Debug("trello-server");
const port = PORT || 4001;
const dbName = DB_NAME;

app.get("/", (_,res) => {
    res.send("API is up")
});

io.on('connection', ()=> {
    console.log("connect");
});

mongoose.connect(`mongodb://localhost:27017/${dbName}`).then(() => {
    console.log("connected to mongodb");
    httpServer.listen(port, () => {
        debug(`port number = ${port}`);
        console.log(`Server listening on port ${port}`);
    ;})
});
