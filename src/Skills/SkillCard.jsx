import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

/*
  Carte "skills" liée au scroll :
  - en bas de l'écran, chaque carte est décalée vers le bas de façon différente
    (la 1re un peu, la 2e plus, la 3e encore plus… = effet d'escalier) ;
  - en scrollant, elles remontent et s'alignent toutes sur la même ligne.

  Nécessite framer-motion récent (useScroll → v7+, idéalement v10+).
*/
const BASE_OFFSET = 80; // décalage de départ de la 1re carte (px)
const STEP = 80;        // décalage supplémentaire par carte (px)

export default function SkillCard({ character, index }) {
  const ref = useRef(null);

  // 0 = le haut de la carte entre par le bas de l'écran
  // 1 = le haut de la carte atteint 55 % de la hauteur de l'écran
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 55%"],
  });

  // Petit ressort pour adoucir le mouvement (inertie comme dans la vidéo)
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.4,
  });

  const startY = BASE_OFFSET + index * STEP;
  const y = useTransform(progress, [0, 1], [startY, 0]);
  const opacity = useTransform(progress, [0, 0.3], [0, 1]);

  return (
    // Le wrapper porte l'animation de scroll ; la carte garde ses propres
    // transformations CSS (perspective, rotation et ouverture au survol)
    <motion.div ref={ref} className="card-wrap" style={{ y, opacity }}>
      <motion.div className="cardskills" whileHover={{ scale: 1.05 }}>
        <div className="img-container">
          <img loading="lazy" src={character.image} alt={character.name} />
        </div>
        <div className="card-details">
          <div className="card-head">
            <span className="card-icon">
              <i className={`bx ${character.icon}`}></i>
            </span>
            <h2>{character.name}</h2>
          </div>

          <p>{character.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}