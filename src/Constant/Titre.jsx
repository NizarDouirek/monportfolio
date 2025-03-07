import React from "react";
import "./Titre.css"; // Import du fichier de style

const Title = ({ text }) => {
    return (
      <div className="title-container">
        <div className="line"></div>
        <h2 className="title">{text}</h2>
        <div className="line"></div>
      </div>
    );
  };

export default Title;
