import { Routes, Route } from "react-router-dom";
import Logged from "../components/Logged";
import NotLogIn from "../components/NotLogIn";
import { useRecoilValue } from "recoil";
import { IsStorageName, getLogged } from "../store";

const Router = () => {
  const storageName = useRecoilValue(IsStorageName);
  const checkLogin = useRecoilValue(getLogged);

  return (
    <div>
      {checkLogin ? (
        <Routes>
          <Route path="/" element={<Logged storageName={storageName} />} />
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
