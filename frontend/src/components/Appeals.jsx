import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import one from "../assets/appeals/one.png";
import two from "../assets/appeals/two.png";
import three from "../assets/appeals/three.png";
import four from "../assets/appeals/four.png";
import five from "../assets/appeals/five.png";
import six from "../assets/appeals/six.png";

const Appeals = () => {
  return (
    <div>
      <h2>Appeals</h2>
      <hr />
      <div>
        <p>
          Please do not hesitate to call 999 if you have any information on the
          following appeals:
        </p>
        <Link to="/AppealOne">
          <img src={one} />
        </Link>
        <img src={two} />
        <img src={three} />
        <img src={four} />
        <img src={five} />
        <img src={six} />
      </div>
      <Navbar />
    </div>
  );
};

export default Appeals;
