import { Feadback, UserFeadbacks } from "../Models/feadback";

const createFeadback = async (req, res) => {
    /*
     * POST feadback/createre
     * body
     * {
     *   "roomCode" : 1024,
     *   "giverNickname" : "어쩌고",
     *   "evaluatedName" : "누구누구",
     *   "message" : "이러고 저렇고 해서 얼마 드려요", 
     * }
     */

    const {roomCode, giverNickname, evaluatedName, message} = req.params;
    console.log(roomCode, giverNickname, evaluatedName, message);

    const feadbackInfo = {
        roomCode,
        evaluatorName : giverName,
        content : message,
    } 
    const addFeadbackResult = await UserFeadbacks.updateOne({ evaluatedName : evaluatedName }, { $push : { feadbacks : feadbackInfo } })
    console.log(addFeadbackResult);

    return res.status(201).json({"message": "success"});
}

const getMyFeadbacks = async (req, res) => {
    /*
     * 일단 URL path로 전달 가정 
     * feadback/myfeadback?iam="닉네임"
     */
    
    const nickname = req.params.iam ?? "test";
    console.log(nickname, typeof nickname);
    const myfeadback = await UserFeadbacks.find({ evaluatorName : nickname});

    return res.status(200).json(myfeadback);
}

const getTempMessage = async(req,res) => {
    const nickname = "testname";
    const myfeaback = await UserFeadbacks.create({
        evaluatedName: nickname, 
        feadbacks : {
            roomCode : 2000,
            evaluatorName : "givername",
            content : "testtestsetset",
        } 
    })
    return res.status(200).json(myfeaback);
};

export { createFeadback, getMyFeadbacks, getTempMessage};