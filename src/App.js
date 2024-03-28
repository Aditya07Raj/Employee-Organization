import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./component/Home";
import Register from "./component/Register";
import LoginPage from "./component/LoginPage";
import Home from "./component/Home";

function App() {
  // const titleStr = "Home Page";

  return (
    <BrowserRouter>
      {/* <div className="App">
        <Home title={titleStr} />
        <Register />
      </div> */}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
