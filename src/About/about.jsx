import React, { useEffect, useState, useRef } from "react";
import "./about.css";
import Header from "../Header/header";
import Title from "../Constant/Titre";
import { motion } from "framer-motion";

export default function About() {
    const [isVisible, setIsVisible] = useState(false);
    const aboutRef = useRef(null);

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
        {/* <Header/> */}
        <div id="about" className="about" ref={aboutRef}>
            <Title text="À propos" />
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
                        Bonjour! Je suis<span className="sp"> Nizar Douirek</span>
                    </motion.h2>
                    {/* <h4>Développeur Full Stack</h4> */}
                    <motion.p variants={{
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }}
  initial="hidden"
  animate={isVisible ? "visible" : "hidden"}
  transition={{ delay: 1, duration:1.5 }}>
                    jeune diplômé en développement digital, passionné par la


création de solutions innovantes , avec une expertise solide 
en programmation et en conception web  <br />

                        
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
                                <td><i class="bx bx-phone icn"></i> Téléphone </td>
                                <td>+212 699862707</td>
                            </tr>
                            <tr>
                                <td> <i class="bx bx-envelope icn"></i> Email </td>
                                <td>douireknizar@gmail.com</td>
                            </tr>
                            <tr>
                                <td><i class="bx bx-map icn"></i> Adresse</td>
                                <td>Hay Nassim, Casablanca</td>
                            </tr>
                            <tr>
                                <td><i class="bx bx-globe icn"></i> Langues</td>
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
             <i class="bx bxl-linkedin icnLi"></i> Visiter mon linkedin</a>
                    </motion.button>
                </div>
            </div>
        </div>
        </>
    );
}
