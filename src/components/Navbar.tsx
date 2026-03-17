import "./navbar.css";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sheLogo from "/She-logo.png";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#mission" },
  { label: "Services", href: "#services" },
  { label: "E-Learning", href: "#elearning" },
  { label: "She's Hired", href: "/shes-hired" },
  { label: "Contact", href: "/Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className="nav-container">

        <a href="#hero" className="logo">
          <img src={sheLogo} alt="She Logo" className="she-logo-img" />
        </a>

        {/* Desktop */}
        <div className="nav-links">
          {navItems.map((item) =>
            item.href.startsWith("/") ? (
              <Link key={item.label} to={item.href} className="nav-link">
                {item.label}
              </Link>
            ) : (
              <a key={item.label} href={item.href} className="nav-link">
                {item.label}
              </a>
            )
          )}
          <a href="https://sheexecutives.com" target="_blank" className="book-btn">
            Book Now
          </a>
        </div>

        {/* Mobile button */}
        <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
        {navItems.map((item) =>
          item.href.startsWith("/") ? (
            <Link
              key={item.label}
              to={item.href}
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ) : (
            <a
              key={item.label}
              href={item.href}
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          )
        )}

        {/* ✅ Add this */}
        <a
          href="https://sheexecutives.com"
          target="_blank"
          rel="noopener noreferrer"
          className="book-btn mobile-book-btn"
          onClick={() => setIsOpen(false)}
        >
          Book Now
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;