import React from "react";
import "./skills.css";
import Title from "../Constant/Titre";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Skills = ({ showHero = true }) => {
  const { t } = useTranslation(); 
  const characters = [
    {
      name: t("frontendtitle"),
      image: "1i.avif",
      description: t("frontenddescription"),
    },
    {
      name: t("backendtitle"),
      image: "2i.avif",
      description: t("backenddescription"),
    },
    {
      name: "Designer",
      image: "i3.avif",
      description: t("designerdescription"),
    }
  ];

  return (
    <> {showHero && (
        <section className="hero-section">
          <div className="hero-overlay">
            <div className="hero-content">
              <h1>Skills</h1>
              <div className="breadcrumb">
                 <Link to="/home"> <i className="bx bx-home-alt icnH"></i> Home</Link>/<span className="spann">  Skills</span> 
              </div>
            </div>
          </div>
        </section>
      )}
    <div id="skills" className="skills">
      <Title text={t("competences" )}/>
      <p  className="hover-instruction">{t("hover")}</p>
      <div className="containerskills">
        {characters.map((character, index) => (
          <motion.div
            key={index}
            className="cardskills"
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="img-container">
              <img loading="lazy" src={character.image} alt={character.name} />
            </div>
            <div className="card-details">
              <h2>{character.name}</h2>
              <p>{character.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Langages et Frameworks */}
      <h1 className="titrecp"><i class='bx bx-terminal'></i>  {t("languagesFrameworks")}</h1>
      <motion.div className="pack" initial={{ opacity: 0, y: 150 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4}}>
        {["html.avif", "css.avif", "javascript.webp", "php.webp", "bootstrap.avif", "react.webp","react-native.webp", "laravel.webp"].map((img, index) => (
          <motion.section key={index} whileHover={{ scale: 1.1 }}>
            <img loading="lazy" className="imgskills" src={img} alt={img.split(".")[0]} />
            <h2>{img.split(".")[0].toUpperCase()}</h2>
          </motion.section>
        ))}
      </motion.div>

      {/* Bases de données */}
      <div className="cardTwo">
        <div>
      <h1 className="titrecp"><i class='bx bx-data'></i>  {t("databases")}</h1>
      <motion.div className="pack" initial={{ opacity: 0, y: 150 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        {["mysql.webp", "mongo-db.webp"].map((img, index) => (
          <motion.section key={index} whileHover={{ scale: 1.1 }}>
            <img className="imgskills" src={img} alt={img.split(".")[0]} />
            <h2>{img.split(".")[0].toUpperCase()}</h2>
          </motion.section>
        ))}
      </motion.div>
      </div>
      <div>
      <h1 className="titrecp"><i class='bx bx-briefcase-alt'></i>  ERP - CMC</h1>
      <motion.div className="pack" initial={{ opacity: 0, y: 150 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        {["odoo.webp"].map((img, index) => (
          <motion.section key={index} whileHover={{ scale: 1.1 }}>
            <img loading="lazy" className="imgskills" src={img} alt={img.split(".")[0]} />
            <h2>{img.split(".")[0].toUpperCase()}</h2>
          </motion.section>
        ))}
      </motion.div>
      </div>
      </div>

      {/* Outils de Développement et Design */}
      <h1 className="titrecp"><i class='bx bx-git-branch'></i>  {t("tools")}</h1>
      <motion.div className="pack" initial={{ opacity: 0, y: 150 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        {[ "git.webp","github.webp", "postman.webp","xamp.webp","figma.webp", "canva.webp", "photoshop.webp"].map((img, index) => (
          <motion.section key={index} whileHover={{ scale: 1.1 }}>
            <img loading="lazy" className="imgskills" src={img} alt={img.split(".")[0]} />
            <h2>{img.split(".")[0].toUpperCase()}</h2>
          </motion.section>
        ))}
      </motion.div>
    </div>
    </>
  );
};

export default Skills;
