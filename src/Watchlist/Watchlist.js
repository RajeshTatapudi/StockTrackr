import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Watchlist.css";

const API_BASE_URL = "http://192.168.20.57:5000"; // Update with your backend URL

const Watchlist = () => {
  const [stocks, setStocks] = useState([]);
  const [newStock, setNewStock] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [stocksPerPage] = useState(5);

  const [editTicker, setEditTicker] = useState(null);
  const [editStock, setEditStock] = useState({});

  // Fetch stocks from backend
  const fetchStocks = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/stocks`);
      setStocks(response.data);
    } catch (error) {
      console.error("Error fetching stocks:", error);
    }
  };

  useEffect(() => {
    fetchStocks();
  }, []);

  // Add stock
  const handleAddStock = async () => {
    if (newStock.trim() !== "" && newCategory.trim() !== "") {
      const newStockData = {
        name: newStock,
        ticker: newStock.toUpperCase(),
        price: (Math.random() * 1000).toFixed(2),
        category: newCategory,
        change: 0,
        favorite: false,
      };
      try {
        await axios.post(`${API_BASE_URL}/stocks`, newStockData);
        setStocks([...stocks, newStockData]);
        setNewStock("");
        setNewCategory("");
      } catch (error) {
        console.error("Error adding stock:", error);
      }
    }
  };

  // Remove stock
  const handleRemoveStock = async (ticker) => {
    try {
      await axios.delete(`${API_BASE_URL}/stocks/${ticker}`);
      setStocks(stocks.filter((stock) => stock.ticker !== ticker));
    } catch (error) {
      console.error("Error removing stock:", error);
    }
  };

  // Toggle favorite
  const toggleFavorite = async (ticker) => {
    const updatedStocks = stocks.map((stock) =>
      stock.ticker === ticker ? { ...stock, favorite: !stock.favorite } : stock
    );
    setStocks(updatedStocks);
    try {
      const updatedStock = updatedStocks.find((stock) => stock.ticker === ticker);
      await axios.put(`${API_BASE_URL}/stocks/${ticker}`, updatedStock);
    } catch (error) {
      console.error("Error updating favorite status:", error);
    }
  };

  // Edit stock
  const handleEdit = (stock) => {
    setEditTicker(stock.ticker);
    setEditStock(stock);
  };

  // Save updated stock
  const handleSave = async () => {
    try {
      await axios.put(`${API_BASE_URL}/stocks/${editTicker}`, editStock);
      setStocks((prevStocks) =>
        prevStocks.map((stock) =>
          stock.ticker === editTicker ? editStock : stock
        )
      );
      setEditTicker(null);
    } catch (error) {
      console.error("Error saving stock:", error);
    }
  };

  // Cancel editing
  const handleCancelEdit = () => {
    setEditTicker(null);
    setEditStock({});
  };

  // Handle input changes for editing
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditStock((prev) => ({ ...prev, [name]: value }));
  };

  // Sorting
  const sortedStocks = [...stocks].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "ticker") return a.ticker.localeCompare(b.ticker);
    if (sortBy === "price") return b.price - a.price;
    return 0;
  });

  // Filtering
  const filteredStocks = sortedStocks.filter((stock) => {
    return (
      stock.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (filterCategory === "" || stock.category === filterCategory)
    );
  });

  // Pagination
  const indexOfLastStock = currentPage * stocksPerPage;
  const indexOfFirstStock = indexOfLastStock - stocksPerPage;
  const currentStocks = filteredStocks.slice(indexOfFirstStock, indexOfLastStock);

  const totalPages = Math.ceil(filteredStocks.length / stocksPerPage);

  return (
    <div className="watchlist">
      <h2>My Watchlist</h2>

      {/* Add Stock Form */}
      <div className="watchlist-form">
        <input
          type="text"
          placeholder="Stock name or ticker"
          value={newStock}
          onChange={(e) => setNewStock(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category (e.g., Tech, Energy)"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <button onClick={handleAddStock}>Add Stock</button>
      </div>

      {/* Search and Filter */}
      <div className="search-filter">
        <input
          type="text"
          placeholder="Search stocks..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {[...new Set(stocks.map((stock) => stock.category))].map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Sorting Options */}
      <div className="sorting-options">
        <label>Sort by: </label>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="">None</option>
          <option value="name">Name</option>
          <option value="ticker">Ticker</option>
          <option value="price">Price</option>
        </select>
      </div>

      {/* Stock List */}
      <ul className="watchlist-items">
        {currentStocks.map((stock) => (
          <li key={stock.ticker} className="watchlist-item">
            {editTicker === stock.ticker ? (
              <div className="edit-mode">
                <input
                  type="text"
                  name="name"
                  value={editStock.name}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="price"
                  value={editStock.price}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="category"
                  value={editStock.category}
                  onChange={handleInputChange}
                />
                <button onClick={handleSave}>Save</button>
                <button onClick={handleCancelEdit}>Cancel</button>
              </div>
            ) : (
              <div className="stock-details">
                <span
                  className={`favorite-icon ${stock.favorite ? "favorited" : ""}`}
                  onClick={() => toggleFavorite(stock.ticker)}
                >
                  ★
                </span>
                <span className="stock-name">{stock.name}</span>
                <span className="stock-ticker">({stock.ticker})</span>
                <span className="stock-price">${stock.price}</span>
                <span className="stock-category">{stock.category}</span>
              </div>
            )}
            {editTicker !== stock.ticker && (
              <button className="edit-btn" onClick={() => handleEdit(stock)}>Edit</button>
            )}

            <button className="remove-stock-btn" onClick={() => handleRemoveStock(stock.ticker)}>
              Remove
            </button>
          </li>
        ))}
      </ul>

      {/* Pagination */}
      <div className="pagination">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={currentPage === index + 1 ? "active" : ""}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Watchlist;
