import React, { useEffect, useState } from "react";
import "./homme.css";
import Header from "../Header/header";
import About from "../About/about";
import Skills from "../Skills/skills";
import Projet from "../Projet/projet";
import { useTranslation } from "react-i18next";
import Contact from "../Contact/contact";
import Cv from "../Cv/cv";
import Loader from "../Loader/loader";
import Footer from "../Footer/foother";
import { motion } from "framer-motion";
import ParticlesBackground from "../ParticlesBackground/ParticlesBackground";

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
    const { t } = useTranslation(); 

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
      {/* <ParticlesBackground/> */}
      {/* Conteneur animé */}
      <motion.div
        className="homme"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Section principale */}
        <motion.div className="container" variants={itemVariants}>
          <motion.p className="bonjour" initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1, duration: 1}}>
           {t("Bonjour")} <span className="wave-hand"></span>, {t("jesuis")}
          </motion.p>
          <motion.h1 className="nom" variants={itemVariants}>
            Nizar Douirek
          </motion.h1>
          <motion.p className="job"  initial={{ opacity: 0, x: 200 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 2, duration: 0.5 }}>
            {t("job")}
          </motion.p>
          <div className="divPaHomme">
  <motion.p className="paHomme" initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 3, duration: 0.6}}>
     {t("intro1")}
  </motion.p>
</div>

          <motion.button className="btn-homme"  initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 3, duration: 1 }}>
            <a href="#contact"> <i class="bx bx-chat icnBu"></i> {t("contactezMoi")} </a>
          </motion.button>
          <motion.button className="btn-homme1"  initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 3, duration: 1 }}>
            <a href="nizarDouirek.pdf"target="_blank"rel="noopener noreferrer">
              <i class="bx bx-download icnBu"></i> {t("telechargerCV")}</a>
          </motion.button>
        </motion.div>
       <div>
        <motion.img initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 4, duration: 1 }} src="decor7.svg" style={{marginTop:'-500px',marginLeft:'1150px',width:'350px',height:'500px'}} alt="" />
         </div>
        {/* Section des compétences */}
        <motion.div className="marquee-container2" initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 3, duration: 0.6 }}>
      <div className="marquee-content2">
          <p>{t("descriptionDev")}</p> 
          </div>
        </motion.div>

         

        {/* Décoration */}
        <motion.div className="decoration" initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 3, duration: 0.6}}>
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
{/* <img src="hoo.jpg" alt="" style={{width:'300px',height:'300px',marginTop:'-700px'}}/> */}
      {/* Autres sections */}
      <About />
      <button
        onClick={scrollToTop}
        className="Top1"
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          backgroundColor: 'transparent',
          // color: "white",
          border: "none",
          borderRadius: "50%",
          padding: "5px 5px",
          zIndex: 1,
          
          display: isVisible ? "block" : "none",
          boxShadow: "0 4px 6px rgba(95, 92, 92, 0.1)",
        }}
      >
        <img
  src="top.png"
  className="Top"
  alt="scroll up"
  style={{ width: "40px", height: "40px" }}
/>
      </button>
      <Skills />
      <Cv />
      
      <Projet />
    <motion.div className="circle-stats-container">
  <motion.div
    className="circle-card"
    initial={{ opacity: 0, x: 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3 }}
    viewport={{ once: true, amount: 0.3 }}
    whileHover={{scale: 1.1}}
  >
    <i className="bx bx-wrench iconEf"></i>
    <p className="circle-title">{t("skills")}</p>
    <p className="circle-number">+16</p>
  </motion.div>

  <motion.div
    className="circle-card"
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    viewport={{ once: true, amount: 0.3 }}
    whileHover={{scale: 1.1}}
  >
    <i className="bx bx-rocket iconEf"></i>
    <p className="circle-title">{t("projetsRealises")}</p>
    <p className="circle-number">+6</p>
  </motion.div>

  <motion.div
    className="circle-card"
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3 }}
    viewport={{ once: true, amount: 0.3 }}
     whileHover={{scale: 1.1}}
  >
    <i className="bx bx-badge-check iconEf"></i>
    <p className="circle-title">{t("certification")}</p>
    <p className="circle-number">+7</p>
  </motion.div>
</motion.div>


      <Contact />
      {/* <Footer /> */}
    </div>
  );
}