import React from "react";
import { motion } from "framer-motion";
import "./Titre.css";

const DURATION = 0.35;
const STAGGER = 0.04;

const Title = ({ text }) => {
  return (
    <div className="section-title">
      <h2 className="background-text">{text}</h2>

       <h3 className="foreground-text">
        {text}
      </h3>

      <div className="swipe"></div>
    </div>
  );
};

export default Title;
