import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

// Global States
import { useRecoilValue } from "recoil";
import { IsStorageName, getLogged } from "../store";

// components
import Logged from "../components/Logged";
import NotLogIn from "../components/NotLogIn";

// pages
import MainPage from "./MainPage";

const Router = () => {
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
