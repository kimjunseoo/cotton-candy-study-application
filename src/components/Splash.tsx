import logo from "../assets/logo/logo.png";
import { SplashWrap, SplashImgLogo, SplashTitle } from "../styles/components/Splash";

const Splash = () => {
  return (
    <SplashWrap>
      <SplashImgLogo src={logo} />
      <SplashTitle>발표도우미</SplashTitle>
    </SplashWrap>
  );
};

export default Splash;
