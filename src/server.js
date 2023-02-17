import "./db.js";
import express from "express";
import http from "http";
import { Server } from "socket.io";
import globalRouter from "./Routers/globalRouter.js";
import feadbackRouter from "./Routers/feadbackRouter.js";
import path from "path";
import Room from "./Models/room.js";

const app = express();
const server = http.createServer(app);
const wsServer = new Server(server)
const __dirname = path.resolve();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/assets", express.static(__dirname+"/dist/assets"));
app.use("/feadback", feadbackRouter );
app.use("/", globalRouter);


wsServer.on("connection", (socket) => {
    // Socket 닉네임 설정 
    socket["nickname"] = localStorage.getItem('StudyName');

    // For Debug, 이벤트 감지 
    socket.onAny((event) => {
        console.log(`Socket Event: ${event}`);
    });

    // 방 입장 시 발생하는 이벤트
    socket.on("enterRoom", async (inviteCode) => {
        //socket 방 참가
        socket.join(inviteCode);

        // DB rooms 도큐먼트의 members 필드에 소켓 닉네임 저장
        const room = await Room.findOne({ inviteCode: inviteCode });

        room.members.push(socket.nickname);
        room.save();

        socket.to(inviteCode).emit("welcome", socket.nickname);
    });
    socket.on("disconnecting", () => {
        socket.rooms.forEach((room) => socket.to(room).emit("bye", socket.nickname));
    });
});

server.listen(3002, () => { console.log("*****HTTP/WS SERVER ON*****")});