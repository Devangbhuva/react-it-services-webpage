import { useEffect, useState } from "react";
import "./Navbar.css";
import { Navigate, useNavigate } from "react-router-dom";

// const Navbar = () => {
const Navbar = ({ setPage, page }) => {
  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (id) => {
    setActive(id);
    setPage(id);
    // document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });

  };
  const navigate = useNavigate();


  return (
    <>
      {/* NAVBAR */}
      <nav className={`navbar ${(scrolled || page !== "home") ? "scrolled" : ""}`}>
        <div className="logo">techno<span>IT</span></div>



        {/* DESKTOP MENU */}
        <ul className="nav-links desktop">
          {["home", "services", "portfolio", "team", "pricing", "contact"].map(item => (
            <li
              key={item}
              className={active === item ? "active" : ""}
              onClick={() => handleClick(item)}
            >
              {item.toUpperCase()}
            </li>
          ))}



          {/* DESKTOP DROPDOWN MENU */}
          <li
            className={`desktop-dropdown ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            MENU ▾

            <ul
              className="desktop-submenu"
              onClick={(e) => e.stopPropagation()}
            >
              <li onClick={() => handleClick("about")}>About</li>
              <li onClick={() => handleClick("pricing-page")}>Pricing</li>
              <li onClick={() => handleClick("faqs")}>FAQs</li>
              <li onClick={() => handleClick("terms")}>Terms & Conditions</li>
              <li onClick={() => handleClick("privacy")}>Privacy Policy</li>
            </ul>

          </li>

          <li className={active === "news" ? "active" : ""}
            onClick={() => handleClick("news")} > NEWS
          </li>
        </ul>

        <button className="quote-btn">Get Quotes</button>
        {/* NEW LOGIN BUTTON */}
        <button className="login-btn" onClick={() => navigate("/login")}>
          Login
        </button>

        {/* HAMBURGER */}
        <div className="hamburger" onClick={() => setMobileOpen(true)}>
          ☰
        </div>
      </nav>

      {/* MOBILE SLIDE MENU */}
      <div className={`mobile-menu ${mobileOpen ? "active" : ""}`}>
        <div className="close" onClick={() => setMobileOpen(false)}>✕</div>

        <ul>
          {["home", "services", "portfolio", "testimonials", "team"].map(item => (
            <li
              key={item}
              className={active === item ? "active" : ""}
              onClick={() => handleClick(item)}
            >
              {item}
            </li>
          ))}

          {/* MOBILE DROPDOWN */}
          <li className="accordion">
            <div onClick={() => setMenuOpen(!menuOpen)}>
              Menu <span>{menuOpen ? "▲" : "▼"}</span>
            </div>

            {menuOpen && (
              <ul className="sub-menu">
                {[
                  { name: "About", id: "about" },
                  { name: "Pricing", id: "pricing" },
                  { name: "FAQs", id: "faqs" },
                  { name: "Terms & Conditions", id: "terms" },
                  { name: "Privacy Policy", id: "privacy" }
                ].map(item => (
                  <li
                    key={item.id}
                    onClick={() => handleClick(item.id)}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li onClick={() => handleClick("news")}>News</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;