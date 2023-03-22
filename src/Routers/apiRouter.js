import express from "express";
import cors from "cors";
import { callRoom, genNewRoom } from "../Controllers/apiController";

const apiRouter = express.Router();

apiRouter.use("/", cors({ origin: "https://cottoncandy-study.netlify.app" })); 
apiRouter.post("/rooms/:inviteCode", callRoom);
apiRouter.post("/rooms", genNewRoom);


export default apiRouter;