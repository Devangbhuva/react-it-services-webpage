import "./Pricing.css";
import { FaCheckCircle } from "react-icons/fa";

const pricingData = [
  {
    title: "Basic",
    price: 25,
    featured: false,
  },
  {
    title: "Standard",
    price: 50,
    featured: true,
  },
  {
    title: "Premium",
    price: 100,
    featured: false,
  },
];

const features = [
  "Unlimited GB Space",
  "30 Domain Names",
  "Free SSL",
  "Daily Backup",
  "Free Templates",
  "Free Email",
  "10 Databases",
  "Unlimited Email Address",
  "Live Support",
];

const Pricing = () => {
  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <div className="section-header">
          <h2>Pricing Plans</h2>
          <p>Lorem ipsum dolor sit amet</p>
        </div>

        <div className="pricing-grid">
          {pricingData.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card ${plan.featured ? "featured" : ""}`}
            >
              <h3>{plan.title}</h3>

              <div className="price">
                <span className="currency">$</span>
                {plan.price}
              </div>

              <ul>
                {features.map((item, i) => (
                  <li key={i}>
                    <FaCheckCircle className="check-icon" />
                    {item}
                  </li>
                ))}
              </ul>

              <button className="order-btn">
                Order Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;