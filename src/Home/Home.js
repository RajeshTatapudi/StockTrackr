import React from "react";
import "./Home.css";

const HomeScreen = () => {
  const topStocks = [
    {
      id: "1",
      ticker: "AAPL",
      price: "$145.32",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Apple_logo_hollow.svg/859px-Apple_logo_hollow.svg.png", // Apple logo
    },
    {
      id: "2",
      ticker: "TSLA",
      price: "$752.19",
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png", // Tesla logo
    },
    {
      id: "3",
      ticker: "GOOGL",
      price: "$2803.55",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", // Google logo
    },
  ];

  const newsUpdates = [
    { id: "1", title: "Market hits new highs!", description: "The S&P 500 rises by 2% today." },
    { id: "2", title: "TSLA announces record profits", description: "Tesla exceeds quarterly revenue expectations." },
    { id: "3", title: "GOOGL launches new AI", description: "Google's latest AI technology is a game-changer." },
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="hero-section">
        <h1 className="hero-title">Your Ultimate Stock Analysis Platform</h1>
        <div className="hero-content">
          {/* Top Stocks Ticker */}
          <div className="stock-ticker">
            {topStocks.map((stock) => (
              <span key={stock.id} className="ticker-item">
                <img src={stock.logo} alt={`${stock.ticker} logo`} className="stock-logo" />
                {stock.price}
              </span>
            ))}
          </div>

          {/* Search Bar beside the Top Stocks */}
          <section className="search-section">
            <input
              type="text"
              className="search-bar"
              placeholder="Search for stocks, indices, or ETFs..."
            />
          </section>
        </div>
      </header>

      {/* Top 3 Stocks Section */}
      <section className="top-stocks-section">
        <h2>Top Gainers</h2>
        <div className="top-stocks-list">
          {topStocks.map((stock) => (
            <div key={stock.id} className="stock-card">
              <div className="stock-header">
                <img src={stock.logo} alt={`${stock.ticker} logo`} className="stock-logo" />
                <h3 className="stock-ticker">{stock.ticker}</h3>
              </div>
              <p className="stock-price">{stock.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* News Section */}
      <section className="news-section">
        <h2>Market News</h2>
        <div className="news-list">
          {newsUpdates.map((news) => (
            <div key={news.id} className="news-card">
              <h3 className="news-title">{news.title}</h3>
              <p className="news-description">{news.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;
