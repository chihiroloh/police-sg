import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Singpass.css"

const Singpass = () => {
  const navigate = useNavigate();

  const navigateToTutorial= () => {
    navigate('/tutorial');
  };

  return (
    <div className="singpass-container">
        <h2>Log-in with Singpass</h2>
      <button className="loginbutton" onClick={navigateToTutorial}>Log-in</button>
    </div>
  );
};

export default Singpass;
