import React, { useEffect, useState, useContext } from "react";
import NavBar from "./NavBar";
import "./CaseStatus.css";
import caseimg from "../assets/casestatus.png";
import { Link } from "react-router-dom";
import UserContext from "../contexts/user";
import ms from "ms";
import io from "../assets/io.png";
import pin from "../assets/pin.png";

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
    window.scrollTo(0, 0);
    getReports();
  }, []);

  return (
    <div className="case-status-container">
      <p className="case-status-header">Case Status</p>
      <hr />
      <div className="container">
        <img
          className="caseimg"
          src={caseimg}
        />
        <p className="case-status-username">{userInfoCtx.userName}</p>
        <p className="case-status-nric">SXXXX567D</p>
        <p className="case-status-police-report">Police Report(s)</p>
        <NavBar />
        {userReports.length > 0 ? (
          userReports.map((report) => {
            return (
              <div
                key={report._id}
                className="case">
                <div className="case-first-half">
                  <div className="redid">
                    <p className="ref">Police Report Ref: </p>
                    <p>{report.refId}</p>
                  </div>
                  <div className="reporttype">
                    <p className="type">Police Report Type: </p>
                    <p>{report.type}</p>
                  </div>
                </div>
                <div className="pinandio">
                  {report.updates.length > 0 && (
                    <div className="update1">
                      <p className="case-status-branch">
                        <img
                          className="pin"
                          src={pin}
                          alt="Pin icon"
                        />
                        {report.updates[report.updates.length - 1].branch}
                      </p>
                    </div>
                  )}
                  {report.updates.length > 0 && (
                    <div className="update2">
                      <p>
                        <img
                          className="io"
                          src={io}
                          alt="IO icon"
                        />
                        Investigation Officer{" "}
                        {report.updates[report.updates.length - 1].io}
                      </p>
                    </div>
                  )}
                </div>

                {report.updates.length > 0 && (
                  <p className="lastupdate">
                    Last Updated: {generateElapsedTime(report)} ago
                  </p>
                )}
                <Link
                  to="/ViewUpdate"
                  state={report}>
                  <button className="viewupdate">
                    <p className="view">View Update</p>
                  </button>
                </Link>
              </div>
            );
          })
        ) : (
          <p className="no-reports">No reports</p>
        )}
      </div>
    </div>
  );
};

export default CaseStatus;
