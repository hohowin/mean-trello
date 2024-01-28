import express from 'express';
import {createServer} from 'http';
import {Server} from 'socket.io';
import mongoose from 'mongoose';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

app.get("/", (_,res) => {
    res.send("API is up")
});

io.on('connection', ()=> {
    console.log("connect");
});

mongoose.connect('mongodb://localhost:27017/eltrello').then(() => {
    console.log("connected to mongodb");
    httpServer.listen(4001, () => {
        console.log(`Server up`)
    ;})
});
