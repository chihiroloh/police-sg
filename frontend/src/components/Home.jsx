import React, { useState } from "react";
import headerwithnoti from "../assets/headerwithnoti.png";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import crimebutton from "../assets/crimebutton.png";

const Home = () => {
  const navigate = useNavigate();
  const [showAnnouncements, setShowAnnouncements] = useState(true);

  const toggleAnnouncements = () => {
    setShowAnnouncements(!showAnnouncements);
  };

  const goToReportACrime = () => {
    navigate("/ReportACrime");
  };

  return (
    <div className="content-container">
      <img
        className="header-image"
        src={headerwithnoti}
        alt="loheaderwithnoti"
      />
      <br />
      <div className="home-container">
        {showAnnouncements && (
          <div className="announcement-column">
            <div className="announcement-header">
              <button className="close-button" onClick={toggleAnnouncements}>
                x
              </button>
              <h3>Important Annoucements</h3>
            </div>
            <p>
              The SPF would like to alert the public to remain vigilant against
              investment scams. Scammers approach victims through social media
              platforms... <b className="readmore">Read more</b>
            </p>
            <p>1d ago • 1 min read</p>
          </div>
        )}
      </div>
      <div>
        <h2 className="welcome">Hello Hillary Ho Hui Hui,</h2>
        <p className="help">How can we help you today?</p>
      </div>
      <button className="crimebutton" onClick={goToReportACrime}>
        <img src={crimebutton} alt="crimebutton" />
      </button>
      <button onClick={goToReportACrime}>Report a Crime</button>
    </div>
  );
};

export default Home;
