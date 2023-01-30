import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Logged from "./components/Logged";
import NotLogIn from "./components/NotLogIn";
import Splash from "./components/Splash";

function App() {
  const [splash, setSplash] = useState<boolean>(true);
  const userName = localStorage.getItem("StudyName");

  // 스플래시 2초 유지
  setTimeout(() => {
    setSplash(false);
  }, 2000);

  if (splash) return <Splash />;

  return (
    <div className="App">
      {userName ? (
        <Routes>
          <Route path="/" element={<Logged />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<NotLogIn />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
