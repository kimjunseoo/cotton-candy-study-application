import express from "express";
import path from "path";
import { genInviteCode } from "../Controllers/controller";

const globalRouter = express.Router();

globalRouter.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

globalRouter.post("/genInviteCode", genInviteCode);

globalRouter.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html')); 
});

export default globalRouter;

