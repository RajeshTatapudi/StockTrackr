import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./StockPerformanceChart.css";

const data = [
  { name: "Jan", price: 100 },
  { name: "Feb", price: 120 },
  { name: "Mar", price: 150 },
  { name: "Apr", price: 140 },
  { name: "May", price: 160 },
  { name: "Jun", price: 170 },
  { name: "Jul", price: 180 },
];

const StockPerformanceChart = () => {
  return (
    <div className="stock-performance-chart">
      <h3>Stock Performance</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StockPerformanceChart;
