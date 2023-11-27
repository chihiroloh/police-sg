import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import "./CaseStatus.css";
import caseimg from "../assets/casestatus.png";

const CaseStatus = () => {
  const [policeReport, setPoliceReport] = useState(null); // State to store police report
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const reportId = "YOUR_REPORT_ID"; // Replace with the actual report ID

    // Make a GET request using the fetch API to fetch the police report by ID
    fetch(`/api/reports/${reportId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setPoliceReport(data); // Set the policeReport state with the fetched data
        setIsLoading(false); // Set loading state to false
      })
      .catch((error) => {
        console.error("Error fetching police report:", error);
        setIsLoading(false); // Set loading state to false even on error
      });
  }, []);

  return (
    <div>
      <p>Case Status</p>
      <hr />

      <img src={caseimg} />
      <h2>Police Report(s)</h2>

      {isLoading ? (
        <p>Loading...</p>
      ) : policeReport ? (
        <div>
          <p>Police Report Ref: {policeReport.RefId}</p>
          <p>Police Report Type: {policeReport.type}</p>
          <p>Branch: {policeReport.updates[0].branch}</p>
          <p>io: {policeReport.updates[0].io}</p>
          <p>
            createdAt:{" "}
            {new Date(policeReport.updates[0].createdAt).toLocaleString()}
          </p>
        </div>
      ) : (
        <p>No police report found</p>
      )}

      <NavBar />
    </div>
  );
};

export default CaseStatus;
