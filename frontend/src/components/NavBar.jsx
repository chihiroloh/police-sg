import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import HomeImage from "../assets/navbar/home.png";
import ContactUsImage from "../assets/navbar/contactus.png";
import AppealsImage from "../assets/navbar/appeals.png";
import NewsImage from "../assets/navbar/news.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/Home">
        <img src={HomeImage} alt="Home" />
      </Link>
      <Link to="/ContactUs">
        <img src={ContactUsImage} alt="Contact Us" />
      </Link>
      <Link to="/Appeals">
        <img src={AppealsImage} alt="Appeals" />
      </Link>
      <Link to="/News">
        <img src={NewsImage} alt="News" />
      </Link>
    </div>
  );
};

export default Navbar;
