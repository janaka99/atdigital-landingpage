import React from "react";
import "./footer-style.css";
import Container from "../Container/Container";
import Logo from "../../UI/Logo/Logo";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-wrapper">
          <div className="footer-top">
            <div className="footer-top-logo">
              <Logo />
              <div className="footer-top-logo-desc">
                Your goal is our target. Not anything in between. We use online
                marketing platforms and tools to achieve single objective - your
                business results.
              </div>
            </div>
            <div className="footer-top-nav">
              <div className="footer-top-nav-list">
                <div className="footer-top-nav-title">Our Technologies</div>
                <div className="footer-top-nav-items">
                  <a href="">ReactJS</a>
                  <a href="">Gatsby</a>
                  <a href="">NextJS</a>
                  <a href="">NodeJS</a>
                  <a href="">GraphQL</a>
                  <a href="">Laravel</a>
                </div>
              </div>
              <div className="footer-top-nav-list">
                <div className="footer-top-nav-title">Our Services</div>
                <div className="footer-top-nav-items">
                  <a href="">Social Media Marketing</a>
                  <a href="">Web & Mobile App Development</a>
                  <a href="">Data & Analytics</a>
                  <a href="">Google MArketing Solutions</a>
                  <a href="">Search Engine Optimization</a>
                  <a href="">Laravel</a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <a href="">Privacy Policy</a>
            <div className="">|</div>
            <a href="">Terms & Conditions</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
