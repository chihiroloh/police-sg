import React, { useEffect, useState, useContext } from "react";
import UserContext from "../contexts/user";
import { Link } from "react-router-dom";
import "./AppealOne.css";
import NavBar from "./NavBar";
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
  }, []);

  return (
    <div>
      <h2>Appeal for Lost Dog</h2>
      <hr />
      <div className="appeal-list">
        {appeals.map((appeal) => (
          <div key={appeal._id} className="appeal-item">
            <p>Created At: {new Date(appeal.createdAt).toLocaleString()}</p>
            <img src={appeal.imageURL} alt="Appeal" />
            <h2>{appeal.name}</h2>
            <p>Type: {appeal.type}</p>
            <p>Contents: {appeal.contents}</p>
          </div>
        ))}
      </div>
      <Link to="/IWitness">
        <button>i-Witness Report</button>
      </Link>
      <button>Appeal Hotline</button>
      <NavBar />
    </div>
  );
};

export default AppealOne;
