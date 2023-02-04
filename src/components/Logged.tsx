import { useNavigate } from "react-router-dom";
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

import { activeModal } from "../store";
import { useRecoilState } from "recoil";

import InviteModal from "./InviteModal";
interface StorageType {
  storageName: string;
}

const Logged = (props: StorageType) => {
  const userName = localStorage.getItem(props.storageName);
  const [activityModal, setActivityModal] = useRecoilState(activeModal);

  const path = useNavigate();
  const pathCreateRoom = () => path("/main");
  const pathFeedBack = () => path("/feedback");

  /** 스터디룸 입장모달 활성화 */
  const handleModalShowBtn = () => setActivityModal(true);

  return (
    <LoginWrap>
      {activityModal && <InviteModal />}
      <LobbyImg />
      <LoginInfoWrapper>
        <LoginUserName>{userName}님, 환영합니다.</LoginUserName>
        <LoginCreateJoinWrapper>
          <LoginCreateRoom onClick={pathCreateRoom}>새로운 스터디룸 생성하기</LoginCreateRoom>
          <LoginEnterRoomIn onClick={handleModalShowBtn}>친구들의 스터디룸 입장하기 (초대코드)</LoginEnterRoomIn>
          <LoginSearchFeedBack onClick={pathFeedBack}>피드백 검색하기</LoginSearchFeedBack>
        </LoginCreateJoinWrapper>
      </LoginInfoWrapper>
    </LoginWrap>
  );
};

export default Logged;
