import React, { useState, useRef } from "react";
import "./header-style.css";
import Container from "../Container/Container";
import Logo from "../../UI/Logo/Logo";

const Header = () => {
  const [isMbNavOpen, setIsMbNavOpen] = useState(false);

  const handleMobileNav = () => {
    setIsMbNavOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <Container>
        <nav className="header-nav-bar">
          <div className="header-logo">
            <Logo />
          </div>
          <div
            className={`header-nav-list ${isMbNavOpen && "header-nav-active"}`}
          >
            <a href="/" className="header-nav-item">
              Services
            </a>
            <a href="/" className="header-nav-item">
              About us
            </a>
            <a href="/" className="header-nav-item">
              Contact us
            </a>
            <a href="/" className="header-nav-item">
              careers
            </a>
          </div>
          <button
            onClick={handleMobileNav}
            className={`header-burger ${isMbNavOpen && "header-burger-open"}`}
          >
            <div className="header-burger-bar"></div>
          </button>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
