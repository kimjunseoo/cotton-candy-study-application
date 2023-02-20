import express from "express";
import path from "path";

const __dirname = path.resolve();
const globalRouter = express.Router();


globalRouter.route("*").get( (req, res) => {
    return res.sendFile(path.join(__dirname, 'dist/index.html'));
});

export default globalRouter;