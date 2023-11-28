import React, { useEffect, useState, useContext } from "react";
import NavBar from "./NavBar";
import "./CaseStatus.css";
import caseimg from "../assets/casestatus.png";
import { Link } from "react-router-dom";
import UserContext from "../contexts/user";
import ms from "ms";

const CaseStatus = () => {
  const userInfoCtx = useContext(UserContext);
  const [userReports, setUserReports] = useState([]);

  const getReports = async () => {
    try {
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
      setUserReports(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const generateElapsedTime = (item) => {
    const currentDate = new Date();
    const submittedDate = new Date(
      item.updates[item.updates.length - 1].createdAt
    );
    const elapsedTime = ms(currentDate - submittedDate);
    return elapsedTime;
  };

  useEffect(() => {
    getReports();
  }, []);

  return (
    <div className="case-status-container">
      <p className="case-status-header">Case Status</p>
      <hr />
      <img src={caseimg} />
      <p className="case-status-username">{userInfoCtx.userName}</p>
      <p className="case-status-nric">SXXXX567D</p>
      <p className="case-status-police-report">Police Report(s)</p>
      <NavBar />
      {userReports.map((report) => {
        return (
          <div
            key={report._id}
            className="case">
            <div className="case-first-half">
              <p>Police Report Ref: </p>
              <p>{report.refId}</p>
              <p>Police Report Type: </p>
              <p>{report.type}</p>
            </div>
            {report.updates.length > 0 && (
              <p>Branch: {report.updates[report.updates.length - 1].branch}</p>
            )}
            {report.updates.length > 0 && (
              <p>IO: {report.updates[report.updates.length - 1].io}</p>
            )}
            {report.updates.length > 0 && (
              <p>Last Updated: {generateElapsedTime(report)} ago</p>
            )}
            <button>
              <Link
                to="/ViewUpdate"
                state={report}>
                View Update
              </Link>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default CaseStatus;
