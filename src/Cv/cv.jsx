import React, { useEffect, useRef } from "react";
import './cv.css';

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
        <div id="cv" className="cv2">
            <h1  className="titre1">CV</h1>
            <div className="fe">
                {/* Section Formation */}
                <div
                    className="f hidden"
                    ref={formationRef}
                >
                    <div className="log">
                        <h1>Formation</h1>
                    </div>
                    <h2>Technicien spécialisé en développement digital option ‘full-stack web’</h2>
                    <span className="date">2022 - 2024</span>
                    <p className="p">
                        A l'institut spécialisé en technologie appliquée NTIC 1, Casablanca
                    </p>
                    <br /><br />
                    <h2>Baccalauréat en Sciences de la Vie et de la Terre</h2>
                    <span className="date">2021 - 2022</span>
                    <p className="p">En Lycée Ibno-Khatib, Casablanca</p>
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
                    <h2>Stage Développeur, SIRECOM</h2>
                    <span className="date">2024 - 2 mois</span>
                    <p>
                        Développement d'une application de gestion de biens<br />
                        <span className="role">Technologies utilisées :</span> PHP, Laravel, MySQL, CSS, Bootstrap
                    </p>
                    <br />
                    <h2>Projet Académique, ISTA</h2>
                    <span className="date">2024 - 3 mois</span>
                    <p>
                        Conception et développement d'un site web d'une agence de voyage<br />
                        <span className="role">Technologies utilisées :</span> HTML, CSS, React, Laravel, MySQL
                    </p>
                    <br />
                    <h2>Projet Académique (en binôme), ISTA</h2>
                    <span className="date">2023 - 3 mois</span>
                    <p>
                        Développement d'un site web de vente en ligne<br />
                        <span className="role">Technologies utilisées :</span> HTML, CSS, Bootstrap, Angular, Node.js<br />
                        <span className="role">Rôle :</span> Responsable de la conception et du développement d’une interface intuitive, création de pages réactives, intégration de styles et optimisation de l'expérience utilisateur
                    </p>
                </div>
            </div>
        </div>
    );
}
