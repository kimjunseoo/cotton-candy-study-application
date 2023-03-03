import "./db.js";
import express from "express";
import http from "http";
import { Server } from "socket.io";
import globalRouter from "./Routers/globalRouter.js";
import feadbackRouter from "./Routers/feadbackRouter.js";
import path from "path";
import Room from "./Models/room.js";
import apiRouter from "./Routers/apiRouter.js";

const app = express();
const server = http.createServer(app);
const wsServer = new Server(server)
const __dirname = path.resolve();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/assets", express.static(__dirname+"/dist/assets"));
app.use("/feadback", feadbackRouter );
app.use("/", globalRouter);
app.use("/api", apiRouter);

wsServer.on("connection", (socket) => {

    // 방 생성 후 입장 시 발생하는 이벤트
    socket.on("createAndJoinRoom", async (inviteCode, username) => {

        const room = await Room.findOne({ inviteCode: inviteCode });

        const userInfo = {
            rank: 1,
            username: username
        };

        // socket 방 참가
        socket.join(inviteCode);

        // socket nickname 설정
        socket["nickname"] = username;

        // DB 멤버 배열에 유저 정보 추가
        room.members.push(userInfo);
        const members = room.members;

        // 프론트에서 필요한 맴버 배열 전달
        socket.emit("memberList", members);

        room.save();

        socket.to(inviteCode).emit("welcome", username, members);
    });
    // 방 검색 후 입장 시 발생하는 이벤트
    socket.on("searchAndJoinRoom", async (inviteCode, username) => {
        
        const room = await Room.findOne({ inviteCode: inviteCode });

        const userInfo = {
            rank: 0,
            username: username
        };

        // socket 방 참가
        socket.join(inviteCode);

        // socket nickname 설정
        socket["nickname"] = username;

        // DB 멤버 배열에 유저 정보 추가
        room.members.push(userInfo);
        const members = room.members;

        // 프론트에서 필요한 맴버 배열 전달
        socket.emit("memberList", members);

        room.save();

        socket.to(inviteCode).emit("welcome", username, members);
    });
    // 방 나가기 버튼을 클릭하였을 때, 받아오는 이벤트 
    socket.on("leave", (inviteCode, username ) => {

        //room 에서 leave 처리
        socket.leave(inviteCode);

        socket.to(inviteCode).emit("bye", username);
    });
    // 브라우저를 껐을 때, 받아오는 이벤트 
    socket.on("disconnecting", () => {
        socket.rooms.forEach((room) => socket.to(room).emit("bye", socket.nickname));
    });
});

server.listen(3002, () => { console.log("*****HTTP/WS SERVER ON*****")});