import { Routes, Route } from "react-router-dom";
import Logged from "./components/Logged";
import NotLogIn from "./components/NotLogIn";

function App() {
  const userName = localStorage.getItem("StudyName");
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
