import React, { useEffect, useRef, useState } from "react";
import "./loader.css";

// Durées (ms) — total ≈ 4,6 s, le setIsLoaded arrive juste après
const FILL_MS = 6000; // remplissage du mot + compteur 0 → 100 %
const HOLD_MS = 400;  // mot entièrement blanc
const EXIT_MS = 4000; // zoom + fondu de sortie

const WAVE_POINTS = 28;  // finesse de la vague
const WAVE_AMPLITUDE = 6; // hauteur de la vague (en % de la hauteur du mot)

const easeInOutCubic = (t) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

export default function Loader({ setIsLoaded, text = "WELCOME TO\nMY PORTFOLIO" }) {
  const fillRef = useRef(null);
  const counterRef = useRef(null);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    let raf;
    let exitTimer;
    const start = performance.now();

    const tick = (now) => {
      const elapsed = now - start;
      const progress = easeInOutCubic(Math.min(elapsed / FILL_MS, 1));

      // Niveau de la surface : de "caché" (bas) à "tout couvert" (haut)
      const level =
        100 + WAVE_AMPLITUDE - progress * (100 + 2 * WAVE_AMPLITUDE);

      // Polygone avec un bord supérieur ondulé
      const pts = ["0% 100%"];
      for (let i = 0; i <= WAVE_POINTS; i++) {
        const x = (i / WAVE_POINTS) * 100;
        const y =
          level +
          WAVE_AMPLITUDE * Math.sin((x / 100) * Math.PI * 3 + elapsed / 220);
        pts.push(`${x}% ${y}%`);
      }
      pts.push("100% 100%");

      if (fillRef.current) {
        fillRef.current.style.clipPath = `polygon(${pts.join(", ")})`;
      }
      if (counterRef.current) {
        counterRef.current.textContent = `loading... ${Math.round(
          progress * 100
        )} %`;
      }

      if (elapsed < FILL_MS + HOLD_MS) {
        raf = requestAnimationFrame(tick);
      } else {
        setExiting(true);
        exitTimer = setTimeout(() => setIsLoaded(true), EXIT_MS);
      }
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(exitTimer);
    };
  }, [setIsLoaded]);

  return (
    <div className={`loader${exiting ? " exiting" : ""}`} role="status" aria-label="Chargement">
      <div className="loader-word">
        <span className="loader-text loader-text--base" aria-hidden="true">
          {text}
        </span>
        <span
          ref={fillRef}
          className="loader-text loader-text--fill"
          aria-hidden="true"
        >
          {text}
        </span>
        <span ref={counterRef} className="loader-counter">
          loading... 0 %
        </span>
      </div>
    </div>
  );
}