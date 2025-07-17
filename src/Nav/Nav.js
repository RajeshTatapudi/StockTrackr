import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

// Import FontAwesome Icon library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faBars } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Toggle menu visibility for mobile view
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu and dropdown after link click
  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(false); // Close the dropdown as well
  };

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      {/* Left Section: Hamburger Menu Icon */}
      <button className="navbar-menu-icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} size="1x" />
      </button>

      {/* Left Section: App Logo */}
      <div className="navbar-left">
        <Link to="/home" onClick={closeMenu}>
          <img
            src="../logo_w.png"
            alt="App Logo"
            className="app-logo"
          />
        </Link>
      </div>

      {/* Center Section: Navigation Links */}
      <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <li>
          <Link to="/home" onClick={closeMenu}>Home</Link>
        </li>
        <li>
          <Link to="/" onClick={closeMenu}>Login</Link>
        </li>
        <li>
          <Link to="/dashboard" onClick={closeMenu}>Dashboard</Link>
        </li>
        <li>
          <Link to="/watchlist" onClick={closeMenu}>Watchlist</Link>
        </li>
        <li>
          <Link to="/about" onClick={closeMenu}>About</Link>
        </li>
      </ul>

      {/* Right Section: Profile Icon */}
      <div className="navbar-right">
        <button className="profile-icon" onClick={toggleDropdown}>
          <FontAwesomeIcon icon={faUserCircle} size="2x" />
        </button>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div className="dropdown-menu">
            <ul>
              <li>
                <Link to="/signin" onClick={closeMenu}>Sign In</Link>
              </li>
              <li>
                <Link to="/help" onClick={closeMenu}>Help Center</Link>
              </li>
              <li>
                <Link to="/getstarted" onClick={closeMenu}>Get Started</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
