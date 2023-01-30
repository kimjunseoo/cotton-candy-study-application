import logo from "../assets/logo/logo.png";
import { LobbyWrap, LobbyImgLogo, LobbyTitle } from "../styles/components/LobbyImg";

const LobbyImg = () => {
  return (
    <LobbyWrap>
      <LobbyImgLogo src={logo} />
      <LobbyTitle>Study P.A</LobbyTitle>
    </LobbyWrap>
  );
};

export default LobbyImg;
