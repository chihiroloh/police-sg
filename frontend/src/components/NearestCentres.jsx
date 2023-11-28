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
      <p>Nearby Police Centres</p>
      <div>
        <p>Sengkang Neighbourhood Police Centre</p>
        <p>2 Sengkang Square 545025</p>
        <p>Operating Hours: 24 Hrs</p>
        <img src={location} />
        <img src={phone} />
      </div>
      <div>
        <p>Hougang Neighbourhood Police Centre </p>
        <p>60 Hougang Avenue 9 538775</p>
        <p>Operating Hours: 24 Hrs</p>
        <img src={location} />
        <img src={phone} />
      </div>
      <div>
        <p>Serangoon North Neighbourhood Police Post</p>
        <p>108 Serangoon North Avenue 1 550108</p>
        <p>Operating Hours: 1200 to 2200 hrs</p>
        <img src={location} />
        <img src={phone} />
      </div>
      <NavBar />
    </div>
  );
};

export default NearestCentres;
