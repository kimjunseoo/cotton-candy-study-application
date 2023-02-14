import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.set('strictQuery', false);

mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;

db.on("error", (error)=>{ console.log("DB on error" + error) });
db.once("open", ()=>{ console.log("*****Connect to MongoDB*****")});