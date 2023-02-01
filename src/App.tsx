import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Logged from "./components/Logged";
import NotLogIn from "./components/NotLogIn";
import Splash from "./components/Splash";
import { useRecoilValue } from "recoil";
import { IsStorageName } from "./store";

function App() {
  const [splash, setSplash] = useState<boolean>(true);

  const storageName = useRecoilValue(IsStorageName);
  const localUserNameApi = localStorage.getItem(storageName);

  // 스플래시 2초 유지
  setTimeout(() => {
    setSplash(false);
  }, 2000);

  if (splash) return <Splash />;

  return (
    <div className="App">
      {localUserNameApi ? (
        <Routes>
          <Route path="/" element={<Logged />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<NotLogIn storageName={storageName} />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
