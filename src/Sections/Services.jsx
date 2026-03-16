import "./Services.css";
import { 
  FiLayers, 
  FiMonitor, 
  FiTarget, 
  FiTrendingUp, 
  FiCloud, 
  FiShield 
} from "react-icons/fi";

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <h2>Services We Offer</h2>
          <p>Lorem ipsum dolor sit amet</p>
        </div>

        <div className="services-grid">
          <div className="icon-box">
            <div className="icon">
                <FiLayers />
              {/* <img src={serviceDesign} alt="Application Design" />   */}
            </div>
            <h4>Application Design</h4>
            <p>
              Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
          </div>

          <div className="icon-box">
            <div className="icon">
                   <FiMonitor />
              {/* <img src={serviceHosting} alt="Web Hosting" /> */}
            </div>
            <h4>Web Hosting</h4>
            <p>
              Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
          </div>

          <div className="icon-box">
            <div className="icon">
                  <FiTarget />    
              {/* <img src={serviceSocial} alt="Social Media" /> */}
            </div>
            <h4>Social Media</h4>
            <p>
              Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
          </div>

          <div className="icon-box">

            <div className="icon">
                 <FiTrendingUp />
              {/* <img src={serviceSeo} alt="SEO Optimization" /> */}
            </div>
            <h4>SEO Optimization</h4>
            <p>
              Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
          </div>

          <div className="icon-box">
            <div className="icon">
                <FiCloud />   
              {/* <img src={serviceCloud} alt="Cloud Server" /> */}
            </div>
            <h4>Cloud Server</h4>
            <p>
              Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
          </div>

          <div className="icon-box">
            <div className="icon">
                 <FiShield />
              {/* <img src={serviceSecure} alt="Data Security" /> */}
            </div>
            <h4>Data Security</h4>
            <p>
              Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;