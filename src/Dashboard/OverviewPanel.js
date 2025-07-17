import React from "react";
import "./OverviewPanel.css";

const OverviewPanel = () => {
  return (
    <div className="overview-panel">
      <div className="card">
        <h3>Total Portfolio Value</h3>
        <p>$50,000</p>
      </div>
      <div className="card">
        <h3>Today's Gain/Loss</h3>
        <p style={{ color: "green" }}>+3.5%</p>
      </div>
      <div className="card">
        <h3>Top Performing Stock</h3>
        <p>TSLA: +5.2%</p>
      </div>
    </div>
  );
};

export default OverviewPanel;
