import React, { useContext } from "react";

import { BrowserRouter, Link } from "react-router-dom";
import { Icon, AppProvider } from "@shopify/polaris";
import { HomeMajorMonotone, ListMajorMonotone, BalanceMajorMonotone, TimelineAttachmentMajorMonotone, SendMajorMonotone } from "@shopify/polaris-icons";

import "./../style/Sidebar.scss";
import ParameterContext from '../store/ParameterContext';

function Sidebar(props) {

  // eslint-disable-next-line
  const showNavbar = useContext(ParameterContext);
  
  return (
    <nav className="navbar navbar-default navbar-light navbar-left">
      <span className={showNavbar ? "navbar-brand" : "navbar-brand-logo"}></span>
      <div className="collapse navbar-collapse show" id="navbarSupportedContent">
        <AppProvider>
          <BrowserRouter basename="/" forceRefresh={true}>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <Icon source={HomeMajorMonotone} color="#eaeaea" />
                  <span className="nav-menu-name">Home <span className="sr-only">(current)</span></span>
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  <Icon source={ProfileMajorMonotone} color="#eaeaea" />
                  <span className="nav-menu-name">Profile</span>
                </Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/ViewApplicationList">
                  <Icon source={ListMajorMonotone} color="#eaeaea" />
                  <span className="nav-menu-name">View Application List</span>
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/ViewApplicationDetail">
                  <Icon source={NoteMajorMonotone} color="#eaeaea" />
                  <span className="nav-menu-name">View Application Detail</span>
                </Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/InputEstimateIncome">
                  <Icon source={BalanceMajorMonotone} color="#eaeaea" />
                  <span className="nav-menu-name">Input Estimate Income</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ViewStatement">
                  <Icon source={TimelineAttachmentMajorMonotone} color="#eaeaea" />
                  <span className="nav-menu-name">View Statement</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/SendNotificationToCustomer">
                  <Icon source={SendMajorMonotone} color="#eaeaea" />
                  <span className="nav-menu-name">Send Notification To Customer</span>
                </Link>
              </li>
            </ul>
          </BrowserRouter>
        </AppProvider>
      </div>
    </nav>
  );
}

export default Sidebar;
