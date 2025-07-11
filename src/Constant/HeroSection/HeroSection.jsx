import React from "react";
import "./HeroSection.css";

const HeroSection = ({ title, breadcrumb }) => {
  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>{title}</h1>
          <div className="breadcrumb">
            {breadcrumb}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
