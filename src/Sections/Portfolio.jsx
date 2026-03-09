import { useState } from "react";
import "./Portfolio.css";


import img1 from "../assets/images/product-1.jpg";
import img2 from "../assets/images/product-2.jpg";
import img3 from "../assets/images/product-3.jpg";
import img4 from "../assets/images/product-4.jpg";
import img5 from "../assets/images/product-5.jpg";
import img6 from "../assets/images/product-6.jpg";

const portfolioData = [
  { id: 1, category: "app", image: img1 },
  { id: 2, category: "product", image: img2 },
  { id: 3, category: "branding", image: img3 },
  { id: 4, category: "books", image: img4 },
  { id: 5, category: "app", image: img5 },
  { id: 6, category: "branding", image: img6 },
];

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const filteredItems =
    filter === "all"
      ? portfolioData
      : portfolioData.filter((item) => item.category === filter);

  return (
    <section className="portfolio-section">
      <section id="portfolio" className="portfolio-section">
      <div className="container">

        <div className="section-header">
          <h2>Our Portfolio</h2>
          <p>Lorem ipsum dolor sit amet</p>
        </div>

        {/* Filter Buttons */}
        <ul className="portfolio-filters">
          <li
            className={filter === "all" ? "active" : ""}
            onClick={() => setFilter("all")}
          >
            All
          </li>
          <li
            className={filter === "app" ? "active" : ""}
            onClick={() => setFilter("app")}
          >
            App Design
          </li>
          <li
            className={filter === "product" ? "active" : ""}
            onClick={() => setFilter("product")}
          >
            App Development
          </li>
          <li
            className={filter === "branding" ? "active" : ""}
            onClick={() => setFilter("branding")}
          >
            Branding
          </li>
          <li
            className={filter === "books" ? "active" : ""}
            onClick={() => setFilter("books")}
          >
            IT Solutions
          </li>
        </ul>

        {/* Portfolio Grid */}
        <div className="portfolio-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="portfolio-item">
              <div className="portfolio-wrap">
                <img src={item.image} alt="portfolio" />
              </div>
            </div>
          ))}
        </div>

      </div>
      </section>
    </section>
  );
};

export default Portfolio;