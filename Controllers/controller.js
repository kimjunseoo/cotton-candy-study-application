let InviteCodeValue = 1;

export const genInviteCode = (req, res) => {
    return res.send("Your Invite Code is : " + InviteCodeValue);
};