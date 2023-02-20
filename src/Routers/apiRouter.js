import express from "express";
import { callRoom, genNewRoom } from "../Controllers/apiController";

const apiRouter = express.Router();

apiRouter.post("/rooms/:inviteCode", callRoom);
apiRouter.post("/rooms", genNewRoom);


export default apiRouter;