import React from "react";
import "./Titre.css"; // Import du fichier de style

const Title = ({ text }) => {
    return (
      <div className="section-title">
  <h2 className="background-text">{text}</h2>
  <h3 className="foreground-text">{text}</h3>
  <div className="swipe"></div>
</div>
    );
  };

export default Title;
