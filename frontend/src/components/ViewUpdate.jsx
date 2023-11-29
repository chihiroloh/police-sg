// Case Updates continuation
import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import UserContext from "../contexts/user";
import UpdateCard from "./UpdateCard";
import "./ViewUpdate.css";

const ViewUpdate = () => {
  const userInfoCtx = useContext(UserContext);
  const location = useLocation();
  const report = location.state;
  const [submittedDate, setSubmittedDate] = useState();

  const generateDate = () => {
    const date = new Date(report.submmitedOn);
    const localeDate = date.toLocaleDateString();
    setSubmittedDate(localeDate);
  };

  useEffect(() => {
    generateDate();
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <p className="caseupdate-header">Case Updates</p>
      <hr />
      <div className="updates-container">
        <p className="police-ref">Police Report Ref: {report.refId}</p>
        <div>
          <p className="report-details">Report Details</p>
          <div className="part-one">
            <div className="first-half">
              <b className="submittedby">Submitted by: </b>
              <p className="case-updates-username">{userInfoCtx.userName}</p>
              <b className="submittedon">Submitted on: </b>
              <p className="case-updates-submit-date">{submittedDate}</p>
            </div>
            {report.updates.length > 0 && (
              <div className="second-half">
                <>
                  <b className="handled-by">Handled by: </b>
                  <p className="io-name">
                    IO {report.updates[report.updates.length - 1].io}
                  </p>
                  <b className="police-branch">Police Branch:</b>{" "}
                  <p className="branch-name">
                    {report.updates[report.updates.length - 1].branch}
                  </p>
                </>
              </div>
            )}
            <p className={`report-status ${report.status}`}>{report.status}</p>
          </div>
        </div>
        <p className="all-updates">All Updates</p>
        {report.updates.length > 0 ? (
          report.updates.map((update) => {
            return (
              <div className="update-details">
                <UpdateCard
                  key={update._id}
                  update={update}
                  refId={report.refId}
                />
              </div>
            );
          })
        ) : (
          <p className="no-updates">No current updates</p>
        )}
        <NavBar />
      </div>
    </div>
  );
};

export default ViewUpdate;
