import styled from "@emotion/styled";

export const NotLoginWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow-y: hidden;
`;

export const InvalidUserSection = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow-y: hidden;
`;

export const InvalidUserDesc = styled.div`
  font-size: 17px;
  position: relative;
  bottom: 60px;
`;

export const InvalidUserForm = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InvalidUserInput = styled.input`
  width: 250px;
  height: 40px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid grey;
  padding-left: 10px;
`;

export const InvalidUserBtn = styled.button`
  width: 263px;
  height: 44px;
  background-color: orange;
  border-radius: 5px;
  border: none;
  color: white;
  cursor: pointer;
`;
