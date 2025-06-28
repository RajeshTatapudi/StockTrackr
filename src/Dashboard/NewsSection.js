import React from "react";
import "./NewsSection.css";

const news = [
  { title: "S&P 500 Gains 1% Amid Positive Economic Data", url: "#" },
  { title: "Tesla Faces Challenges as Stock Dips 3%", url: "#" },
  { title: "Apple Announces Quarterly Earnings Exceeding Expectations", url: "#" },
  { title: "Federal Reserve Signals Possible Rate Cut", url: "#" },
];

const NewsSection = () => {
  return (
    <div className="news-section">
      <h3>Market News</h3>
      <ul>
        {news.map((article, index) => (
          <li key={index}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsSection;
