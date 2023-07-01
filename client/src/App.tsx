import Main from "./components/Main";
import Navigation from "./components/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/accounts/Login";
import Chat from "./components/Chat";

function App() {
  return (
    <div className="App w-full h-auto flex text-white">
      <BrowserRouter>
        <div style={{ width: "15vw" }}>
          <Navigation />
        </div>
        <div className="h-auto" style={{ width: "85vw" }}>
          <Routes>
            <Route index element={<Main />} />
            <Route path="profile" element={<Main />} />
            <Route path="login" element={<Login />} />
            <Route path="chat" element={<Chat />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
