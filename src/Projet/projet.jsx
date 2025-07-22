import React, { useState, useEffect } from "react";
import "./projet.css";
import Header from "../Header/header";
import Title from "../Constant/Titre";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CircularText from "../Constant/textcircle";

import { motion } from "framer-motion";

export default function Projet({ showHero = true }) {
  const { t } = useTranslation();
  useEffect(() => {
    const sections = document.querySelectorAll(
      ".sectionP, .sectionP2, .sectionP3, .sectionP4, .sectionP5"
    );

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Ajouter la classe 'visible' lorsque l'élément est visible à l'écran
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.5 }
    ); // Déclenche lorsque 50% de l'élément est visible

    sections.forEach((section) => {
      observer.observe(section);
    });
  }, []);
  return (
    <>
     {showHero && (
        <section className="hero-section">
          <div className="hero-overlay">
            <div className="hero-content">
              <h1>Project</h1>
              <div className="breadcrumb">
                 <Link to="/home"> <i className="bx bx-home-alt icnH"></i> Home</Link>/<span className="spann"> Project</span> 
              </div>
            </div>
          </div>
        </section>
      )}
      {/* <Header/> */}
      <div id="projet">
        <div className="projets">
          <Title text={t("projet")} />
          <p className="introprojet">{t("projetsIntro")}</p>
          <div className="projet">
            <div className="sectionP">
              <div className="contentP">
                <h1>Luxury Voyage</h1>
                <p> {t("luxuryvoyage")}</p>
                <br />

                <div className="tec">
                  <div className="tech-item">
                    <img src="react.png" alt="React.js" />
                    <span className="tooltip">React.js</span>
                  </div>
                  <div className="tech-item">
                    <img src="css.png" alt="CSS" />
                    <span className="tooltip">CSS</span>
                  </div>
                  <div className="tech-item">
                    <img src="bootstrap.png" alt="Bootstrap" />
                    <span className="tooltip">Bootstrap</span>
                  </div>
                  <div className="tech-item">
                    <img src="laravel.png" alt="Laravel" />
                    <span className="tooltip">Laravel</span>
                  </div>
                  <div className="tech-item">
                    <img src="mysql.png" alt="MySQL" />
                    <span className="tooltip">MySQL</span>
                  </div>
                </div>
                <a
                  href="https://github.com/NizarDouirek/Agence_Voyage"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="visit">
                    <i
                      className="fa-brands fa-github"
                      style={{ marginRight: "10px" }}
                    ></i>
                    visit Repository
                    
                  </button>
                </a>
                {/* <span className="project-status finished">{t("finished")}</span> */}
                <CircularText
                  text={t("finished")}
                  onHover="speedUp"
                  spinDuration={10}
                  className="custom-class"
                  status="finished"
                />
              </div>
              <a href="voyage.png" target="_blank">
                <img className="imgsite" src="voyage.png" alt="" />
              </a>
            </div>
            <br />
            <br />
            <div className="sectionP2">
              <div className="contentP">
                <h1>MyBien</h1>
                <p> {t("mybien")}</p>
                <br />
                <div className="tec">
                  <div className="tech-item">
                    <img src="laravel.png" alt="" />
                    <span className="tooltip">Laravel</span>
                  </div>
                  <div className="tech-item">
                    <img src="css.png" alt="CSS" />
                    <span className="tooltip">CSS</span>
                  </div>
                  <div className="tech-item">
                    <img src="bootstrap.png" alt="Bootstrap" />
                    <span className="tooltip">Bootstrap</span>
                  </div>
                  <div className="tech-item">
                    <img src="mysql.png" alt="MySQL" />
                    <span className="tooltip">MySQL</span>
                  </div>
                </div>
                <a
                  href="https://github.com/NizarDouirek/gestionBien"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="visit2">
                    <i
                      className="fa-brands fa-github"
                      style={{ marginRight: "10px" }}
                    ></i> visit Repository
                    
                  </button>
                </a>

                <CircularText
                  text={t("finished")}
                  onHover="speedUp"
                  spinDuration={10}
                  className="custom-class"
                  status="finished"
                />
              </div>
              <div className="imgsite-container">
                <a href="gbien.png" target="_blank">
                  <img
                    className="imgsite"
                    src="gbien.png"
                    alt=""
                    style={{ marginTop: "0.1px" }}
                  />
                </a>
              </div>
            </div>
            <br />
            <br />
            <div className="sectionP3">
              <div className="contentP">
                <h1>StoreElec</h1>
                <p> {t("storeelec")}</p>
                <br />
                <div className="tec">
                  <div className="tech-item">
                    <img src="html.png" alt="" />
                    <span className="tooltip">Html</span>
                  </div>
                  <div className="tech-item">
                    <img src="css.png" alt="CSS" />
                    <span className="tooltip">CSS</span>
                  </div>
                  <div className="tech-item">
                    <img src="bootstrap.png" alt="Bootstrap" />
                    <span className="tooltip">Bootstrap</span>
                  </div>
                  <div className="tech-item">
                    <img src="angular.svg" alt="" />
                    <span className="tooltip">Angular</span>
                  </div>
                </div>
                <a
                  href="https://github.com/NizarDouirek/StoreElec"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="visit3">
                    <i
                      className="fa-brands fa-github"
                      style={{ marginRight: "10px" }}
                    ></i>
                    visit Repository
                   
                  </button>
                </a>

                <CircularText
                  text={t("finished")}
                  onHover="speedUp"
                  spinDuration={10}
                  className="custom-class"
                  status="finished"
                />
              </div>
              <a href="storeelec.png" target="_blank">
                <img className="imgsite" src="storeelec.png" alt="" />
              </a>
            </div>
            <br />
            <br />
            <div className="sectionP4">
              <div className="contentP">
                <h1>FitTrack</h1>
                <p>{t("fittrack")}</p>
                <br />
                <div className="tec">
                  <div className="tech-item">
                    <img src="html.png" alt="" />
                    <span className="tooltip">Html</span>
                  </div>
                  <div className="tech-item">
                    <img src="css.png" alt="CSS" />
                    <span className="tooltip">CSS</span>
                  </div>
                  <div className="tech-item">
                    <img src="react.png" alt="React.js" />
                    <span className="tooltip">React.js</span>
                  </div>

                  <div className="tech-item">
                    <img src="laravel.png" alt="Laravel" />
                    <span className="tooltip">Laravel</span>
                  </div>
                  <div className="tech-item">
                    <img src="mongo-db.png" alt="" />
                    <span className="tooltip">Mongo DB</span>
                  </div>
                </div>
                <a
                  href="https://github.com/NizarDouirek/fittrack"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="visit4">
                    <i
                      className="fa-brands fa-github"
                      style={{ marginRight: "10px" }}
                    ></i>
                    visit Repository
                    
                  </button>
                </a>

                <CircularText
                  text={t("ongoing")}
                  onHover="speedUp"
                  spinDuration={10}
                  className="custom-class"
                  status="ongoing"
                />
              </div>
              <a href="fittrack.png" target="_blank">
                <img className="imgsite" src="fittrack.png" alt="" />
              </a>
            </div>
            <br />
            <br />
            <div className="sectionP5">
              <div className="contentP">
                <h1>Tasko</h1>
                <p>{t("tasko")} </p>
                <br />
                <div className="tec">
                  {/* <img src="mongo-db.png" alt="" title="MongoDB" /> */}
                  <div className="tech-item">
                    <img src="html.png" alt="" />
                    <span className="tooltip">Html</span>
                  </div>
                  <div className="tech-item">
                    <img src="css.png" alt="CSS" />
                    <span className="tooltip">CSS</span>
                  </div>
                  <div className="tech-item">
                    <img src="react.png" alt="React.js" />
                    <span className="tooltip">React.js</span>
                  </div>

                  <div className="tech-item">
                    <img src="laravel.png" alt="Laravel" />
                    <span className="tooltip">Laravel</span>
                  </div>
                  <div className="tech-item">
                    <img src="mongo-db.png" alt="" />
                    <span className="tooltip">Mongo DB</span>
                  </div>
                </div>
                <a
                  href="https://github.com/NizarDouirek/Tasko"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="visit5">
                    <i
                      className="fa-brands fa-github"
                      style={{ marginRight: "10px" }}
                    ></i>
                    visit Repository
                    
                  </button>
                </a>{" "}
                <CircularText
                  text={t("finished")}
                  onHover="speedUp"
                  spinDuration={10}
                  className="custom-class"
                  status="finished"
                />
              </div>

              <a href="tasko.png" target="_blank">
                <img className="imgsite" src="tasko.png" alt="" />
              </a>
            </div>
          </div>

          <div
            className="projets-message"
           
          >
            <p >
              {t("encours")}✨
              {/* Restez à l'écoute pour découvrir de nouvelles créations et solutions innovantes. */}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
