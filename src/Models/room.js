import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    inviteCode: { type: String, require: true},
    members: [{ type: String }],
    createdAt: { type: Date, required: true, default: Date.now },
});

const Room = mongoose.model("Room", roomSchema);

Room.schema.index( {createdAt:1}, {expireAfterSeconds: 7889400 } );

export default Room;