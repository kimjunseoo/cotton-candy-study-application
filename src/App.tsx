import { useState } from "react";
import Splash from "./components/Splash";
import Router from "./pages/Router";

function App() {
  const [splash, setSplash] = useState<boolean>(true);

  // 스플래시 2초 유지
  setTimeout(() => {
    setSplash(false);
  }, 2000);

  if (splash) return <Splash />;

  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
