// Case Updates continuation
import React, { useContext } from "react";
import NavBar from "./NavBar";
import UserContext from "../contexts/user";

const ViewUpdate = () => {
  const userInfoCtx = useContext(UserContext);
  console.log(userInfoCtx);
  return (
    <div>
      <p>Case Updates</p>
      <hr />
      <h2>Police Report Ref:{}</h2>
      <div>
        <h2>Report Details</h2>
        <p>Submitted by:{userInfoCtx.userName}</p>
        <p>Submitted on:</p>
        <p>Handled by:</p>
        <p>Police Branch:</p>
      </div>
      <div>
        <p>
          Your case (Report Ref: {}) has been transferred to {}and will be
          handled by {}
          <p></p>
        </p>
      </div>
      <NavBar />
    </div>
  );
};

export default ViewUpdate;
