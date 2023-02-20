function generateRandomCode(n) {
    let str = '';
    for (let i = 0; i < n; i++) {
      str += Math.floor(Math.random() * 10);
    }
    return str;
};

export const genNewRoom = async (req, res) => {
    //4자리 랜덤 난수의 초대 코드 생성
    let inviteCode = generateRandomCode(4);

    //초대 코드 중복 여부 검사
    const roomExist = await Room.exists({ inviteCode: inviteCode });

    if(roomExist){
        return res.status(503);
    }

    try{
        Room.create({
            inviteCode: inviteCode
        })
    } catch(error) {
        return error;
    }

    return inviteCode;
};

export const callRoom = async (req, res) => {
    const inviteCode = req.body.roomcode;

    const inviteCodeExist = await Room.exists( { inviteCode: inviteCode } );

    if(!inviteCode){
        return res.status(503);
    };

    return inviteCode;
}