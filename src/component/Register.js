import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [registerData, setRegisterData] = useState({
    fullName: "",
    userName: "",
    password: "",
  });

  const navigate = useNavigate();

  const data1 = useRef();
  const data2 = useRef();
  const data3 = useRef();

  function handleClick() {
    // take array from the localstorage
    // append new obj
    // set
    const prevArr = JSON.parse(localStorage.getItem("userArr")) || [];
    const newArr = [
      ...prevArr,
      {
        fullName: registerData.fullName || "",
        userName: registerData.userName || "",
        password: registerData.password || "",
      },
    ];
    localStorage.setItem("userArr", JSON.stringify(newArr));
    setRegisterData({ fullName: "", userName: "", password: "" });
    alert("User Registered Successfully !!!");
  }

  const handleOnChange = (value, key) => {
    let tempObj = { ...registerData }; // take copy of the state
    tempObj = { ...tempObj, [key]: value }; // update the copied state value of the new key

    setRegisterData(tempObj);
  };

  return (
    <div class="container">
      <div className="loginBox">
        <div className="textbox">
          <input
            type="text"
            placeholder="Full Name"
            ref={data1}
            value={registerData.fullName}
            required
            onChange={(evt) => handleOnChange(evt.target.value, "fullName")}
          />
        </div>

        <div className="textbox">
          <input
            type="text"
            placeholder=" User Name"
            ref={data2}
            value={registerData.userName}
            onChange={(e) => handleOnChange(e.target.value, "userName")}
          />
        </div>

        <div className="textbox">
          <input
            type="text"
            placeholder="password"
            ref={data3}
            value={registerData.password}
            onChange={(evt) => handleOnChange(evt.target.value, "password")}
          />
        </div>
        <div className="Btns">
          <button id="Button" onClick={handleClick}>
            Register
          </button>

          <button id="Button" onClick={() => navigate("/")}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
