import React from "react";
import { Link } from "react-scroll";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li>
          <Link to="gainloss" smooth={true} duration={500}>
            Gainers & Losers
          </Link>
        </li>
        <li>
          <Link to="stock" smooth={true} duration={500}>
            Stock Details
          </Link>
        </li>
        <li>
          <Link to="stockp" smooth={true} duration={500}>
            Stock Performance Chart
          </Link>
        </li>
        <li>
          <Link to="recent" smooth={true} duration={500}>
            Recent Transactions
          </Link>
        </li>
        <li>
          <Link to="news" smooth={true} duration={500}>
            News Section
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
