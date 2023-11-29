import React from "react";
import "./NearestCentres.css";
import maps from "../assets/maps.png";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import location from "../assets/location.png";
import phone from "../assets/phone.png";

const NearestCentres = () => {
  return (
    <div>
      <p className="contact-header">Contact Us</p>
      <hr />
      <div className="contactus">
        <Link to="/ContactUs">Hotline</Link>
        <Link to="/NearestCentres">Nearest Centres</Link>
      </div>
      <img src={maps} />
      <div className="maps-nearby">
        <p className="nearby">Nearby Police Centres</p>
        <div className="icon-container-one">
          <div className="sn-one">
            <p className="s">Sengkang Neighbourhood Police Centre</p>
            <span className="icons-one">
              <img src={location} />
              <img src={phone} />
            </span>
          </div>
          <p className="s-ad">2 Sengkang Square 545025</p>
          <p className="s-time">Operating Hours: 24 Hrs</p>
        </div>
        <div className="icon-container-two">
          <div className="sn-two">
            <p className="h">Hougang Neighbourhood Police Centre</p>
            <span className="icons-two">
              <img src={location} />
              <img src={phone} />
            </span>
          </div>
          <p className="h-ad">60 Hougang Avenue 9 538775</p>
          <p className="h-time">Operating Hours: 24 Hrs</p>
        </div>
        <div className="icon-container-three">
          <div className="sn-three">
            <p className="sn">Serangoon North Neighbourhood Police Post</p>
            <span className="icons-three">
              <img src={location} />
              <img src={phone} />
            </span>
          </div>
          <p className="sn-ad">108 Serangoon North Avenue 1 550108</p>
          <p className="sn-time">Operating Hours: 1200 to 2200 hrs</p>
        </div>
      </div>
      <NavBar />
    </div>
  );
};

export default NearestCentres;
