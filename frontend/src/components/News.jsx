import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import "./News.css";

const News = () => {
  return (
    <div>
      <p className="news-header">Latest News</p>
      <div>
        <hr />
        <h2 className="news-today">Today</h2>
        <div className="news-container">
          <Link to="/NewsContent">
            <p className="news-text">
              124 persons investigated in latest unlicensed moneylending
              suppression operation
            </p>
            <div className="news-status">
              <p>2h ago</p>
              <p>12:32PM</p>
            </div>
          </Link>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default News;
