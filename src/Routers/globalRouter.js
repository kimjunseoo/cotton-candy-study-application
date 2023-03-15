import express from "express";
import path from "path";
import cors from "cors";

const __dirname = path.resolve();
const globalRouter = express.Router();

globalRouter.use("/", cors({ origin: "http://localhost:5173" }));

export default globalRouter;