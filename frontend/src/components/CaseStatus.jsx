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
  const [elapsedTime, setElapsedTime] = useState();

  const getReport = async () => {
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

      const currentDate = new Date();
      const submittedDate = new Date(userReports[0].updates[0].createdAt);
      const timeDiff = ms(currentDate - submittedDate);
      setElapsedTime(timeDiff);
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
        {userReports.map((report) => {
          return (
            <div key={report._id}>
              <p>Police Report Ref: {report.refId}</p>
              <p>Police Report Type: {report.type}</p>
              {report.updates.length > 0 && (
                <p>
                  Branch: {report.updates[report.updates.length - 1].branch}
                </p>
              )}
              {report.updates.length > 0 && (
                <p>IO: {report.updates[report.updates.length - 1].io}</p>
              )}
              {report.updates.length > 0 && (
                <p>Last Updated: {elapsedTime} ago</p>
              )}
              {report.updates.length > 0 && (
                <button>
                  <Link to="/ViewUpdate">View Update</Link>
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CaseStatus;
