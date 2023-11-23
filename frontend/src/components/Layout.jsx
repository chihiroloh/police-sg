import React from "react";
import "./Layout.css";
import statusbar from "../assets/statusbar.jpg";

const Layout = ({ children }) => {
  return (
    <div className="iphone-container">
      <img src={statusbar} alt="statusbar"></img>
      <div className="page-content">{children}</div>
    </div>
  );
};

export default Layout;
