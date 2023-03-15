import express from "express";
import cors from "cors";
import { callRoom, genNewRoom } from "../Controllers/apiController";

const apiRouter = express.Router();

apiRouter.use("/", cors({ origin: "http://localhost:5173" })); 
apiRouter.post("/rooms/:inviteCode", callRoom);
apiRouter.post("/rooms", genNewRoom);


export default apiRouter;