import React from "react";
import { Link } from "react-router-dom";
import "./ContactUs.css";
import contactus from "../assets/contactus.png";
import Navbar from "./NavBar";

function ContactUs() {
  return (
    <div>
      <p className="contact-header">Contact Us</p>
      <hr />
      <div className="contactus">
        <Link to="/ContactUs">Hotline</Link>
        <Link to="/nearest-centres">Nearest Centres</Link>
      </div>
      <img src={contactus} alt="contactus" />
      <div className="contact-content">
        <h2>999</h2>
        <p>Emergency Hotline</p>
        <h2>71999</h2>
        <p>Emergency SMS</p>
        <h2>1800 255 0000</h2>
        <p>Police Hotline</p>
        <h2>6457 0000</h2>
        <p>Traffic Police Emergency Hotline</p>
        <br />
        <p>In the event of a fire or medical emergency, please dial 995.</p>
      </div>
      <NavBar />
    </div>
  );
}

export default ContactUs;
