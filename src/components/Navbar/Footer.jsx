import React, { useState } from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaPaperPlane
} from "react-icons/fa6";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Email is required");
      setSuccess("");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Enter valid email");
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("Subscribed Successfully!");
    setEmail("");
  };

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-grid">

          {/* LEFT COLUMN */}
          <div className="footer-widget">
            <h2 className="logo">techno<span>IT</span></h2>
            <p>
              Lorem ipsum dolor sit amet, consec tetur adipisicing elit,
              sed do eiusmod tempor incididunt.
            </p>

            <div className="social-icons">
              <a href="#"><FaXTwitter /></a>
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </div>

          {/* SERVICES */}
          <div className="footer-widget">
            <h3>Services</h3>
            <ul>
              <li><a href="#">Web Design</a></li>
              <li><a href="#">App Development</a></li>
              <li><a href="#">Cloud Services</a></li>
              <li><a href="#">Domain & Hosting</a></li>
              <li><a href="#">SEO Optimization</a></li>
              <li><a href="#">Social Media</a></li>
            </ul>
          </div>

          {/* INFORMATION */}
          <div className="footer-widget">
            <h3>Information</h3>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Team</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Blogs</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          {/* CONTACT + NEWSLETTER */}
          <div className="footer-widget">
            <h3>Contacts</h3>
            <p><FaLocationDot /> 101, Surat ,Gujart</p>
            <p><FaPhone /> +91 1234 56 789</p>
            <p><FaEnvelope /> contact@example.com</p>

            <h3 className="newsletter-title">Newsletter</h3>
            <form className="subscribe-form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit"><FaPaperPlane /></button>
            </form>
            {error && <span className="error">{error}</span>}
            {success && <span className="success">{success}</span>}
          </div>

        </div>

        <div className="copyright">
          <p>Technoit © 2026 - Designed by Zr Themes</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;