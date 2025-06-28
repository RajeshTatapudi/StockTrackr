import React from "react";
import "./RecentTransactions.css";

const transactions = [
  { stock: "AAPL", type: "Buy", quantity: 10, price: 150, date: "2025-01-01" },
  { stock: "TSLA", type: "Sell", quantity: 5, price: 620, date: "2025-01-02" },
  { stock: "MSFT", type: "Buy", quantity: 8, price: 330, date: "2025-01-03" },
];

const RecentTransactions = () => {
  return (
    <div className="recent-transactions">
      <h3>Recent Transactions</h3>
      <table>
        <thead>
          <tr>
            <th>Stock</th>
            <th>Type</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.stock}</td>
              <td className={transaction.type.toLowerCase()}>{transaction.type}</td>
              <td>{transaction.quantity}</td>
              <td>${transaction.price}</td>
              <td>{transaction.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentTransactions;
