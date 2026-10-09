import React, { useLayoutEffect, useRef } from "react";
import "./stack-section.css";

/*
  Une "page" entière qui reste en place quand on arrive à sa fin,
  pendant que la page suivante remonte par-dessus.

  - top = hauteur de l'écran - hauteur de la page (négatif si la page est plus
    haute que l'écran) → la page ne se bloque que lorsque son BAS atteint le bas
    de l'écran, donc on peut la lire en entier avant qu'elle soit recouverte.
  - Le fond du site (couleur + image/grille du body ou du html) est copié sur
    le panneau pour qu'il soit opaque : sinon on voit la page précédente à travers.
*/

const isTransparent = (c) => !c || c === "transparent" || c === "rgba(0, 0, 0, 0)";

function getSiteBackground() {
  for (const node of [document.body, document.documentElement]) {
    const cs = getComputedStyle(node);
    const hasColor = !isTransparent(cs.backgroundColor);
    const hasImage = cs.backgroundImage !== "none";
    if (hasColor || hasImage) {
      return {
        backgroundColor: hasColor ? cs.backgroundColor : "#ffffff",
        backgroundImage: cs.backgroundImage,
        backgroundRepeat: cs.backgroundRepeat,
        backgroundPosition: cs.backgroundPosition,
        backgroundSize: cs.backgroundSize,
        backgroundAttachment: cs.backgroundAttachment,
      };
    }
  }
  return { backgroundColor: "#ffffff" };
}

export default function StackSection({ children, index = 0, className = "" }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    Object.assign(el.style, getSiteBackground());

    const update = () => {
      el.style.top = `${Math.min(0, window.innerHeight - el.offsetHeight)}px`;
    };

    update();
    const observer = new ResizeObserver(update); // le contenu change de hauteur
    observer.observe(el);
    window.addEventListener("resize", update);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section
      ref={ref}
      className={`stack-section ${className}`}
      style={{ zIndex: index + 1 }} /* une page plus loin = toujours au-dessus */
    >
      {children}
    </section>
  );
}