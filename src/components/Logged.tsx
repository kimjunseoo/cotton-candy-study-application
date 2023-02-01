import LobbyImg from "./LobbyImg";

import {
  LoginWrap,
  LoginInfoWrapper,
  LoginUserName,
  LoginCreateJoinWrapper,
  LoginCreateRoom,
  LoginEnterRoomIn,
  LoginSearchFeedBack,
} from "../styles/components/Logged";

const Logged = () => {
  return (
    <LoginWrap>
      <LobbyImg />
      <LoginInfoWrapper>
        <LoginUserName>솜사탕님, 환영합니다.</LoginUserName>
        <LoginCreateJoinWrapper>
          <LoginCreateRoom>새로운 스터디룸 생성하기</LoginCreateRoom>
          <LoginEnterRoomIn>친구들의 스터디룸 입장하기 (초대코드)</LoginEnterRoomIn>
          <LoginSearchFeedBack>피드백 검색하기</LoginSearchFeedBack>
        </LoginCreateJoinWrapper>
      </LoginInfoWrapper>
    </LoginWrap>
  );
};

export default Logged;
