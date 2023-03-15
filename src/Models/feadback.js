import mongoose from "mongoose";

const feadbackSchema = new mongoose.Schema({
    roomCode: { type: String, required: true},
    evaluatorName: { type : String, required: true},
    content: { type: String, required: true },
    createdAt: { type: Date, default: () => Date.now()}
})

const userFeadbackSchema = new mongoose.Schema({
    evaluatedId: { type: mongoose.Schema.Types.ObjectId, required : false },
    evaluatedName: { type: String, required: true}, 
    feadbacks: [{type : feadbackSchema, required : false, default : [] }]
})

const Feadback = mongoose.model("Feadback", feadbackSchema);
const UserFeadbacks = mongoose.model("UserFeadback", userFeadbackSchema);

export { Feadback, UserFeadbacks};
