import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [userName, editedUserName] = useState("");
  const [password, editedPassword] = useState("");

  const navigate = useNavigate();

  function handleLogin() {
    const prevArr = JSON.parse(localStorage.getItem("userArr")) || [];
    const findObj = prevArr.find(
      (value) => value.userName === userName && value.password === password
    );
    if (findObj) {
      alert("Login Successful!");
      navigate("/Home");
    } else {
      alert("Incorrect username or password. Please try again.");
    }
  }

  const onNameChange = (evt) => {
    editedUserName(evt.target.value);
  };
  const onPasswordChange = (evt) => {
    editedPassword(evt.target.value);
  };

  return (
    <div className="container">
      <div className="textbox">
        <h1>LoginPage</h1>
        <div className="loginFeild">
          <div id="Username">
            <input
              type="text"
              placeholder="username"
              value={userName}
              onChange={(evt) => onNameChange(evt)}
              required
            />
          </div>
          <div id="password">
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(evt) => onPasswordChange(evt)}
              required
            ></input>
          </div>
        </div>
      </div>
      <div className="Btns">
        <button id="Button" onClick={handleLogin}>
          Login
        </button>
        <p>
          New User ?{" "}
          <a
            href="/register"
            onClick={() => {
              navigate("/register");
            }}
          >
            Register.
          </a>
        </p>
      </div>
    </div>
  );
};
export default LoginPage;
