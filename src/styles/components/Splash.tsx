import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import "../../index.css";

const OverWrap = keyframes`
  0% {
    opacity: 100;
  }
  100% {
    opacity: 0;
  }
`;

export const SplashWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  animation: ${OverWrap} 2s ease-in-out;
`;

export const SplashImgLogo = styled.img`
  width: 220px;
`;

export const SplashTitle = styled.div`
  font-family: splashFonts;
  font-size: 50px;
  margin-top: 20px;
`;
