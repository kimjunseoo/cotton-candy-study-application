import Room from "../Models/room";

function generateRandomCode(n) {
    let str = '';
    for (let i = 0; i < n; i++) {
      str += Math.floor(Math.random() * 10);
    }
    return str;
};

export const genNewRoom = async (req, res) => {
    //4자리 랜덤 난수의 초대 코드 생성
    const inviteCode = generateRandomCode(4);

    //초대 코드 중복 여부 검사
    const roomExist = await Room.exists({ inviteCode: inviteCode });
    console.log(roomExist);
    if(roomExist){
        return genNewRoom();
    }

    try{
        await Room.create({
            inviteCode: inviteCode
        })
    } catch(error) {
        return res.status(500).json({
            error: error
        });
    }

    return res.status(200).json({
        inviteCode: inviteCode
    });
};

export const callRoom = async (req, res) => {
    const inviteCode = req.body.inviteCode;

    const inviteCodeExist = await Room.exists( { inviteCode: inviteCode } );

    if(!inviteCodeExist){
        return  res.status(500).json({
            result: false
        })
    };

    return  res.status(200).json({
        result: true
    });
};