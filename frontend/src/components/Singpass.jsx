import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/user";
import { jwtDecode } from "jwt-decode";
import "./Singpass.css";
import singPass from "../assets/singpass.png";

const Singpass = () => {
  const navigate = useNavigate();
  const userInfoCtx = useContext(UserContext);

  const navigateToHome = () => {
    navigate("/home");
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* <div className="singpass-container"> */}
      <button
        className="login-button"
        onClick={() => {
          handleLogin();
          navigateToHome();
        }}
      >
        <img src={singPass}></img>
      </button>
      {/* </div> */}
    </>
  );
};

export default Singpass;
