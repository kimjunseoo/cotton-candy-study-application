import express from "express";
import path from "path";
import { testController } from "../Controllers/globalControllers.js";

const __dirname = path.resolve();
const globalRouter = express.Router();

globalRouter.route("/main").get( testController );

globalRouter.route("*").get( (req, res) => {
    return res.sendFile(path.join(__dirname, 'dist/index.html'));
});

export default globalRouter;