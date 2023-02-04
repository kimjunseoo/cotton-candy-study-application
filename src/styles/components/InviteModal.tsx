import styled from "@emotion/styled";

export const InviteModalWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InviteModalBg = styled.div`
  width: 400px;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  background-color: white;
  border-radius: 15px;
`;

export const InviteModalTitle = styled.div`
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  padding-top: 30px;
`;

export const InviteModalInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const InviteModalInput = styled.input`
  width: 260px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid grey;
  padding-left: 15px;
  &:focus {
    border: 1px solid darkorange;
    outline: none;
  }
`;

export const InviteModalBtnWrapper = styled.div`
  width: 270px;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

export const InviteModalCancleBtn = styled.span`
  padding: 15px 45px;
  background-color: grey;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
`;

export const InviteModalJoinBtn = styled.span`
  padding: 15px 50px;
  background-color: red;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
`;
