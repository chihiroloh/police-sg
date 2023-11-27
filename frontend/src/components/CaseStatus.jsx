import React, { useEffect, useState, useContext } from "react";
import NavBar from "./NavBar";
import "./CaseStatus.css";
import caseimg from "../assets/casestatus.png";
import { Link } from "react-router-dom";
import UserContext from "../contexts/user";

const CaseStatus = () => {
  const userInfoCtx = useContext(UserContext);
  const [userReports, setUserReports] = useState([]);

  const getReport = async () => {
    try {
      console.log(userInfoCtx.userId);
      console.log(userInfoCtx.accessToken);
      const res = await fetch(
        import.meta.env.VITE_SERVER + "/api/reports/" + userInfoCtx.userId,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + userInfoCtx.accessToken,
          },
        }
      );
      const data = await res.json();
      console.log(data);
      setUserReports(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getReport();
  }, []);

  return (
    <div>
      <p>Case Status</p>
      <hr />
      <img src={caseimg} />
      <p>{userInfoCtx.userName}</p>
      <p>SXXXX567D</p>
      <p>Police Report(s)</p>
      <NavBar />
      <div className="report">
        <p>Police Report Ref: {userReports[0].refId}</p>
        <p>Police Report Type:{}</p>
        <p>Branch:</p>
        <p>IO:</p>
        <p>Last Updated:</p>
        <button>
          <Link to="/ViewUpdate">View Update</Link>
        </button>
      </div>
    </div>
  );
};

export default CaseStatus;
