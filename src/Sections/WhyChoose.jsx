import "./WhyChoose.css";
import {
  FiFileText,
  FiBox,
  FiMonitor,
  FiDollarSign,
  FiSettings,
  FiHeadphones
} from "react-icons/fi";

import featureImg from "../assets/images/features.jpg";

const WhyChoose = () => {
  return (
    <section className="why-section">
      <div className="container">
        <div className="section-header">
          <h2>Why Choose Us</h2>
          <p>Lorem ipsum dolor sit amet</p>
        </div>

        <div className="why-grid">

          {/* LEFT SIDE */}
          <div className="why-col left">

            <div className="list-wrap">
              <div className="description">
                <h4>Experience</h4>
                <p>Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
              </div>
              <div className="icon">
                <FiFileText />
              </div>
            </div>

            <div className="list-wrap">
              <div className="description">
                <h4>Products</h4>
                <p>Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
              </div>
              <div className="icon">
                <FiBox />
              </div>
            </div>

            <div className="list-wrap">
              <div className="description">
                <h4>Approach</h4>
                <p>Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
              </div>
              <div className="icon">
                <FiMonitor />
              </div>
            </div>

          </div>

          {/* CENTER IMAGE */}
          <div className="why-col center">
            <img src={featureImg} alt="features" />
          </div>

          {/* RIGHT SIDE */}
          <div className="why-col right">

            <div className="list-wrap">
              <div className="icon">
                <FiDollarSign />
              </div>
              <div className="description">
                <h4>Pricing</h4>
                <p>Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
              </div>
            </div>

            <div className="list-wrap">
              <div className="icon">
                <FiSettings />
              </div>
              <div className="description">
                <h4>Delivery</h4>
                <p>Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
              </div>
            </div>

            <div className="list-wrap">
              <div className="icon">
                <FiHeadphones />
              </div>
              <div className="description">
                <h4>Support</h4>
                <p>Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChoose;