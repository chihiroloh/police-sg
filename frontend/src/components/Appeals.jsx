import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import one from "../assets/appeals/one.png";
import two from "../assets/appeals/two.png";
import three from "../assets/appeals/three.png";
import four from "../assets/appeals/four.png";
import five from "../assets/appeals/five.png";
import six from "../assets/appeals/six.png";
import "./Appeals.css";

const Appeals = () => {
  return (
    <div>
      <p className="appeals-header">Appeals</p>
      <hr />
      <div>
        <p className="appeals-text">
          Please do not hesitate to call 999 if you have any information on the
          following appeals:
        </p>
        <div className="people">
          <Link to="/AppealOne">
            <img src={one} />
          </Link>
          <img src={two} />
          <img src={three} />
          <img src={four} />
          <img src={five} />
          <img src={six} />
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Appeals;
