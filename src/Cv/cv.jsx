import React, { useEffect, useRef } from "react";
import "./cv.css";
import Header from "../Header/header";
import Title from "../Constant/Titre";

export default function Cv() {
  const formationRef = useRef();
  const experienceRef = useRef();
  const scrollRef = useRef();


  useEffect(() => {
    const handleScroll = () => {
      const formation = formationRef.current;
      const experience = experienceRef.current;
      const certif = experienceRef.current;

      const windowHeight = window.innerHeight;

      // Check position of Formation section
      if (formation.getBoundingClientRect().top < windowHeight - 100) {
        formation.classList.add("show");
      }

      // Check position of Experience section
      if (experience.getBoundingClientRect().top < windowHeight - 100) {
        experience.classList.add("show");
      }
      if (experience.getBoundingClientRect().top < windowHeight - 100) {
        certif.classList.add("show");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const handleScrollLeft = () => {
    const container = document.getElementById("certifScroll");
    const itemWidth = container.offsetWidth / 3 + 20; // largeur d’un item + gap
    container.scrollLeft -= itemWidth * 3;
  };
  
  const handleScrollRight = () => {
    const container = document.getElementById("certifScroll");
    const itemWidth = container.offsetWidth / 3 + 20; // largeur d’un item + gap
    container.scrollLeft += itemWidth * 3;
  };

  return (
    <>
      {/* <Header/> */}
      <div id="cv" className="cv2">
        <Title text="Parcours" size="xl" color="primary" />
        {/* <h1  className="titre1">CV</h1> */}
        <div className="fe">
          {/* Section Formation */}
          {/* <div className="f" ref={formationRef}> */}
          <div className="f hidden" ref={formationRef}>
            <div className="log">
              <h1>Formation</h1>
            </div>
            <div className="divcv">
              <div className="groupcv">
                <img src="ofppt.png" alt="" />
                <h2>
                  Technicien spécialisé en développement digital option
                  ‘full-stack web’
                </h2>
              </div>
              <span className="date"> 2022 - 2024</span>
              <p
                className="p"
                style={{ letterSpacing: "1px", fontWeight: "bold" }}
              >
               📍 A l'institut spécialisé en technologie appliquée NTIC 1,
                Casablanca
              </p>
              <br/>
              <p>
              Formation axée sur la conception, le développement et le déploiement 
              d’applications web dynamiques, incluant des projets pratiques avec React.js et Laravel,
              </p>
            </div>
            <br />
            <br />
            <div className="divcv">
               <div className="groupcv">
               <img src="eco.jpg"  style={{borderRadius:'50%'}} alt="" />
              <h2>Baccalauréat en Sciences de la Vie et de la Terre</h2>
              </div>
              <span className="date"> 2021 - 2022</span>
              <p
                className="p"
                style={{ letterSpacing: "1px", fontWeight: "bold" }}
              >
               📍 En Lycée Ibno-Khatib, Casablanca
              </p>
            </div>
          </div>
          <hr />
          {/* Section Expériences */}
          {/* <div className="ex" ref={experienceRef}> */}
          <div className="ex hidden hidden-right" ref={experienceRef}>
            <div className="log">
              <h1>Expériences</h1>
            </div>
            <div className="divcv">
              <div className="groupcv">
                <img
                  src="vnb-it.jfif"
                  style={{ borderRadius: "50%" }}
                  alt=""
                />
                <h2>Stage Développeur mobile Full stack, VNB-IT</h2>
              </div>
              <span className="date">Mars 2022 - aujourd'hui</span>
              <p>
              développement de l’application mobile LCR, plateforme numérique de
               l’auto-école GMP, axée sur la formation accélérée à la conduite et 
               l’accompagnement personnalisé des élèves.
                <br />
                <span className="role">Technologies utilisées :</span> React Native,
                CSS,postgresql,Git


              </p>
              <br />
              {/* <button className="see-more-btn">
                <a
                  href="aa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  attestation
                </a>
              </button> */}
            </div><br />
            <div className="divcv">
              <div className="groupcv">
                <img
                  src="tecknaps.png"
                  style={{ borderRadius: "50%" }}
                  alt=""
                />
                <h2>Stage Développeur Full stack, TECHNAPS</h2>
              </div>
              <span className="date">Décembre 2024 - Mars 2025</span>
              <p>
                Développement de l'interface d'un site web de réservation
                d'hôtels, de voitures et de restaurants
                <br />
                <span className="role">Technologies utilisées :</span> React.js,
                CSS, MongoDB, Git
              </p>
              <br />
              <button className="see-more-btn">
                <a
                  href="attestationTeckNaps.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  attestation
                </a>
              </button>
            </div>
            <br />
            <div className="divcv">
              <div className="groupcv">
                <img src="sirecom.png" alt="" />
                <h2>Stage Développeur full stack - laravel, SIRECOM</h2>
              </div>
              <span className="date">MARS 2024 - MAI 2024</span>
              <p>
                Développement d'une application de gestion des équipements
                informatiques et matériels de l'entreprise
                <br />
                <span className="role">Technologies utilisées :</span> PHP,
                Laravel, MySQL, CSS, Bootstrap ,Git
              </p>
            </div>
            <br />
            {/* <div className="divcv">
              <div className="groupcv">
                <img src="ofppt.png" alt="" />

                <h2>Projet Académique, ISTA</h2>
              </div>
              <span className="date"> JANVIER 2024 - Avril 2024</span>
              <p>
                Conception et développement d'un site web d'une agence de voyage
                <br />
                <span className="role">Technologies utilisées :</span> HTML,
                CSS, React.js, Laravel, MySQL
              </p>
            </div>
            <br /> */}
          </div>
        </div>
        {/* <div className="cer">
          <div className="log2">
            <h1>Certifications</h1>
          </div>
          <div className="certif-container">
          <button className="arrow left"onClick={handleScrollLeft} >←</button>
          
        
          <div id="certifScroll" className="imgcertif" ref={scrollRef}>
          
            <div className="itemcertif">
              <a
                href="reactUdemy.jpg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="reactUdemy.jpg" alt="Certification React Udemy" />
              </a>
              <div className="certif-text">
                <h3>
                  Certification Udemy – React JS <span>(Février 2025)</span>
                </h3>
                <p>
                Ce cours m’a permis de renforcer mes compétences en React.js,
                 notamment sur les hooks, le state et la création d’interfaces dynamiques
                </p>
              </div>
            </div>
            <div className="itemcertif">
              <a
                href="reactUdemy.jpg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="reactUdemy.jpg" alt="Certification React Udemy" />
              </a>
              <div className="certif-text">
                <h3>
                  Certification Udemy – React JS <span>(Février 2025)</span>
                </h3>
                <p>
                  
                Ce cours m’a permis de renforcer mes compétences en React.js,
                 notamment sur les hooks, le state et la création d’interfaces dynamiques
                </p>
              </div>
            </div>
            <div className="itemcertif">
              <a
                href="reactUdemy.jpg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="reactUdemy.jpg" alt="Certification React Udemy" />
              </a>
              <div className="certif-text">
                <h3>
                  Certification Udemy – React JS <span>(Février 2025)</span>
                </h3>
                <p>
                  
                Ce cours m’a permis de renforcer mes compétences en React.js,
                 notamment sur les hooks, le state et la création d’interfaces dynamiques
                </p>
              </div>
            </div>
            <div className="itemcertif">
              <a
                href="reactUdemy.jpg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="reactUdemy.jpg" alt="Certification React Udemy" />
              </a>
              <div className="certif-text">
                <h3>
                  Certification Udemy – React JS <span>(Février 2025)</span>
                </h3>
                <p>
                  
              hello Nizar
                </p>
              </div>
            </div>
            <div className="itemcertif">
              <a
                href="reactUdemy.jpg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="reactUdemy.jpg" alt="Certification React Udemy" />
              </a>
              <div className="certif-text">
                <h3>
                  Certification Udemy – React JS <span>(Février 2025)</span>
                </h3>
                <p>
                helloo
                </p>
              </div>
            </div>

            
          </div>
          <button className="arrow right" onClick={handleScrollRight}>→</button>
          </div> */}
        {/* </div> */}
      </div>
    </>
  );
}
