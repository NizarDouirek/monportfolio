import React, { useState, useEffect } from "react";
import "./projet.css";
import Header from "../Header/header";
import Title from "../Constant/Titre";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ExternalLink } from "lucide-react";
import CircularText from "../Constant/textcircle";

import { motion } from "framer-motion";

export default function Projet({ showHero = true }) {
  const { t } = useTranslation();
  useEffect(() => {
    const sections = document.querySelectorAll(
      ".sectionP, .sectionP2, .sectionP3, .sectionP4, .sectionP5, .sectionP7"
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
            <div className="sectionP4">
              <div className="contentP">
                <h1>FitTrack</h1>
                <p>{t("fittrack")}</p>
                <br />
                <div className="tec">
                  <div className="tech-item">
                    <img src="html.avif" alt="" />
                    <span className="tooltip">Html</span>
                  </div>
                  <div className="tech-item">
                    <img src="css.avif" alt="CSS" />
                    <span className="tooltip">CSS</span>
                  </div>
                  <div className="tech-item">
                    <img src="react.webp" alt="React.js" />
                    <span className="tooltip">React.js</span>
                  </div>

                  <div className="tech-item">
                    <img src="laravel.webp" alt="Laravel" />
                    <span className="tooltip">Laravel</span>
                  </div>
                  <div className="tech-item">
                    <img src="mongo-db.webp" alt="" />
                    <span className="tooltip">Mongo DB</span>
                  </div>
                </div>
                  <div className="nbv">
                <a
                  href="https://github.com/NizarDouirek/fittrack"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="visit4">
                    
                    <svg class="github-icon" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12,0.5C5.37,0.5,0,5.87,0,12.5C0,17.88,3.44,22.38,8.21,23.93
      c0.6,0.11,0.82-0.26,0.82-0.58c0-0.29-0.01-1.06-0.02-2.08
      c-3.34,0.73-4.04-1.61-4.04-1.61c-0.55-1.39-1.34-1.76-1.34-1.76
      c-1.1-0.75,0.08-0.74,0.08-0.74c1.22,0.09,1.86,1.25,1.86,1.25
      c1.08,1.85,2.83,1.32,3.52,1.01c0.11-0.78,0.42-1.32,0.76-1.63
      c-2.67-0.3-5.47-1.34-5.47-5.95c0-1.31,0.47-2.38,1.24-3.22
      C4.56,8.49,4.22,7.47,4.83,5.97c0,0,1.01-0.32,3.3,1.23
      c0.96-0.27,1.98-0.41,3-0.41s2.04,0.14,3,0.41c2.29-1.55,3.3-1.23,3.3-1.23
      c0.61,1.5,0.27,2.52,0.13,2.79c0.77,0.84,1.24,1.91,1.24,3.22
      c0,4.62-2.8,5.65-5.48,5.95c0.43,0.37,0.81,1.1,0.81,2.22
      c0,1.6-0.01,2.89-0.01,3.28c0,0.32,0.22,0.7,0.83,0.58
      C20.57,22.38,24,17.88,24,12.5C24,5.87,18.63,0.5,12,0.5z"/>
    </svg>
                    visit Repository
                    
                  </button>
                </a>
                 <a 
      href="https://fit-track-coral.vercel.app/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="visit-icon-btn"
    >
      <button  className="visit4">Demo
      <ExternalLink size={22} />
      </button>
    </a>
</div>
                <CircularText
                  text={t("ongoing")}
                  onHover="speedUp"
                  spinDuration={10}
                  className="custom-class"
                  status="ongoing"
                />
              </div>
              <a href="https://fit-track-coral.vercel.app/" target="_blank">
                <img className="imgsite" src="fittrack.webp" alt="" />
              </a>
            </div>
            <br />
            <br />
            <div className="sectionP7">
              <div className="contentP">
                <h1>AlphaWeb</h1>
                <p>{t("alphaweb")}</p>
                <br />
                <div className="tec">
                  <div className="tech-item">
                    <img src="html.avif" alt="" />
                    <span className="tooltip">Html</span>
                  </div>
                  <div className="tech-item">
                    <img src="css.avif" alt="CSS" />
                    <span className="tooltip">CSS</span>
                  </div>
                  <div className="tech-item">
                    <img src="react.webp" alt="React.js" />
                    <span className="tooltip">React.js</span>
                  </div>

                  <div className="tech-item">
                    <img src="laravel.webp" alt="Laravel" />
                    <span className="tooltip">Laravel</span>
                  </div>
                  <div className="tech-item">
                    <img src="mongo-db.webp" alt="" />
                    <span className="tooltip">Mongo DB</span>
                  </div>
                </div>
                  <div className="nbv">
                <a
                  href="https://github.com/NizarDouirek/fittrack"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="visit7">
                    
                    <svg class="github-icon" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12,0.5C5.37,0.5,0,5.87,0,12.5C0,17.88,3.44,22.38,8.21,23.93
      c0.6,0.11,0.82-0.26,0.82-0.58c0-0.29-0.01-1.06-0.02-2.08
      c-3.34,0.73-4.04-1.61-4.04-1.61c-0.55-1.39-1.34-1.76-1.34-1.76
      c-1.1-0.75,0.08-0.74,0.08-0.74c1.22,0.09,1.86,1.25,1.86,1.25
      c1.08,1.85,2.83,1.32,3.52,1.01c0.11-0.78,0.42-1.32,0.76-1.63
      c-2.67-0.3-5.47-1.34-5.47-5.95c0-1.31,0.47-2.38,1.24-3.22
      C4.56,8.49,4.22,7.47,4.83,5.97c0,0,1.01-0.32,3.3,1.23
      c0.96-0.27,1.98-0.41,3-0.41s2.04,0.14,3,0.41c2.29-1.55,3.3-1.23,3.3-1.23
      c0.61,1.5,0.27,2.52,0.13,2.79c0.77,0.84,1.24,1.91,1.24,3.22
      c0,4.62-2.8,5.65-5.48,5.95c0.43,0.37,0.81,1.1,0.81,2.22
      c0,1.6-0.01,2.89-0.01,3.28c0,0.32,0.22,0.7,0.83,0.58
      C20.57,22.38,24,17.88,24,12.5C24,5.87,18.63,0.5,12,0.5z"/>
    </svg>
                    visit Repository
                    
                  </button>
                </a>
                 <a 
      href="https://alpha-web-39zc.vercel.app/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="visit-icon-btn"
    >
      <button  className="visit7">Demo
      <ExternalLink size={22} />
      </button>
    </a>
</div>
                <CircularText
                  text={t("ongoing")}
                  onHover="speedUp"
                  spinDuration={10}
                  className="custom-class"
                  status="ongoing"
                />
              </div>
              <a href="https://alpha-web-39zc.vercel.app/" target="_blank">
                <img className="imgsite" src="alphaweb.png" alt="" />
              </a>
            </div>
            <br />
            <br />
            <div className="sectionP">
              <div className="contentP">
                <h1>Luxury Voyage</h1>
                <p> {t("luxuryvoyage")}</p>
                <br />

                <div className="tec">
                  <div className="tech-item">
                    <img src="react.webp" alt="React.js" />
                    <span className="tooltip">React.js</span>
                  </div>
                  <div className="tech-item">
                    <img src="css.avif" alt="CSS" />
                    <span className="tooltip">CSS</span>
                  </div>
                  <div className="tech-item">
                    <img src="bootstrap.avif" alt="Bootstrap" />
                    <span className="tooltip">Bootstrap</span>
                  </div>
                  <div className="tech-item">
                    <img src="laravel.webp" alt="Laravel" />
                    <span className="tooltip">Laravel</span>
                  </div>
                  <div className="tech-item">
                    <img src="mysql.webp" alt="MySQL" />
                    <span className="tooltip">MySQL</span>
                  </div>
                </div>
                <div className="nbv">
                <a
                  href="https://github.com/NizarDouirek/Agence_Voyage"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="visit">
                    <svg class="github-icon" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12,0.5C5.37,0.5,0,5.87,0,12.5C0,17.88,3.44,22.38,8.21,23.93
      c0.6,0.11,0.82-0.26,0.82-0.58c0-0.29-0.01-1.06-0.02-2.08
      c-3.34,0.73-4.04-1.61-4.04-1.61c-0.55-1.39-1.34-1.76-1.34-1.76
      c-1.1-0.75,0.08-0.74,0.08-0.74c1.22,0.09,1.86,1.25,1.86,1.25
      c1.08,1.85,2.83,1.32,3.52,1.01c0.11-0.78,0.42-1.32,0.76-1.63
      c-2.67-0.3-5.47-1.34-5.47-5.95c0-1.31,0.47-2.38,1.24-3.22
      C4.56,8.49,4.22,7.47,4.83,5.97c0,0,1.01-0.32,3.3,1.23
      c0.96-0.27,1.98-0.41,3-0.41s2.04,0.14,3,0.41c2.29-1.55,3.3-1.23,3.3-1.23
      c0.61,1.5,0.27,2.52,0.13,2.79c0.77,0.84,1.24,1.91,1.24,3.22
      c0,4.62-2.8,5.65-5.48,5.95c0.43,0.37,0.81,1.1,0.81,2.22
      c0,1.6-0.01,2.89-0.01,3.28c0,0.32,0.22,0.7,0.83,0.58
      C20.57,22.38,24,17.88,24,12.5C24,5.87,18.63,0.5,12,0.5z"/>
    </svg>
                    visit Repository
                    
                  </button>
                </a>
               
      <button  className="visit">Demo
      <ExternalLink size={22} />
      </button>
    
    </div>

                {/* <span className="project-status finished">{t("finished")}</span> */}
                <CircularText
                  text={t("finished")}
                  onHover="speedUp"
                  spinDuration={10}
                  className="custom-class"
                  status="finished"
                />
              </div>
              <a href="voyage.webp" target="_blank">
                <img className="imgsite" src="voyage.webp" alt="" />
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
                    <img src="laravel.webp" alt="" />
                    <span className="tooltip">Laravel</span>
                  </div>
                  <div className="tech-item">
                    <img src="css.avif" alt="CSS" />
                    <span className="tooltip">CSS</span>
                  </div>
                  <div className="tech-item">
                    <img src="bootstrap.avif" alt="Bootstrap" />
                    <span className="tooltip">Bootstrap</span>
                  </div>
                  <div className="tech-item">
                    <img src="mysql.webp" alt="MySQL" />
                    <span className="tooltip">MySQL</span>
                  </div>
                </div>
                  <div className="nbv">
                <a
                  href="https://github.com/NizarDouirek/gestionBien"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="visit2">
                    <svg class="github-icon" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12,0.5C5.37,0.5,0,5.87,0,12.5C0,17.88,3.44,22.38,8.21,23.93
      c0.6,0.11,0.82-0.26,0.82-0.58c0-0.29-0.01-1.06-0.02-2.08
      c-3.34,0.73-4.04-1.61-4.04-1.61c-0.55-1.39-1.34-1.76-1.34-1.76
      c-1.1-0.75,0.08-0.74,0.08-0.74c1.22,0.09,1.86,1.25,1.86,1.25
      c1.08,1.85,2.83,1.32,3.52,1.01c0.11-0.78,0.42-1.32,0.76-1.63
      c-2.67-0.3-5.47-1.34-5.47-5.95c0-1.31,0.47-2.38,1.24-3.22
      C4.56,8.49,4.22,7.47,4.83,5.97c0,0,1.01-0.32,3.3,1.23
      c0.96-0.27,1.98-0.41,3-0.41s2.04,0.14,3,0.41c2.29-1.55,3.3-1.23,3.3-1.23
      c0.61,1.5,0.27,2.52,0.13,2.79c0.77,0.84,1.24,1.91,1.24,3.22
      c0,4.62-2.8,5.65-5.48,5.95c0.43,0.37,0.81,1.1,0.81,2.22
      c0,1.6-0.01,2.89-0.01,3.28c0,0.32,0.22,0.7,0.83,0.58
      C20.57,22.38,24,17.88,24,12.5C24,5.87,18.63,0.5,12,0.5z"/>
    </svg> visit Repository
                    
                  </button>
                </a>
                
      <button  className="visit2">Demo
      <ExternalLink size={22} />
      </button>
    
                </div>

                <CircularText
                  text={t("finished")}
                  onHover="speedUp"
                  spinDuration={10}
                  className="custom-class"
                  status="finished"
                />
              </div>
              <div className="imgsite-container">
                <a href="gbien.webp" target="_blank">
                  <img
                    className="imgsite"
                    src="gbien.webp"
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
                    <img src="html.avif" alt="" />
                    <span className="tooltip">Html</span>
                  </div>
                  <div className="tech-item">
                    <img src="css.avif" alt="CSS" />
                    <span className="tooltip">CSS</span>
                  </div>
                  <div className="tech-item">
                    <img src="bootstrap.avif" alt="Bootstrap" />
                    <span className="tooltip">Bootstrap</span>
                  </div>
                  <div className="tech-item">
                    <img src="angular.svg" alt="" />
                    <span className="tooltip">Angular</span>
                  </div>
                </div>
                  <div className="nbv">
                <a
                  href="https://github.com/NizarDouirek/StoreElec"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="visit3">
                    <svg class="github-icon" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12,0.5C5.37,0.5,0,5.87,0,12.5C0,17.88,3.44,22.38,8.21,23.93
      c0.6,0.11,0.82-0.26,0.82-0.58c0-0.29-0.01-1.06-0.02-2.08
      c-3.34,0.73-4.04-1.61-4.04-1.61c-0.55-1.39-1.34-1.76-1.34-1.76
      c-1.1-0.75,0.08-0.74,0.08-0.74c1.22,0.09,1.86,1.25,1.86,1.25
      c1.08,1.85,2.83,1.32,3.52,1.01c0.11-0.78,0.42-1.32,0.76-1.63
      c-2.67-0.3-5.47-1.34-5.47-5.95c0-1.31,0.47-2.38,1.24-3.22
      C4.56,8.49,4.22,7.47,4.83,5.97c0,0,1.01-0.32,3.3,1.23
      c0.96-0.27,1.98-0.41,3-0.41s2.04,0.14,3,0.41c2.29-1.55,3.3-1.23,3.3-1.23
      c0.61,1.5,0.27,2.52,0.13,2.79c0.77,0.84,1.24,1.91,1.24,3.22
      c0,4.62-2.8,5.65-5.48,5.95c0.43,0.37,0.81,1.1,0.81,2.22
      c0,1.6-0.01,2.89-0.01,3.28c0,0.32,0.22,0.7,0.83,0.58
      C20.57,22.38,24,17.88,24,12.5C24,5.87,18.63,0.5,12,0.5z"/>
    </svg>
                    visit Repository
                   
                  </button>
                </a>
                 <a 
      href="https://hakim2mezrioui.github.io/storElec/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="visit-icon-btn"
    >
      <button  className="visit3">Demo
      <ExternalLink size={22} />
      </button>
    </a>
</div>
                <CircularText
                  text={t("finished")}
                  onHover="speedUp"
                  spinDuration={10}
                  className="custom-class"
                  status="finished"
                />
              </div>
              <a href="https://hakim2mezrioui.github.io/storElec/" target="_blank">
                <img className="imgsite" src="storeelec.webp" alt="" />
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
                  {/* <img src="mongo-db.webp" alt="" title="MongoDB" /> */}
                  <div className="tech-item">
                    <img src="html.avif" alt="" />
                    <span className="tooltip">Html</span>
                  </div>
                  <div className="tech-item">
                    <img src="css.avif" alt="CSS" />
                    <span className="tooltip">CSS</span>
                  </div>
                  <div className="tech-item">
                    <img src="react.webp" alt="React.js" />
                    <span className="tooltip">React.js</span>
                  </div>

                  <div className="tech-item">
                    <img src="laravel.webp" alt="Laravel" />
                    <span className="tooltip">Laravel</span>
                  </div>
                  <div className="tech-item">
                    <img src="mongo-db.webp" alt="" />
                    <span className="tooltip">Mongo DB</span>
                  </div>
                </div>
                  <div className="nbv">
                <a
                  href="https://github.com/NizarDouirek/Tasko"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="visit5">
                    <svg class="github-icon" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12,0.5C5.37,0.5,0,5.87,0,12.5C0,17.88,3.44,22.38,8.21,23.93
      c0.6,0.11,0.82-0.26,0.82-0.58c0-0.29-0.01-1.06-0.02-2.08
      c-3.34,0.73-4.04-1.61-4.04-1.61c-0.55-1.39-1.34-1.76-1.34-1.76
      c-1.1-0.75,0.08-0.74,0.08-0.74c1.22,0.09,1.86,1.25,1.86,1.25
      c1.08,1.85,2.83,1.32,3.52,1.01c0.11-0.78,0.42-1.32,0.76-1.63
      c-2.67-0.3-5.47-1.34-5.47-5.95c0-1.31,0.47-2.38,1.24-3.22
      C4.56,8.49,4.22,7.47,4.83,5.97c0,0,1.01-0.32,3.3,1.23
      c0.96-0.27,1.98-0.41,3-0.41s2.04,0.14,3,0.41c2.29-1.55,3.3-1.23,3.3-1.23
      c0.61,1.5,0.27,2.52,0.13,2.79c0.77,0.84,1.24,1.91,1.24,3.22
      c0,4.62-2.8,5.65-5.48,5.95c0.43,0.37,0.81,1.1,0.81,2.22
      c0,1.6-0.01,2.89-0.01,3.28c0,0.32,0.22,0.7,0.83,0.58
      C20.57,22.38,24,17.88,24,12.5C24,5.87,18.63,0.5,12,0.5z"/>
    </svg>
                    visit Repository
                    
                  </button>
                </a>
                 <a 
      href="https://tasko-silk.vercel.app/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="visit-icon-btn"
    >
      <button  className="visit5">Demo
      <ExternalLink size={22} />
      </button>
    </a></div>{" "}
                <CircularText
                  text={t("finished")}
                  onHover="speedUp"
                  spinDuration={10}
                  className="custom-class"
                  status="finished"
                />
              </div>

              <a href="https://tasko-silk.vercel.app/" target="_blank">
                <img className="imgsite" src="tasko.webp" alt="" />
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
