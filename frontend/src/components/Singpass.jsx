import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/user";
import { jwtDecode } from "jwt-decode";
import "./Singpass.css";

const Singpass = () => {
  const navigate = useNavigate();
  const userInfoCtx = useContext(UserContext);

  const navigateToTutorial = () => {
    navigate("/tutorial");
  };

  const handleLogin = async () => {
    try {
      const res = await fetch(import.meta.env.VITE_SERVER + "/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "normalUser1@gmail.com",
          password: "password123",
        }),
      });
      const data = await res.json();
      userInfoCtx.setAccessToken(data.access);
      const decoded = jwtDecode(data.access);
      userInfoCtx.setUserId(decoded.id);
      userInfoCtx.setUserName(decoded.name);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="singpass-container">
      <h2>Log-in with Singpass</h2>
      <button
        className="loginbutton"
        onClick={() => {
          handleLogin();
          navigateToTutorial();
        }}
      >
        Log-in
      </button>
    </div>
  );
};

export default Singpass;
