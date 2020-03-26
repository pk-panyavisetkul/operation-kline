import React from "react";

import { BrowserRouter, Link } from "react-router-dom";

import "./../style/Sidebar.scss";

function Sidebar() {
  return (
    <nav className="navbar navbar-default navbar-expand-lg navbar-light navbar-left">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <BrowserRouter basename="/" forceRefresh={true}>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ViewApplicationList">
                View Application List
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ViewApplicationDetail">
                View Application Detail
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/InputEstimateIncome">
                Input Estimate Income
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/UploadStatement">
                Upload Statement
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/SendNotificationToCustomer">
                Send Notification To Customer
              </Link>
            </li>
          </ul>
        </BrowserRouter>
      </div>
    </nav>
  );
}

export default Sidebar;
