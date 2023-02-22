import express from "express";
import { createFeadback, getMyFeadbacks, getTempMessage } from "../Controllers/FeadbackController.js"

const feadbackRouter = express.Router();

feadbackRouter.route("/create").post(createFeadback);
feadbackRouter.route("/myfeadback").get(getMyFeadbacks);

feadbackRouter.route("/").get(getTempMessage);

export default feadbackRouter;