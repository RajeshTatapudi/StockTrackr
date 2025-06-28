import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Smart Stock Tracker</div>
      <div className="header-right">
        <input type="text" placeholder="Search stocks..." className="search-bar" />
        <div className="user-profile">
          <img src="https://via.placeholder.com/40" alt="User" className="profile-pic" />
          <span className="user-name">John Doe</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
