import express from "express";
import path from "path";
import { getRoomsCreate, postGetRoom } from "../Controllers/globalControllers.js";

const __dirname = path.resolve();
const globalRouter = express.Router();


globalRouter.route("/rooms/create").get(getRoomsCreate);
globalRouter.route("/rooms/getRoom").post(postGetRoom);
globalRouter.route("*").get( (req, res) => {
    return res.sendFile(path.join(__dirname, 'dist/index.html'));
});

export default globalRouter;