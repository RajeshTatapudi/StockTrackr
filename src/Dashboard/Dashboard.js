import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* <Header /> */}
      <div className="dashboard-layout">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
};

export default Dashboard;
