import React from "react";
import "./skills.css";
import Title from "../Constant/Titre";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Skills = () => {
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
    <div id="skills" className="skills">
      <Title text={t("competences" )}/>
      <p className="hover-instruction">{t("hover")}</p>

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
              <img src={character.image} alt={character.name} />
            </div>
            <div className="card-details">
              <h2>{character.name}</h2>
              <p>{character.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Langages et Frameworks */}
      <h1 className="titrecp"><i class="fas fa-puzzle-piece"></i> {t("languagesFrameworks")}</h1>
      <motion.div className="pack" initial={{ opacity: 0, y: 150 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5}}>
        {["html.png", "css.png", "javascript.png", "php.png", "bootstrap.png", "react.png","react-native.png", "laravel.png"].map((img, index) => (
          <motion.section key={index} whileHover={{ scale: 1.1 }}>
            <img className="imgskills" src={img} alt={img.split(".")[0]} />
            <h2>{img.split(".")[0].toUpperCase()}</h2>
          </motion.section>
        ))}
      </motion.div>

      {/* Bases de données */}
      <div className="cardTwo">
        <div>
      <h1 className="titrecp"><i class="fas fa-database"></i> {t("databases")}</h1>
      <motion.div className="pack" initial={{ opacity: 0, y: 150 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }}>
        {["mysql.png", "mongo-db.png"].map((img, index) => (
          <motion.section key={index} whileHover={{ scale: 1.1 }}>
            <img className="imgskills" src={img} alt={img.split(".")[0]} />
            <h2>{img.split(".")[0].toUpperCase()}</h2>
          </motion.section>
        ))}
      </motion.div>
      </div>
      <div>
      <h1 className="titrecp"><i class="fas fa-th-large"></i> ERP - CMC</h1>
      <motion.div className="pack" initial={{ opacity: 0, y: 150 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }}>
        {["odoo.png"].map((img, index) => (
          <motion.section key={index} whileHover={{ scale: 1.1 }}>
            <img className="imgskills" src={img} alt={img.split(".")[0]} />
            <h2>{img.split(".")[0].toUpperCase()}</h2>
          </motion.section>
        ))}
      </motion.div>
      </div>
      </div>

      {/* Outils de Développement et Design */}
      <h1 className="titrecp"><i class="fas fa-tools"></i> {t("tools")}</h1>
      <motion.div className="pack" initial={{ opacity: 0, y: 150 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }}>
        {[ "git.png","github.png", "postman.png","figma.png", "canva.webp", "photoshop.png"].map((img, index) => (
          <motion.section key={index} whileHover={{ scale: 1.1 }}>
            <img className="imgskills" src={img} alt={img.split(".")[0]} />
            <h2>{img.split(".")[0].toUpperCase()}</h2>
          </motion.section>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
