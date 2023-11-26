import React from "react";
import NavBar from "./NavBar";
import mrchin from "../assets/appeals/appealone.png";
import iwitness from "../assets/appeals/iwitness.png";
import appealhotline from "../assets/appeals/appealhotline.png";
import "./AppealOne.css";

const AppealOne = () => {
  return (
    <div className="mrchin">
      <p className="a-header">Appeals</p>
      <hr />
      <div>
        <h3>Appeal for Next-of-Kin: Mr Chin Lai Hin</h3>
        <p>23/10/2023 12:32PM </p>
        <img src={mrchin} />
        <p>
          The Police are appealing for the next-of-kin for Mr Chin Lai Hin to
          come forward.
        </p>
        <p>
          Mr Chin, a former resident of Sunlove Home, passed away at Sengkang
          General Hospital on 8 October 2023.
        </p>
        <p>
          Anyone with information is requested to call the Police hotline at
          1800-255-000 or submit information online or through the Police@SG
          app. All information wil be kept strictly confidential.
        </p>
      </div>
      {/* Stretch Goal */}
      <div className="appeals-buttons">
        <img src={iwitness} />
        <img src={appealhotline} />
      </div>
      <NavBar />
    </div>
  );
};

export default AppealOne;
