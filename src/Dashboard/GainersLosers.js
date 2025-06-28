import React from "react";
import "./GainersLosers.css";

const gainers = [
  { name: "AAPL", price: 150, change: "+2.5%" },
  { name: "MSFT", price: 330, change: "+1.8%" },
];

const losers = [
  { name: "TSLA", price: 600, change: "-3.2%" },
  { name: "AMZN", price: 120, change: "-1.5%" },
];

const GainersLosers = () => {
  return (
    <div className="gainers-losers">
      <h3>Top Gainers & Losers</h3>
      <div className="list-container">
        <div className="gainers">
          <h4>Gainers</h4>
          <ul>
            {gainers.map((stock, i) => (
              <li key={i}>
                <span>{stock.name}</span>
                <span>{stock.price}</span>
                <span className="positive">{stock.change}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="losers">
          <h4>Losers</h4>
          <ul>
            {losers.map((stock, i) => (
              <li key={i}>
                <span>{stock.name}</span>
                <span>{stock.price}</span>
                <span className="negative">{stock.change}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GainersLosers;
