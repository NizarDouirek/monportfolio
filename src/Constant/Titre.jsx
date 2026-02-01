import React from "react";
import { motion } from "framer-motion";
import "./Titre.css";

const DURATION = 0.35;
const STAGGER = 0.04;

const Title = ({ text }) => {
  return (
    <div className="section-title">
      <h2 className="background-text">{text}</h2>

      <motion.h3
        className="foreground-text flip-title"
        initial={false}
        whileHover="hovered"
      >
        {/* LIGNE 1 */}
        <span className="flip-layer">
          {text.split("").map((char, i) => (
            <motion.span
              key={i}
              className="char"
              variants={{
                initial: { y: 0 },
                hovered: { y: "-100%" },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </span>

        {/* LIGNE 2 */}
        <span className="flip-layer absolute">
          {text.split("").map((char, i) => (
            <motion.span
              key={i}
              className="char"
              variants={{
                initial: { y: "100%" },
                hovered: { y: 0 },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </span>
      </motion.h3>

      <div className="swipe"></div>
    </div>
  );
};

export default Title;
