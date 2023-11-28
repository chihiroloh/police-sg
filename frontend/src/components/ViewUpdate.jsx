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
            <p>
              <b className="submittedby">Submitted by: </b>
              {userInfoCtx.userName}
            </p>
            <p>
              <b className="submittedon">Submitted on: </b>
              {submittedDate}
            </p>
            <p id="report-status">{report.status}</p>

            {report.updates.length > 0 ? (
              <>
                <p>
                  <b className="handledby">Handled by: </b>
                  {report.updates[report.updates.length - 1].io}
                </p>
                <p>
                  <b className="policebranch">Police Branch:</b>{" "}
                  {report.updates[report.updates.length - 1].branch}
                </p>
              </>
            ) : (
              <p>No updates currently</p>
            )}
          </div>
        </div>
        <p className="all-updates">All Updates</p>
        <div className="update-details">
          {report.updates.length > 0 ? (
            report.updates.map((update) => {
              return (
                <UpdateCard
                  key={update._id}
                  update={update}
                  refId={report.refId}
                />
              );
            })
          ) : (
            <p>No Updates</p>
          )}
        </div>
        <NavBar />
      </div>
    </div>
  );
};

export default ViewUpdate;
