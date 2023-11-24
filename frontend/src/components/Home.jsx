import React, { useState } from "react";
import "./Home.css";
// import ReactDOM from "react-dom";
import reportcrime from "../assets/tutorial/reportcrime.png";
import lostandfound from "../assets/tutorial/lostandfound.png";
import casestatus from "../assets/tutorial/casestatus.png";
import contact from "../assets/tutorial/contact.png";
import appeals from "../assets/tutorial/appeals.png";
import news from "../assets/tutorial/news.png";
import ReportACrime from "./ReportACrime";

const Home = () => {
  const [showTutorial, setShowTutorial] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 6;

  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="homepage">
      {showTutorial && (
        <div className="tutorial-modal">
          <div className="carousel">
            <h2>Tutorial Overview</h2>
            <hr />
            <div
              className="carousel-item"
              style={{ display: currentStep === 1 ? "block" : "none" }}
            >
              <img src={reportcrime} alt="reportcrime"></img>
              <h2>Report a Crime</h2>
              <p>
                Report incidents and provide essential information to the Police
                in a quick and easy way.
              </p>
            </div>
            <div
              className="carousel-item"
              style={{ display: currentStep === 2 ? "block" : "none" }}
            >
              <img src={lostandfound} alt="lostandfound"></img>

              <h2>Lost and Found</h2>
              <p>Report lost and/or found items to the Police.</p>
            </div>
            <div
              className="carousel-item"
              style={{ display: currentStep === 3 ? "block" : "none" }}
            >
              <img src={casestatus} alt="casestatus"></img>
              <h2>Status Updates</h2>
              <p>Receive updates on your reported cases.</p>
            </div>
            <div
              className="carousel-item"
              style={{ display: currentStep === 4 ? "block" : "none" }}
            >
              <img src={contact} alt="contact"></img>

              <h2>Contact Us</h2>
              <p>
                React out to the Police directly or locate your nearest Police
                Centre.
              </p>
            </div>
            <div
              className="carousel-item"
              style={{ display: currentStep === 5 ? "block" : "none" }}
            >
              <img src={appeals} alt="appeals"></img>

              <h2>Appeals</h2>
              <p>
                Respond to official requests for public assistance in ongoing
                police investigations involving missing or deceased person.
              </p>
            </div>
            <div
              className="carousel-item"
              style={{ display: currentStep === 6 ? "block" : "none" }}
            >
              <img src={news} alt="news"></img>
              <h2>Latest News</h2>
              <p>
                Stay updated with the most recent developments and news from the
                Police.
              </p>
            </div>
          </div>
          <div className="carousel-controls">
            <button onClick={handlePrevStep} disabled={currentStep === 1}>
              Previous
            </button>
            <span>
              {currentStep} of {totalSteps}
            </span>
            <button
              onClick={handleNextStep}
              disabled={currentStep === totalSteps}
            >
              Next
            </button>
          </div>
          <button className="overlay" onClick={() => setShowTutorial(false)}>
            X
          </button>
        </div>
      )}
      {/* Rest of the home page content */}
      <ReportACrime />
    </div>
  );
};

export default Home;
