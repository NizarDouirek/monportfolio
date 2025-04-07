import React from "react";
import "./skills.css";
import Title from "../Constant/Titre";
import { motion } from "framer-motion";

const Skills = () => {
  const characters = [
    {
      name: "Développeur FrontEnd",
      image: "front.avif",
      description:
        "Passionné par la conception d'interfaces modernes et intuitives, des designs élégants et fonctionnels, je transforme les idées en expériences web performantes. Expert en HTML, CSS, Bootstrap, JavaScript et React."
    },
    {
      name: "Développeur BackEnd",
      image: "k1.jpg",
      description:
        "Je crée  des solutions backend performantes et sur mesure, garantissant fiabilité, évolutivité et sécurité. Avec une expertise reconnue en PHP et Laravel. Maîtrisant les bases de données relationnelles et NoSQL."
    },
    {
      name: "Designer",
      image: "design.webp",
      description:
        "Je suis passionné par le design et j’ai développé une expertise sur des outils comme Figma, Canva et Adobe Photoshop, me permettant de créer des interfaces modernes et attrayantes 🎨✨"
    }
  ];

  return (
    <div id="skills" className="skills">
      <Title text="Compétences" />
      <p className="hover-instruction">💡 Survolez les cartes pour en savoir plus !</p>

      <div className="containerskills">
        {characters.map((character, index) => (
          <motion.div
            key={index}
            className="cardskills"
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
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
      <h1 className="titrecp">Langages et Frameworks</h1>
      <motion.div className="pack" initial={{ opacity: 0, y: 150 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        {["html.png", "css.png", "javascript.png", "php.png", "bootstrap.png", "react.png","react-native.png", "laravel.png"].map((img, index) => (
          <motion.section key={index} whileHover={{ scale: 1.1 }}>
            <img className="imgskills" src={img} alt={img.split(".")[0]} />
            <h2>{img.split(".")[0].toUpperCase()}</h2>
          </motion.section>
        ))}
      </motion.div>

      {/* Bases de données */}
      <h1 className="titrecp">Base de données</h1>
      <motion.div className="pack" initial={{ opacity: 0, y: 150 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        {["mysql.png", "mongo-db.png"].map((img, index) => (
          <motion.section key={index} whileHover={{ scale: 1.1 }}>
            <img className="imgskills" src={img} alt={img.split(".")[0]} />
            <h2>{img.split(".")[0].toUpperCase()}</h2>
          </motion.section>
        ))}
      </motion.div>

      {/* Outils de Développement et Design */}
      <h1 className="titrecp">Outils de Développement et de Design</h1>
      <motion.div className="pack" initial={{ opacity: 0, y: 150 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        {["github.png", "git.png", "postman.png","figma.png", "canva.webp", "photoshop.png"].map((img, index) => (
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
