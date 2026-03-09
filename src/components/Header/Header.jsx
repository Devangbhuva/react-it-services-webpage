
import Navbar from "../Navbar/Navbar";
import "./Header.css";
import heroImg from "../../assets/images/hero-bg.png";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Header = () => {
  return (
    <header
      id="home"
      className="hero"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <Navbar />

      <div className="hero-content">
        <h1>
          Delivering Superior Services <br />
          <span>IT Solutions.</span>
        </h1>

        <p className="text-contect">You can easily change any design to your own. It is also highly <br />
          customizable SEO friendly template.</p>
        {/* SOCIAL ICONS */}
        <div className="social-icons">
          <FaFacebookF />
          <FaTwitter />
          <FaLinkedinIn />
          <FaInstagram />
        </div>

        {/* BUTTONS */}
        <div className="hero-buttons">
          <button className="primary">Get Quotes</button>
          <button className="secondary">Get Started</button>
        </div>
      </div>
    </header>
  );
};

export default Header;