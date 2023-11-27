import React, { useEffect, useState, useContext } from "react";
import UserContext from "../contexts/user";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import "./Appeals.css";

const Appeals = () => {
  const userInfoCtx = useContext(UserContext);
  const [appeals, setAppeals] = useState([]);
  const navigate = useNavigate();

  const getAppealCase = async () => {
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
      console.error(error.message);
    }
  };

  useEffect(() => {
    getAppealCase();
  }, []);

  const handleAppealClick = () => {
    navigate("/AppealOne");
  };

  return (
    <div>
      <p className="appeals-header">Appeals</p>
      <hr />
      <p className="appeals-text">
        Please do not hesitate to call 999 if you have any information on the
        following appeals:
      </p>
      <div className="appeal-list">
        {appeals.map((appeal) => (
          <div
            key={appeal._id}
            className="appeal-item"
            onClick={handleAppealClick}
          >
            <img src={appeal.imageURL} alt={appeal.name} />
            <h2>{appeal.name}</h2>
            <p>Type: {appeal.type}</p>
          </div>
        ))}
      </div>
      <NavBar />
    </div>
  );
};

export default Appeals;
