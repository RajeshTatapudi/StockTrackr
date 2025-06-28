import React from "react";
import "./MarketSummary.css";

const marketData = [
  { name: "S&P 500", value: 4200, change: "+0.5%" },
  { name: "NASDAQ", value: 13000, change: "-0.3%" },
  { name: "Dow Jones", value: 34000, change: "+0.2%" },
];

const MarketSummary = () => {
  return (
    <div className="market-summary">
      <h3>Market Summary</h3>
      <ul>
        {marketData.map((index, i) => (
          <li key={i}>
            <span>{index.name}</span>
            <span>{index.value}</span>
            <span className={index.change.startsWith("+") ? "positive" : "negative"}>
              {index.change}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MarketSummary;
