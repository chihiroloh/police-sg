import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import logo from "../assets/logo.png";
import loginsingpass from "../assets/loginsingpass.jpg";
import emergencycall from "../assets/emergencycall.png";
import emergencysms from "../assets/emergencysms.png";
import policehotline from "../assets/policehotline.png";

const LoginPage = () => {
  const [isNewsVisible, setIsNewsVisible] = useState(false);
  const [startY, setStartY] = useState(0);
  const navigate = useNavigate();

  const handleTouchStart = (e) => {
    setStartY(e.touches[0].clientY);
  };

  const handleTouchEnd = (e) => {
    const endY = e.changedTouches[0].clientY;
    if (startY - endY > 50) {
      setIsNewsVisible(true);
    }
  };

  const navigateToSingpass = () => {
    navigate("/singpass");
  };

  return (
    <div className="login-page">
      <div className="content">
        <div className="logoanddesc">
          <img src={logo} alt="logo" />
          <p className="description-login">
            An initiative by the Singapore Police Force
          </p>
        </div>
        <br />
        <button className="singpass-button" onClick={navigateToSingpass}>
          <img className="loginsingpass" src={loginsingpass} alt="login"></img>
        </button>
        <br />
        <div className="action-buttons">
          <div className="sms">
            <button className="one">
              <img src={emergencysms} />
            </button>
            <p className="emergencysms">Emergency SMS</p>
          </div>
          <div className="call">
            <button className="two">
              <img src={emergencycall} />
            </button>
            <p className="emergencycall">Emergency Call</p>
          </div>
          <div className="hotline">
            <button className="three">
              <img src={policehotline} />
            </button>
            <p className="policehotline">Police Hotline</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
