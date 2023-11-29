// Join the team

import React from "react";
import jointheteam from "../assets/jointheteam.png";
import NavBar from "./NavBar";
import "./Cop.css";

const Cop = () => {
  return (
    <div className="join">
      <p className="cop-header">Citizens On Patrol</p>
      <hr />
      <img src={jointheteam} alt="jointheteam" />
      <div>
        <h3>About COP</h3>
        <p>
          The Citizens On Patrol (COP) scheme was started in 1999 and has grown
          to be a sizable force. It was launched to enable patrols by the
          community to alert the Police when they observe suspicious activities
          or persons and engage the community on crime prevention measures.
        </p>
        <h3>Role and Responsibilities</h3>
        <p>
          COP members will be attached to one of the Neighbourhood Police
          Centres (NPCs) and be required to serve a minimum of 2 hours of patrol
          per month. They patrol the neighbourhood, disseminate crime prevention
          advisories and report to the Police on suspicious persons or crime in
          progress.
        </p>
        <h3>Entry and Requirements</h3>
        <p>
          Nationality: Singapore Citizen or Permanent Resident Age: 17–79 years
          old
        </p>
        <h3>Training Requirements</h3>
        <p>
          COP members undergo 1.5 days of modular training on basic crime
          prevention, SGSecure and Community Emergency Preparedness.
        </p>
      </div>
      <NavBar />
    </div>
  );
};

export default Cop;
