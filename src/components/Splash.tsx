import logo from "../assets/logo/logo.png";
import { SplashWrap, SplashTitle } from "../styles/components/Splash";

const Splash = () => {
  return (
    <SplashWrap>
      <img src={logo} />
      <SplashTitle>발표도우미</SplashTitle>
    </SplashWrap>
  );
};

export default Splash;
