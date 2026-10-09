import React, { useRef } from "react";
import "./skills.css";
import SkillCard from "./SkillCard";
import Title from "../Constant/Titre";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";

/* Card animée au scroll :
   - elle glisse de la droite en pivotant en 3D, comme une couverture de livre
   - elle passe du flou au net en gagnant en taille
   - un ressort (spring) adoucit le mouvement pour un rendu fluide
   - chaque card finit un peu plus tard que la précédente */
const AnimatedCard = ({ character, index }) => {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();

  const isMobile = typeof window !== "undefined" && window.innerWidth <= 480;
  const distance = isMobile ? 80 : 240;

  // Fin de l'animation : 80%, 68%, 56%, 44% de la hauteur de l'écran
  const end = (80 - index * 12) / 100;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", `start ${end}`],
  });

  // Ressort : le mouvement suit le scroll avec une légère inertie
  const p = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    mass: 0.6,
  });

  const x = useTransform(p, [0, 1], [distance, 0]);
  const y = useTransform(p, [0, 1], [60, 0]);
  const rotateY = useTransform(p, [0, 1], [-35, 0]);
  const rotateZ = useTransform(p, [0, 1], [6, 0]);
  const scale = useTransform(p, [0, 1], [0.82, 1]);
  const opacity = useTransform(p, [0, 0.5], [0, 1]);
  const filter = useTransform(p, (v) =>
    v >= 0.98 ? "none" : `blur(${(1 - v) * 10}px)`
  );

  // Accessibilité : pas d'animation si l'utilisateur la désactive
  if (reduceMotion) {
    return (
      <div className="card-wrap">
        <SkillCard character={character} index={index} />
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className="card-wrap"
      style={{
        x,
        y,
        rotateY,
        rotateZ,
        scale,
        opacity,
        filter,
        transformPerspective: 1200,
      }}
    >
      <SkillCard character={character} index={index} />
    </motion.div>
  );
};

const Skills = ({ showHero = true }) => {
  const { t } = useTranslation();

  const characters = [
    {
      name: t("frontendtitle"),
      image: "1i.avif",
      description: t("frontenddescription"),
      icon: "bx-code-alt",
    },
    {
      name: t("backendtitle"),
      image: "2i.avif",
      description: t("backenddescription"),
      icon: "bx-server",
    },
    {
      name: "Designer",
      image: "i3.avif",
      description: t("designerdescription"),
      icon: "bx-palette",
    },
    {
      name: "DevOps",
      image: "devops.webp",
      description: t("devopsdescription"),
      icon: "bx-git-branch",
    },
  ];

  return (
    <>
      {" "}
      {showHero && (
        <section className="hero-section">
          <div className="hero-overlay">
            <div className="hero-content">
              <h1>Skills</h1>
              <div className="breadcrumb">
                <Link to="/home">
                  {" "}
                  <i className="bx bx-home-alt icnH"></i> Home
                </Link>
                /<span className="spann"> Skills</span>
              </div>
            </div>
          </div>
        </section>
      )}
      <div id="skills" className="skills">
        <Title text={t("competences")} />
        <p className="hover-instruction">{t("hover")}</p>

        <div className="containerskills">
          {characters.map((character, index) => (
            <AnimatedCard key={index} character={character} index={index} />
          ))}
        </div>

        {/* Langages et Frameworks */}
        <h1 className="titrecp">
          <i className="bx bx-terminal"></i> {t("languagesFrameworks")}
        </h1>
        <motion.div
          className="pack"
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {[
            "html.avif",
            "css.avif",
            "tailwind.png",
            "bootstrap.avif",
            "javascript.webp",
            "php.webp",
            "java.png",
            "react.webp",
            "angular.svg",
            "react-native.webp",
            "laravel.webp",
            "python.png",
          ].map((img, index) => (
            <motion.section key={index} whileHover={{ scale: 1.1 }}>
              <img
                loading="lazy"
                className="imgskills"
                src={img}
                alt={img.split(".")[0]}
              />
              <h2>{img.split(".")[0].toUpperCase()}</h2>
            </motion.section>
          ))}
        </motion.div>

        {/* Bases de données */}
        <div className="cardTwo">
          <div>
            <h1 className="titrecp">
              <i className="bx bx-data"></i> {t("databases")}
            </h1>
            <motion.div
              className="pack"
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {["mysql.webp", "PostgreSQL.webp", "mongo-db.webp"].map(
                (img, index) => (
                  <motion.section key={index} whileHover={{ scale: 1.1 }}>
                    <img
                      className="imgskills"
                      src={img}
                      alt={img.split(".")[0]}
                    />
                    <h2>{img.split(".")[0].toUpperCase()}</h2>
                  </motion.section>
                )
              )}
            </motion.div>
          </div>
          <div>
            <h1 className="titrecp">
              <i className="bx bx-briefcase-alt"></i> ERP - CMC
            </h1>
            <motion.div
              className="pack"
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {["odoo.webp"].map((img, index) => (
                <motion.section key={index} whileHover={{ scale: 1.1 }}>
                  <img
                    loading="lazy"
                    className="imgskills"
                    src={img}
                    alt={img.split(".")[0]}
                  />
                  <h2>{img.split(".")[0].toUpperCase()}</h2>
                </motion.section>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Outils de Développement et Design */}
        <h1 className="titrecp">
          <i className="bx bx-git-branch"></i> {t("tools")}
        </h1>
        <motion.div
          className="pack"
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {[
            "git.webp",
            "github.webp",
            "postman.webp",
            "docker.svg",
            "xamp.webp",
            "figma.webp",
            "canva.webp",
            "grafana.png",
            "photoshop.webp",
          ].map((img, index) => (
            <motion.section key={index} whileHover={{ scale: 1.1 }}>
              <img
                loading="lazy"
                className="imgskills"
                src={img}
                alt={img.split(".")[0]}
              />
              <h2>{img.split(".")[0].toUpperCase()}</h2>
            </motion.section>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Skills;