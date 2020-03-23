import React from "react";

import "./../style/App.scss";
import Sidebar from "./Sidebar";
import MainScreen from "../screen/MainScreen";
import { AuthenProvider } from "../store/AuthenContext";

function App() {
  return (
    <AuthenProvider>
      <div className="operation-kline">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main-screen">
          <MainScreen />
        </div>
      </div>
    </AuthenProvider>
  );
}

export default App;
