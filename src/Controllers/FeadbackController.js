import { UserFeadbacks } from "../Models/feadback";

const createFeadback = async (req, res) => {
    /*
     * POST feadback/createre
     * body
     * {
     *   "roomCode" : 1024,
     *   "giverName" : "어쩌고",
     *   "evaluatedName" : "누구누구",
     *   "message" : "이러고 저렇고 해서 얼마 드려요", 
     * }
     */

    const {roomCode, giverName, evaluatedName, message} = req.body;
    
    const feadbackInfo = {
        roomCode,
        evaluatorName : giverName,
        content : message,
    }
    const evaluatedUser = await UserFeadbacks.findOne({evaluatedName : evaluatedName});
    if (!evaluatedUser) {
        return res.status(404).json({"message" : "no user"});
    }
    const addFeadbackResult = await UserFeadbacks.findOneAndUpdate(
        { evaluatedName : evaluatedName }, 
        { $push : 
            { feadbacks : feadbackInfo}
        }
    );
    
    return res.status(201).json(addFeadbackResult);
}

const getMyFeadbacks = async (req, res) => {
    /*
     * 일단 URL path로 전달 가정 
     * feadback/myfeadback?iam="닉네임"
    */

    const nickname = req.query.iam || null;
    if (!nickname) {
        return res.status(200).json({"message": "insert nickname"});
    }

    let myfeadback = await UserFeadbacks.findOne({ evaluatedName : nickname});
    
    if (!myfeadback) {
        myfeadback = {"message" : "no feadbacks"};
    }

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