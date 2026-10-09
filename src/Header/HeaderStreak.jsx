import React from "react";

/*
  Trait lumineux qui fait le tour du header en suivant exactement
  la bordure arrondie (il se courbe dans les coins au lieu de sortir).

  - TAIL : longueur de la traînée, en % du périmètre du header.
           (≈ 6 % ≈ 200 px sur grand écran). Augmente pour une queue plus longue.
  - La vitesse et les couleurs se règlent dans header.css (--streak-*).
*/
const TAIL = 6;

// Plusieurs traits de longueurs croissantes, superposés, qui se terminent
// tous à la même "tête" : plus on s'approche de la tête, plus c'est lumineux.
const LAYERS = [0.13, 0.26, 0.42, 0.58, 0.78, 1].map((f) =>
  +(f * TAIL).toFixed(2)
);

const Ring = ({ variant }) => (
  <svg className={`header-streak ${variant}`} aria-hidden="true">
    {LAYERS.map((len) => (
      <rect
        key={len}
        className="streak-rect"
        x="0"
        y="0"
        width="100%"
        height="100%"
        rx="29"
        ry="29"
        pathLength="100"
        strokeDasharray={`${len} ${100 - len}`}
      />
    ))}
    {/* Petite tête brillante */}
    <rect
      className="streak-rect streak-head"
      x="0"
      y="0"
      width="100%"
      height="100%"
      rx="29"
      ry="29"
      pathLength="100"
      strokeDasharray="0.35 99.65"
    />
  </svg>
);

export default function HeaderStreak() {
  return (
    <>
      <Ring variant="streak-glow" />
      <Ring variant="streak-line" />
    </>
  );
}