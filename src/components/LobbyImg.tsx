import logo from "../assets/logo/logo.png";
import { LobbyWrap, LobbyImgLogo, LobbyTitle } from "../styles/components/LobbyImg";

const LobbyImg = () => {
  return (
    <LobbyWrap>
      <LobbyImgLogo src={logo} />
      <LobbyTitle>발표도우미</LobbyTitle>
    </LobbyWrap>
  );
};

export default LobbyImg;
