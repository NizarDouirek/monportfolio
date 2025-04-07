import React, { useEffect, useState } from "react";
import "./homme.css";
import Header from "../Header/header";
import About from "../About/about";
import Skills from "../Skills/skills";
import Projet from "../Projet/projet";
import Contact from "../Contact/contact";
import Cv from "../Cv/cv";
import Loader from "../Loader/loader";
import Footer from "../Footer/foother";
import { motion } from "framer-motion";

export default function Homme() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Fonction pour gérer la visibilité du bouton en fonction de la position de défilement
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Fonction pour faire défiler la page vers le haut
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Ajout de l'écouteur d'événements pour surveiller le défilement
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Animation d'entrée avec Framer Motion
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 2.8, ease: "easeOut", staggerChildren: 1.5 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  if (!isLoaded) {
    return <Loader setIsLoaded={setIsLoaded} />;
  }

  return (
    <div id="homme">
      {/* Conteneur animé */}
      <motion.div
        className="homme"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Section principale */}
        <motion.div className="container" variants={itemVariants}>
          <motion.p className="bonjour" variants={itemVariants}>
            Bonjour <span className="wave-hand"></span>, je suis
          </motion.p>
          <motion.h1 className="nom" variants={itemVariants}>
            Nizar Douirek
          </motion.h1>
          <motion.p className="job" variants={itemVariants}>
            Développeur Full Stack
          </motion.p>
          <motion.button className="btn-homme" variants={itemVariants}>
            <a href="#contact">Contactez-moi</a>
          </motion.button>
        </motion.div>

        {/* Section des compétences */}
        <motion.div className="marq" variants={itemVariants}>
          <p> Développeur FrontEnd</p>
          <p>-</p>
          <p> Développeur BackEnd</p>
          <p>-</p>
          <p> Développeur d'applications</p>
          <p>-</p>
          <p> Développeur d'interfaces utilisateur</p>
          <p>-</p>
          <p> Développeur créatif</p>
        </motion.div>

        {/* Décoration */}
        <motion.div className="decoration" variants={itemVariants}>
          <div className="carre carre1"></div>
          <div className="carre carre2"></div>
          <div className="carre carre3"></div>
          <div className="carre carre4"></div>
          <div className="carre carre5"></div>
          <div className="carre carre6"></div>
          <div className="carre carre7"></div>
          <div className="carre carre8"></div>
          <div className="carre carre9"></div>
        </motion.div>
      </motion.div>

      {/* Autres sections */}
      <About />
      <button
        onClick={scrollToTop}
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          backgroundColor: "#379777",
          color: "white",
          border: "none",
          borderRadius: "50%",
          padding: "10px 20px",
          fontSize: "25px",
          zIndex: 1,
          cursor: "pointer",
          display: isVisible ? "block" : "none",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        ↑
      </button>
      <Skills />
      <Cv />
      <Projet />
      <Contact />
      <Footer />
    </div>
  );
}