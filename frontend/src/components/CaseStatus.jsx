import React from "react";
import NavBar from "./NavBar";
import "./CaseStatus.css";
import caseimg from "../assets/casestatus.png";
import { Link } from "react-router-dom";
const CaseStatus = () => {
  return (
    <div>
      <p>Case Status</p>
      <hr />
      <img src={caseimg} />
      <p>Hillary Ho Hui Hui</p>
      <p>SXXXX567D</p>
      <p>Police Report(s)</p>
      <NavBar />
      <div className="report">
        <p>Police Report Ref: </p>
        <p>Police Report Type:</p>
        <p>Branch:</p>
        <p>IO:</p>
        <p>Last Updated:</p>
        <button>
          <Link to="/ViewUpdate">View Update</Link>
        </button>
      </div>
    </div>
  );
};

export default CaseStatus;
