import React, { useEffect, useRef } from "react";
import './cv.css';
import Header from "../Header/header";
import Title from "../Constant/Titre";

export default function Cv() {
    const formationRef = useRef();
    const experienceRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            const formation = formationRef.current;
            const experience = experienceRef.current;

            const windowHeight = window.innerHeight;

            // Check position of Formation section
            if (formation.getBoundingClientRect().top < windowHeight - 100) {
                formation.classList.add("show");
            }

            // Check position of Experience section
            if (experience.getBoundingClientRect().top < windowHeight - 100) {
                experience.classList.add("show");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
                {/* <Header/> */}
        <div id="cv" className="cv2">
        <Title text="Parcours" size="xl" color="primary" />
            {/* <h1  className="titre1">CV</h1> */}
            <div className="fe">
                {/* Section Formation */}
                <div
                    className="f hidden"
                    ref={formationRef}
                >
                    <div className="log">
                        <h1 >Formation</h1>
                    </div>
                    <div className="divcv">
                     <div className="groupcv">
                        <img src="ofppt.png" alt="" />
                        <h2>Technicien spécialisé en développement digital option ‘full-stack web’</h2>
                      </div>
                      <span className="date">2022 - 2024</span>
                      <p className="p">
                        A l'institut spécialisé en technologie appliquée NTIC 1, Casablanca
                      </p>
                    </div>
                    <br /><br />
                    <div className="divcv">
                    <h2>Baccalauréat en Sciences de la Vie et de la Terre</h2>
                    <span className="date">2021 - 2022</span>
                    <p className="p">En Lycée Ibno-Khatib, Casablanca</p>
                    </div>
                </div>
                <hr />
                {/* Section Expériences */}
                <div
                    className="ex hidden hidden-right"
                    ref={experienceRef}
                >
                    <div className="log">
                        <h1>Expériences</h1>
                    </div>
                    <div className="divcv">
                    <div className="groupcv">
                    <img src="tecknaps.png" style={{borderRadius:'50%'}} alt="" />
                    <h2>Stage Développeur Frontend, TECHNAPS</h2>
                    </div>
                    <span className="date">Décembre 2024 - Mars 2025</span>
                    <p>
                        Développement de l'interface d'un site web de
                        réservation d'hôtels, de voitures et de restaurants<br />
                        <span className="role">Technologies utilisées :</span> React.js, CSS, MongoDB
                    </p>
                    </div>
                    <br />
                    <div className="divcv">
                    <div className="groupcv">
                    <img src="sirecom.png" alt="" />
                    <h2>Stage Développeur, SIRECOM</h2>
                    </div>
                    <span className="date">MARS 2024 - MAI 2024</span>
                    <p>
                        Développement d'une application de gestion des équipements informatiques et matériels de l'entreprise<br />
                        <span className="role">Technologies utilisées :</span> PHP, Laravel, MySQL, CSS, Bootstrap
                    </p>
                    </div>
                    <br />
                    <div className="divcv">
                    <div className="groupcv">
                    <img src="ofppt.png" alt="" />
                    
                    <h2>Projet Académique, ISTA</h2>
                    </div>
                    <span className="date"> JANVIER 2024 - Avril 2024</span>
                    <p>
                        Conception et développement d'un site web d'une agence de voyage<br />
                        <span className="role">Technologies utilisées :</span> HTML, CSS, React.js, Laravel, MySQL
                    </p>
                    </div>
                    <br />
                    {/* <div className="divcv">
                    <div className="groupcv">
                    <img src="ofppt.png" alt="" />
                    <h2>Projet Académique (en binôme), ISTA</h2>
                    </div>
                    <span className="date">2023 - 3 mois</span>
                    <p>
                        Développement d'un site web de vente en ligne<br />
                        <span className="role">Technologies utilisées :</span> HTML, CSS, Bootstrap, Angular, Node.js<br />
                        <span className="role">Rôle :</span> Responsable de la conception et du développement d’une interface intuitive, création de pages réactives, intégration de styles et optimisation de l'expérience utilisateur
                    </p>
                    </div> */}
                </div>
            </div>
        </div>
        </>
    );
}
