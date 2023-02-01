import {
  InviteModalWrapper,
  InviteModalBg,
  InviteModalTitle,
  InviteModalInfoWrap,
  InviteModalInput,
  InviteModalBtnWrapper,
  InviteModalCancleBtn,
  InviteModalJoinBtn,
} from "../styles/components/InviteModal";

import { activeModal } from "../store";
import { useRecoilState } from "recoil";

const InviteModal = () => {
  const [activityModal, setActivityModal] = useRecoilState(activeModal);
  const handleModalCancleBtn = () => setActivityModal(false);
  return (
    <InviteModalWrapper>
      <InviteModalBg>
        <InviteModalTitle>초대번호를 입력해주세요</InviteModalTitle>
        <InviteModalInfoWrap>
          <InviteModalInput type="text" />
          <InviteModalBtnWrapper>
            <InviteModalCancleBtn onClick={handleModalCancleBtn}>취소</InviteModalCancleBtn>
            <InviteModalJoinBtn>입장</InviteModalJoinBtn>
          </InviteModalBtnWrapper>
        </InviteModalInfoWrap>
      </InviteModalBg>
    </InviteModalWrapper>
  );
};

export default InviteModal;
