import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [showTutorial, setShowTutorial] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 6; // Total number of tutorial steps

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
    <div>
      {showTutorial && (
        <div className="tutorial-modal">
          <div className="carousel">
            <div className="carousel-item" style={{ display: currentStep === 1 ? 'block' : 'none' }}>
              <h2>Report a Crime</h2>
              <p>Report incidents and provide essential information to the Police in a quick and easy way.</p>
            </div>
            <div className="carousel-item" style={{ display: currentStep === 2 ? 'block' : 'none' }}>
              <h2>Lost and Found</h2>
              <p>Report lost and/or found items to the Police.</p>
            </div>
            <div className="carousel-item" style={{ display: currentStep === 3 ? 'block' : 'none' }}>
              <h2>Status Updates</h2>
              <p>Receive updates on your reported cases.</p>
            </div>
            <div className="carousel-item" style={{ display: currentStep === 4 ? 'block' : 'none' }}>
              <h2>Contact Us</h2>
              <p>React out to the Police directly or locate your nearest Police Centre.</p>
            </div>
            <div className="carousel-item" style={{ display: currentStep === 5 ? 'block' : 'none' }}>
              <h2>Appeals</h2>
              <p>Respond to official requests for public assistance in ongoing police investigations involving missing or deceased person.</p>
            </div>
            <div className="carousel-item" style={{ display: currentStep === 6 ? 'block' : 'none' }}>
              <h2>Latest News</h2>
              <p>Stay updated with the most recent developments and news from the Police.</p>
            </div>
          </div>
          <div className="carousel-controls">
            <button onClick={handlePrevStep} disabled={currentStep === 1}>
              Previous
            </button>
            <span>{currentStep} of {totalSteps}</span>
            <button onClick={handleNextStep} disabled={currentStep === totalSteps}>
              Next
            </button>
          </div>
          <button className="overlay" onClick={() => setShowTutorial(false)}>
            X
          </button>
        </div>
      )}
      {/* Rest of the home page content */}
    </div>
  );
};

export default Home;
