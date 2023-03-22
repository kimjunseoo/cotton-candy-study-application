import express from "express";
import cors from "cors";
import { createFeadback, getMyFeadbacks, getTempMessage } from "../Controllers/FeadbackController.js"

const feadbackRouter = express.Router();

feadbackRouter.use("/", cors({ origin: "https://cottoncandy-study.netlify.app" }));
feadbackRouter.route("/create").post(createFeadback);
feadbackRouter.route("/myfeadback").get(getMyFeadbacks);

feadbackRouter.route("/").get(getTempMessage);

export default feadbackRouter;