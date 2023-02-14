import Room from "../Models/room";

function generateRandomCode(n) {
    let str = '';
    for (let i = 0; i < n; i++) {
      str += Math.floor(Math.random() * 10);
    }
    return str;
};

export const getRoomsCreate = async (req, res) => {
    // 방장 권한 부여를 위한, 세션 value 추가 / 미완성


    //4자리 랜덤 난수의 초대 코드 생성
    const inviteCode = generateRandomCode(4);

    //초대 코드 중복 여부 검사
    const roomExist = await Room.exists({ inviteCode: inviteCode });
    if(roomExist){
        return res.redirect("/rooms/create/");
    }

    try{
        Room.create({
            inviteCode: inviteCode
        })
    }   catch(error) {
        return res.redirect("/?error=Can'tGenerateRoom");
    }

    return res.redirect(`/rooms/${inviteCode}`);
};

export const postGetRoom = async (req, res) => {
    const inviteCode = req.body.roomcode;

    const inviteCodeExist = await Room.exists( { inviteCode: inviteCode } );

    if(!inviteCode){
        return res.redirect("/?error=inviteCodeDoesntExists")
    };

    return res.redirect(`/rooms/${inviteCode}`);
}