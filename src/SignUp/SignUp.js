import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook, faApple, faYahoo, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"; // For the email and eye icons
import "./SignUp.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [showSecondInterface, setShowSecondInterface] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleEmailButtonClick = () => {
    setShowSecondInterface(true);
  };

  const handleCancel = () => {
    navigate("/home");
    setShowSecondInterface(false);
  };

  return (
    <div className="login-container">
      <div className="image-side">
        <img
          src="https://images.pexels.com/photos/6770513/pexels-photo-6770513.jpeg?auto=compress&cs=tinysrgb&w=500/500"
          alt="Image"
          className="left-image"
        />
      </div>

      <div className="login-side">
        <div className="top-section">
          {showSecondInterface && (
            <button className="back-button" onClick={() => setShowSecondInterface(false)}>
              {"<"}
            </button>
          )}
          <div className="logo-container">
            <img src="../logo_b.png" alt="App Logo" className="app-logo" />
          </div>
          <button className="cancel-button" onClick={handleCancel}>
            𐌗
          </button>
        </div>

        <div className="center-section">
          {!showSecondInterface ? (
            <div className="login-first-interface">
              <h2>Sign up</h2>

              <div className="login-buttons">
                <button className="login-btn google">
                  <FontAwesomeIcon icon={faGoogle} className="custom-icon-size" />
                  Signup with Google
                </button>
                <button className="login-btn facebook">
                  <FontAwesomeIcon icon={faFacebook} className="custom-icon-size" />
                </button>
                <button className="login-btn twitter">
                  <FontAwesomeIcon icon={faXTwitter} className="custom-icon-size" />
                </button>
                <button className="login-btn yahoo">
                  <FontAwesomeIcon icon={faYahoo} className="custom-icon-size" />
                </button>
                <button className="login-btn apple">
                  <FontAwesomeIcon icon={faApple} className="custom-icon-size" />
                </button>
                <button className="login-btn linkedin">
                  <FontAwesomeIcon icon={faLinkedin} className="custom-icon-size" />
                </button>
              </div>

              <div className="or-section">
                  <div className="line"></div>
                  <span>or</span>
                  <div className="line"></div>
              </div>


              <div className="email-section">
                <button className="email-button" onClick={handleEmailButtonClick}>
                  <FontAwesomeIcon icon={faEnvelope} />
                  Email
                </button>
              </div>
            </div>
          ) : (
            <div className="login-second-interface">
              <h2>Signup</h2>
              <form>
                <div>
                  <label>Full Name</label>
                  <input type="text" required />
                </div>
                <div>
                  <label>Email</label>
                  <div className="input-container">
                    <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                    <input type="email" required id="emaill"/>
                  </div>
                </div>
                <div>
                  <label>Password</label>
                  <div className="input-container">
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                    />
                    <FontAwesomeIcon
                      icon={showPassword ? faEyeSlash : faEye}
                      className="password-toggle-icon"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  </div>
                </div>
                <button type="submit" className="submit-btn">
                  Sign up
                </button>
              </form>
            </div>
          )}
        </div>

        <div className="bottom-section">
            <div className="line no-text-line"></div> {/* Line without "or" */}
                <footer className="footer">Already have an account?{" "}
                    <span className="signup-link" onClick={() => navigate("/signin")}>Sign in</span>
                </footer>
            </div>
        </div>
    </div>
  );
};

export default Signup;
