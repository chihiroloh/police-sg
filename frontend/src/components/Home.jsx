import React from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const goToReportACrime = () => {
    navigate("/ReportACrime");
  };

  return (
    <div>
      <img src={logo} alt="logo" style={{ maxWidth: "57%" }} />
      <p></p>
      <button onClick={goToReportACrime}>Report a Crime</button>
    </div>
  );
};

export default Home;
