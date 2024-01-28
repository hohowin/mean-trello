import express, { Express } from 'express';

export const app: Express = express();

app.get("/", (_,res) => {
    res.send("API is up")
});

