import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Singpass.css"

const Singpass = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/home');
  };

  return (
    <div className="singpass-container">
        <h2>Log-in with Singpass</h2>
      <button className="loginbutton" onClick={navigateToHome}>Log-in</button>
    </div>
  );
};

export default Singpass;
