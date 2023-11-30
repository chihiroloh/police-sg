import React, { useEffect, useState, useContext } from "react";
import UserContext from "../contexts/user";
import { Link } from "react-router-dom";
import "./AppealOne.css";
import NavBar from "./NavBar";
import eye from "../assets/Eye.png";
import call from "../assets/Call.png";

const AppealOne = () => {
  const userInfoCtx = useContext(UserContext);
  const [appeals, setAppeals] = useState([]);

  const getAppeals = async () => {
    try {
      const res = await fetch(import.meta.env.VITE_SERVER + "/api/appeals", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + userInfoCtx.accessToken,
        },
      });
      const data = await res.json();
      setAppeals(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getAppeals();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <p className="appealone-header">Appeals</p>
      <hr />
      <div className="appeal-list">
        {appeals.map((appeal) => (
          <div key={appeal._id} className="appeal-item">
            <p className="nextofkin-header">
              <span className="nextofkin">
                <b>Appeal for Next-of-Kin: </b>
              </span>
              <b>{appeal.name}</b>
            </p>
            <p className="appeal-time">
              {new Date(appeal.createdAt).toLocaleString()}
            </p>
            <div className="appeal-des">
              <img
                className="appealone-img"
                src={appeal.imageURL}
                alt="Appeal"
              />
              <div className="nameandtype">
                <p className="tan">{appeal.name}</p>
                <p className="tan-type">Appeal for {appeal.type}</p>
              </div>
            </div>
            <p className="tan-content">{appeal.contents}</p>
          </div>
        ))}
      </div>
      <div className="button-container">
        <Link to="/IWitness">
          <button className="iwitness-button">
            <img src={eye} alt="Eye Icon" className="button-icon" />
            <span className="button-text">i-Witness Report</span>
          </button>
        </Link>

        <button className="appeal-hotline">
          <img src={call} alt="Call Icon" className="button-icon" />
          <span className="button-text">Appeal Hotline</span>
        </button>
      </div>

      <NavBar />
    </div>
  );
};

export default AppealOne;
