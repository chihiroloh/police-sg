import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import logo from "../assets/logo.png";
import loginsingpass from "../assets/loginsingpass.jpg";

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
        <img src={logo} alt="logo" />
        <h3>An initiative by the Singapore Police Force</h3>
        <br />
        <button className="singpass-button" onClick={navigateToSingpass}>
          <img className="loginsingpass" src={loginsingpass} alt="login"></img>
        </button>
        <br />
        <div className="action-buttons">
          <button className="1">Emergency SMS</button>
          <button className="2">Emergency Call</button>
          <button className="3">Police Hotline</button>
        </div>
      </div>
      <div
        className="notification-tab"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <span>Swipe up for latest news</span>
      </div>

      {isNewsVisible && (
        <div className="news-overlay">
          <div className="news-content">
            <p>Latest news content...</p>
            <button onClick={() => setIsNewsVisible(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
