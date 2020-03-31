import React, { useState } from "react";

import "./../style/App.scss";
import Sidebar from "./Sidebar";
import MainScreen from "../pages/MainScreen";
import { AuthenProvider } from "../store/AuthenContext";

function App() {
  const [authen, setAuthen] = useState({});
  return (
    <AuthenProvider value={[authen, setAuthen]}>
      <div className="operation-kline">
        <nav className="navbar top-bar">
          <a className="navbar-brand" href="/">
          </a>
        </nav>
        <div className="main-dashboard">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="main-screen">
            <MainScreen />
          </div>
        </div>
      </div>
    </AuthenProvider>
  );
}

export default App;
