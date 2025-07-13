import React, { useEffect, useState, useRef } from "react";
import "./about.css";
import Header from "../Header/header";
import Title from "../Constant/Titre";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function About({ showHero = true }) {
    const [isVisible, setIsVisible] = useState(false);
    const aboutRef = useRef(null);
    const { t } = useTranslation(); 
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 } // Déclenche lorsque 50% de la section est visible
        );

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => {
            if (aboutRef.current) {
                observer.unobserve(aboutRef.current);
            }
        };
    }, []);

    return (
        <>
         {showHero && (
        <section className="hero-section">
          <div className="hero-overlay">
            <div className="hero-content">
              <h1>About</h1>
              <div className="breadcrumb">
                <Link to="/home">Home</Link><span className="spann"> • About</span> 
              </div>
            </div>
          </div>
        </section>
      )}
        {/* <Header/> */}
        <div id="about" className="about" ref={aboutRef}>
            <Title text={t("apropos")} />
            <div className={`containe ${isVisible ? "slide-in" : ""}`}>
                <img className={`i ${isVisible ? "slide-left" : ""}`} src="profillinkd.jpg" alt="Profil" />
                <div className={`contentAbout ${isVisible ? "slide-right" : ""}`}>
                    <motion.h2 variants={{
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 }
  }}
  initial="hidden"
  animate={isVisible ? "visible" : "hidden"}
  transition={{ delay: 1, duration: 0.2 }}>
                        {t("BonjourJesuis")}<span className="sp"> Nizar Douirek</span>
                    </motion.h2>
                    {/* <h4>Développeur Full Stack</h4> */}
                    <motion.p variants={{
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }}
  initial="hidden"
  animate={isVisible ? "visible" : "hidden"}
  transition={{ delay: 1, duration:1.5 }}>
                   {t("resumeAbout")} <br />

                        
                    </motion.p>
                    <motion.div variants={{
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 }
  }}
  initial="hidden"
  animate={isVisible ? "visible" : "hidden"}
  transition={{ delay: 1, duration: 1.3 }}>
                        <table>
                            <tr>
                                <td><i class="bx bx-phone icn"></i> {t("tel")} </td>
                                <td>+212 699862707</td>
                            </tr>
                            <tr>
                                <td> <i class="bx bx-envelope icn"></i> Email </td>
                                <td>douireknizar@gmail.com</td>
                            </tr>
                            <tr>
                                <td><i class="bx bx-map icn"></i> {t("adr")}</td>
                                <td>Hay Nassim, Casablanca</td>
                            </tr>
                            <tr>
                                <td><i class="bx bx-globe icn"></i> {t("langue")}</td>
                                <td>Arabe, Français, Anglais</td>
                            </tr>
                        </table>
                    </motion.div>
                    <motion.button className="cv" variants={{
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }}
  initial="hidden"
  animate={isVisible ? "visible" : "hidden"}
  transition={{ delay: 1, duration: 1.6 }}>
                        <a
                            href= "https://www.linkedin.com/in/nizar-douirek123/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
             <i class="bx bxl-linkedin icnLi"></i> {t("linkdeen")}</a>
                    </motion.button>
                </div>
            </div>
        </div>
        </>
    );
}
