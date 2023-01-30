import LobbyImg from "./LobbyImg";
import {
  NotLoginWrap,
  InvalidUserSection,
  InvalidUserTitle,
  InvalidUserDesc,
  InvalidUserForm,
  InvalidUserInput,
  InvalidUserBtn,
} from "../styles/components/NotLogin";

const NotLogin = () => {
  return (
    <NotLoginWrap>
      <LobbyImg />

      <InvalidUserSection>
        <InvalidUserTitle>발표도우미</InvalidUserTitle>
        <InvalidUserDesc>스터디 앱에서 사용하실 닉네임을 정해주세요.</InvalidUserDesc>
        <InvalidUserForm>
          <InvalidUserInput type="text" placeholder="닉네임 설정" />
          <InvalidUserBtn>닉네임 저장</InvalidUserBtn>
        </InvalidUserForm>
      </InvalidUserSection>
    </NotLoginWrap>
  );
};

export default NotLogin;
