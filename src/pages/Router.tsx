import { Routes, Route } from "react-router-dom";

// Global States
import { useRecoilValue } from "recoil";
import { IsStorageName, getLogged } from "../store";

// components
import Logged from "../components/Logged";
import NotLogIn from "../components/NotLogIn";

// pages
import MainPage from "./MainPage";

const Router = () => {
  // Global State로 등록된 LocalStorage API Key 값을 가져온다.
  const storageName = useRecoilValue(IsStorageName);
  const checkLogin = useRecoilValue(getLogged);

  return (
    <div>
      {checkLogin ? (
        <Routes>
          <Route path="/" element={<Logged storageName={storageName} />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<NotLogIn storageName={storageName} />} />
        </Routes>
      )}
    </div>
  );
};

export default Router;
