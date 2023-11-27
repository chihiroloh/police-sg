import React from "react";
import NavBar from "./NavBar";

const ViewUpdate = () => {
  return (
    <div>
      <p>Case Updates</p>
      <hr />
      <h2>Police Report Ref:{}</h2>
      <div>
        <h2>Report Details</h2>
        <p>Submitted by:{}</p>
        <p>Submitted on:</p>
        <p>Handled by:</p>
        <p>Police Branch:</p>
      </div>
      <div>
        <p>
          Your case (Report Ref: {}) has been transferred to {}and will be
          handled by {}
        </p>
      </div>
      <NavBar />
    </div>
  );
};

export default ViewUpdate;
