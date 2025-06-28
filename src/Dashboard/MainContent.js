import React from "react";
import OverviewPanel from "./OverviewPanel";
import StockPerformanceChart from "./StockPerformanceChart";
import MarketSummary from "./MarketSummary";
import GainersLosers from "./GainersLosers";
import RecentTransactions from "./RecentTransactions";
import NewsSection from "./NewsSection";
import "./MainContent.css";

const MainContent = () => {
  return (
    <main className="main-content">
      <h1>Dashboard</h1>
      <div className="dashboard-grid">
        <section id="gainloss" className="grid-item">
          <GainersLosers />
        </section>
        <section id="stock" className="grid-item">
          <MarketSummary />
        </section>
        <section id="stockp" className="grid-item">
          <StockPerformanceChart />
        </section>
        <section id="recent" className="grid-item">
          <RecentTransactions />
        </section>
        <section id="news" className="grid-item">
          <NewsSection />
        </section>
      </div>
    </main>
  );
};

export default MainContent;
