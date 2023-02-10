import "./db.js";
import express from "express";
import http from "http";
import { Server } from "socket.io";
import globalRouter from "./Routers/globalRouter.js";
import path from "path";

const app = express();
const server = http.createServer(app);
const wsServer = new Server(server)
const __dirname = path.resolve();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/assets", express.static(__dirname+"/dist/assets"));
app.use("/", globalRouter);


wsServer.on("connection", (socket) => {
    socket["nickname"] = localStorage.getItem('StudyName');
    console.log("Someone Connected by socketIo!")
    socket.onAny((event) => {
        console.log(`Socket Event: ${event}`);
    });
    socket.on("enterRoom", (inviteCode) => {
        socket.join(inviteCode);
        socket.to(inviteCode).emit("welcome");
    });
    socket.on("disconnecting", () => {
        socket.rooms.forEach((room) => socket.to(room).emit("bye"));
    });
});

server.listen(3002, () => { console.log("*****HTTP/WS SERVER ON*****")});