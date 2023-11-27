import React, { useState, useContext } from "react";
import minilogo from "../assets/minilogo.png";
import bell from "../assets/bell.png";
import question from "../assets/question.png";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import crimebutton from "../assets/crimebutton.png";
import rac from "../assets/e-services/r-a-c.png";
import lostnfound from "../assets/e-services/lostnfound.png";
import casestatus from "../assets/e-services/case-status.png";
import LostNFound from "./LostNFound";
import CaseStatus from "./CaseStatus";
import join from "../assets/join.png";
import cop from "./Cop";
import about from "./About";
import toc from "./Toc";
import privacy from "./Privacy";
import terms from "../assets/e-services/terms.png";
import aboutpolice from "../assets/about.png";
import privacypolicy from "../assets/privacy.png";
import NavBar from "./NavBar";
import UserContext from "../contexts/user";

const Home = () => {
  const navigate = useNavigate();
  const [showAnnouncements, setShowAnnouncements] = useState(true);
  const userInfoCtx = useContext(UserContext);

  const toggleAnnouncements = () => {
    setShowAnnouncements(!showAnnouncements);
  };

  const goToReportACrime = () => {
    navigate("/ReportACrime");
  };
  const goToLostNFound = () => {
    navigate("/LostNFound");
  };
  const goToCaseStatus = () => {
    navigate("/CaseStatus");
  };
  const goToAbout = () => {
    navigate("/About");
  };

  const goToToc = () => {
    navigate("/Toc");
  };
  const goToPrivacy = () => {
    navigate("/Privacy");
  };
  const goToCop = () => {
    navigate("/Cop");
  };

  return (
    <div className="content-container">
      <div className="top-header">
        <img src={minilogo} />
        <div className="side-content">
          <img src={bell} />
          <img src={question} />
        </div>
      </div>

      <br />
      {/* PartOne */}
      <div className="home-container">
        {showAnnouncements && (
          <div className="announcement-column">
            <div className="announcement-header">
              <button
                className="close-button"
                onClick={toggleAnnouncements}>
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
      {/* PartTwo */}
      <div>
        <h2 className="welcome">Hello {userInfoCtx.userName},</h2>
        <p className="help">How can we help you today?</p>
      </div>
      <button
        className="crimebutton"
        onClick={goToReportACrime}>
        <img
          src={crimebutton}
          alt="crimebutton"
        />
      </button>
      <p className="eservices-header">e-Services</p>
      <div className="eservices">
        <button onClick={goToReportACrime}>
          <img
            src={rac}
            alt="rac"
          />
        </button>
        <button onClick={goToLostNFound}>
          <img
            src={lostnfound}
            alt="lostnfound"
          />
        </button>
        <button onClick={goToCaseStatus}>
          <img
            src={casestatus}
            alt="casestatus"
          />
        </button>
      </div>
      {/* PartThree */}
      <div>
        <p className="cop">Become a Citizen On Patrol (COP)</p>
        <button
          className="cop-button"
          onClick={goToCop}>
          <img
            src={join}
            alt="join"
          />
        </button>
      </div>
      {/* PartFour */}
      <div>
        <button
          className="about"
          onClick={goToAbout}>
          <img
            src={aboutpolice}
            alt="about"
          />
        </button>
        <button
          className="toc"
          onClick={goToToc}>
          <img
            src={terms}
            alt="toc"
          />
        </button>
        <button
          className="privacy"
          onClick={goToPrivacy}>
          <img
            src={privacypolicy}
            alt="privacy"
          />
        </button>
      </div>
      <NavBar />
    </div>
  );
};

export default Home;
