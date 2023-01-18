import express from "express";
import path from "path";
import globalRouter from "./Routers/globalRouter";

const app = express();
export const __dirname = path.resolve();
const PORT = 4001;

app.use(express.static(path.join(__dirname, '/dist/')));
app.use("/", globalRouter);

app.listen(PORT, () => console.log("🏃🏃🏃Server is running🏃🏃🏃"));





