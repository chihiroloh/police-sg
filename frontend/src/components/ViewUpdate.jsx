// Case Updates continuation
import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import UserContext from "../contexts/user";
import UpdateCard from "./UpdateCard";

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
      <p>Case Updates</p>
      <hr />
      <h2>Police Report Ref: {report.refId}</h2>
      <div>
        <h2>Report Details</h2>
        <p>Submitted by: {userInfoCtx.userName}</p>
        <p>Submitted on: {submittedDate}</p>
        <div>
          <p id="report-status">{report.status}</p>
        </div>
        {report.updates.length > 0 ? (
          <>
            <p>Handled by: {report.updates[report.updates.length - 1].io}</p>
            <p>
              Police Branch: {report.updates[report.updates.length - 1].branch}
            </p>
          </>
        ) : (
          <p>No updates currently</p>
        )}
      </div>
      <h2>All Updates</h2>
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

      <NavBar />
    </div>
  );
};

export default ViewUpdate;
