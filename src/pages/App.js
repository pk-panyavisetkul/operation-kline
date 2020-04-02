import React, { useState } from "react";

import "./../style/App.scss";
import Sidebar from "../component/Sidebar";
import MainScreen from "./MainScreen";
import { AuthenProvider } from "../store/AuthenContext";
import { ParameterProvider } from '../store/ParameterContext';

function App() {
  const [authen, setAuthen] = useState({});
  const [showNavbar, setShowNavbar] = useState(true);
  return (
    <AuthenProvider value={[authen, setAuthen]}>
      <div className="operation-kline">
        <div className="sidebar">
          <ParameterProvider value={showNavbar}>
            <Sidebar />
          </ParameterProvider>
        </div>
        <div className="main-dashboard">
          <nav className="navbar navbar-default navbar-light top-bar shadow">
            <button
              onClick={() => setShowNavbar(!showNavbar)}
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
            {/* <span className="navbar-brand"></span> */}
          </nav>
          <div className="main-screen">
            <MainScreen />
          </div>
        </div>
      </div>
    </AuthenProvider>
  );
}

export default App;
