import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import LoginSignup from "./Login/LoginSignup";
import Dashboard from "./Dashboard/Dashboard";
import Watchlist from "./Watchlist/Watchlist";
import NavBar from "./Nav/Nav";
import Help from "./Help/Help";
import HomeScreen from "./Home/Home";
import About from "./About/About";
import Signup from "./SignUp/SignUp";
import RecentTransactions from "./Dashboard/RecentTransactions";
import NewsSection from "./Dashboard/NewsSection";
import OverviewPanel from "./Dashboard/OverviewPanel";
import Sidebar from "./Dashboard/Sidebar";
import MarketSummary from "./Dashboard/MarketSummary";
import GainersLosers from "./Dashboard/GainersLosers";
import StockPerformanceChart from "./Dashboard/StockPerformanceChart";

const App = () => {
  const location = useLocation();


  // Debugging: Log the current pathname to check routing
  console.log("Current Path:", location.pathname);

  // Hide NavBar on login/signup routes
  const hideNavBar =
    location.pathname === "/" || 
    location.pathname === "/signin" || 
    location.pathname === "/signup";

  return (
    <div className="App">
      {/* Conditionally render NavBar */}
      {!hideNavBar && <NavBar />}

      {/* Pass the theme and toggle function to Settings or anywhere else */}
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<LoginSignup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/gainloss" element={<GainersLosers />} />
        <Route path="/market" element={<MarketSummary />} />
        <Route path="/news" element={<NewsSection />} />
        <Route path="/overview" element={<OverviewPanel />} />
        <Route path="/recent" element={<RecentTransactions />} />
        <Route path="/side" element={<Sidebar />} />
        <Route path="/stockp" element={<StockPerformanceChart />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </div>
  );
};

// Wrap with Router for routing context
const WrappedApp = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;
