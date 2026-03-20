import "./navbar.css";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sheLogo from "/She-logo.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/service" },
  { label: "E-Learning", href: "/elearning" },
  { label: "She's Hired", href: "/shes-hired" },
  { label: "Contact", href: "/contact" },
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

        <Link to="/" className="logo">
          <img src={sheLogo} alt="She Logo" className="she-logo-img" />
        </Link>

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
            <Link
              to="/contact"
              className="
                book-btn
                px-5 py-2.5
                rounded-full
                text-sm font-medium
                text-white

                bg-white/10
                backdrop-blur-md
                border border-white/20

                shadow-[0_8px_30px_rgba(0,0,0,0.05)]

                hover:bg-white/20
                hover:border-white/30
                hover:shadow-[0_10px_40px_rgba(0,0,0,0.1)]
                hover:scale-105

                transition-all duration-300
              "
            >
              Book a Consultation
            </Link>

{/* <a href="https://sheexecutives.com" target="_blank" className="book-btn"> Book Now </a> */}
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
          Book a Consultation
        </a>
      </div>  
    </motion.nav>
  );
};

export default Navbar;