import React from "react";
import "./homepage-style.css";
import { services } from "../../data";
import Service from "./components/Service/Service";
import Container from "../../components/layouts/Container/Container";
import Button from "../../components/UI/Button/Button";

const Homepage = () => {
  return (
    <main className="homepage">
      <div className="homepage-hero">
        <div className="homepage-hero-image">
          <img src="hero.jpg" alt="" />
        </div>
        <div className="homepage-hero-content-wrapper">
          <Container>
            <div className="homepage-hero-content">
              <h1>
                We crush your competitors, goals, and sales records - without
                the B.S.
              </h1>
              <Button link="/" text="Get free consultation" />
            </div>
          </Container>
        </div>
      </div>
      <Container>
        <div className="homepage-services">
          {services.map((service, i) => (
            <Service service={service} key={i} index={i} />
          ))}
        </div>
      </Container>
    </main>
  );
};

export default Homepage;
