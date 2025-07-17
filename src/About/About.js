import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Smart Stock Tracker</h1>
      <p className="about-description">
        Welcome to the Smart Stock Tracker, your one-stop solution for managing, tracking, and growing your stock investments. Our app is designed to empower investors with cutting-edge tools, seamless navigation, and personalized features to make stock trading simple and efficient.
      </p>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          At Smart Stock Tracker, our mission is to democratize financial growth by providing a platform that's accessible, reliable, and tailored to investors of all experience levels. We aim to make stock trading intuitive, insightful, and inspiring.
        </p>
      </section>

      <section className="about-features">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature">
            <h3>Track Your Investments</h3>
            <p>
              Stay on top of your portfolio with real-time updates and in-depth analysis of stock performance trends.
            </p>
          </div>
          <div className="feature">
            <h3>Build Your Watchlist</h3>
            <p>
              Create a personalized list of stocks to monitor potential opportunities and keep an eye on market movements.
            </p>
          </div>
          <div className="feature">
            <h3>Simulate Trades</h3>
            <p>
              Practice trading strategies risk-free with our simulation tool, perfect for new investors.
            </p>
          </div>
          <div className="feature">
            <h3>Data Visualization</h3>
            <p>
              Analyze trends and patterns with intuitive charts, graphs, and interactive dashboards.
            </p>
          </div>
          <div className="feature">
            <h3>Seamless User Experience</h3>
            <p>
              Navigate our app with ease thanks to a clean, modern interface optimized for performance.
            </p>
          </div>
          <div className="feature">
            <h3>Offline Access</h3>
            <p>
              Access your data anytime, anywhere, with offline functionality for uninterrupted tracking.
            </p>
          </div>
        </div>
      </section>

      <section className="about-why-choose">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>
            <strong>Intuitive Design:</strong> Navigate effortlessly with a simple and user-friendly interface.
          </li>
          <li>
            <strong>Customizable Features:</strong> Tailor your experience with tools designed for your unique needs.
          </li>
          <li>
            <strong>Secure & Private:</strong> Your data is encrypted and stored securely.
          </li>
          <li>
            <strong>Beginner-Friendly:</strong> Perfect for new investors looking to learn and grow.
          </li>
        </ul>
      </section>

      <section className="about-team">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="../Rajesh_.png" alt="Team Member 1" />
            <h3>Rajesh</h3>
            <p>Team Head</p>
          </div>
          <div className="team-member">
            <img src="../Gopinath.jpg" alt="Team Member 2" />
            <h3>Gopinath</h3>
            <p>Team Member</p>
          </div>
          <div className="team-member">
            <img src="../Santhosh.jpg" alt="Team Member 3" />
            <h3>Santhosh</h3>
            <p>Team Member</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
