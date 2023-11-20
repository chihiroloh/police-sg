import React from 'react';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="app-container">
      <div className="status-bar">
        <span className="time">12:00</span>
        <span className="battery">🔋</span>
      </div>
      <div className="page-content">{children}</div>
    </div>
  );
};

export default Layout;
