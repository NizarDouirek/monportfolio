import React, { useEffect, useRef } from "react";
import "./cv.css";
import Header from "../Header/header";
import Title from "../Constant/Titre";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Certifications from "../Constant/Certification/certification";

export default function Cv({ showHero = true }) {
  const formationRef = useRef();
  const experienceRef = useRef();
  const scrollRef = useRef();
  const { t } = useTranslation();

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
      {showHero && (
        <section className="hero-section">
          <div className="hero-overlay">
            <div className="hero-content">
              <h1>Parcours</h1>
              <div className="breadcrumb">
                <Link to="/home">
                  {" "}
                  <i className="bx bx-home-alt icnH"></i> Home
                </Link>
                /<span className="spann"> Parcours</span>
              </div>
            </div>
          </div>
        </section>
      )}
      <div id="cv" className="cv2">
        <Title text={t("parcours")} size="xl" color="primary" />
        <div className="fe">
          <div className="f hidden" ref={formationRef}>
            <div className="log">
              <h1>
               <i class='bx bx-book-open'></i> {t("formation")}
              </h1>
            </div>
            <div className="divcv">
              <div className="groupcv">
                <img
                  loading="lazy"
                  src="tecknaps.webp"
                  alt=""
                  style={{ borderRadius: "50%" }}
                />
                <h2>{t("forodoo")}</h2>
              </div>
              <span className="date">{t("dateForodoo")}</span>
              <p
                className="p"
                style={{ letterSpacing: "1px", fontWeight: "bold" }}
              ></p>

              <p>{t("descodoo")}</p>
              <br />
              <button className="see-more-btn">
                <a
                  href="attestationFormationOdoo.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="bx bx-link-external"></i>
                  {t("attestationTechnaps")}
                </a>
              </button>
            </div>
            <br />
            <br />

            <div className="divcv">
              <div className="groupcv">
                <img loading="lazy" src="ofppt.webp" alt="" />
                <h2>{t("dts")}</h2>
              </div>
              <span className="date"> 2022 - 2024</span>
              <p
                className="p"
                style={{ letterSpacing: "1px", fontWeight: "bold" }}
              >
                {t("ecoleista")}
              </p>
              <br />
              <p>{t("dscIsta")}</p>
            </div>
            <br />
            <br />
            <div className="divcv">
              <div className="groupcv">
                <img
                  loading="lazy"
                  src="eco.jpg"
                  style={{ borderRadius: "50%" }}
                  alt=""
                />
                <h2>{t("bac")}</h2>
              </div>
              <span className="date"> 2021 - 2022</span>
              <p
                className="p"
                style={{ letterSpacing: "1px", fontWeight: "bold" }}
              >
                {t("ecolebac")}
              </p>
            </div>
          </div>
          <hr />
          {/* Section Expériences */}
          <div className="ex hidden hidden-right" ref={experienceRef}>
            <div className="log">
              <h1>
                {" "}
                <i class='bx bx-briefcase'></i>  {t("experience")}
              </h1>
            </div>
            <div className="divcv">
              <div className="groupcv">
                <img
                  loading="lazy"
                  src="vnb-it.jfif"
                  style={{ borderRadius: "50%" }}
                  alt=""
                />
                <h2> {t("stagevnb")}</h2>
              </div>
              <span className="date"> {t("datedevnb")}</span>
              <p>
                {t("descvnb")}
                <br />
                <span className="role"> {t("techvnb")} </span> React Native,
                CSS,postgresql,Git
              </p>
              <br />
              <button className="see-more-btn">
                <a
                  href="AttestationVNB.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="bx bx-link-external"></i>
                  {t("attestationTechnaps")}
                </a>
              </button>
            </div>
            <br />
            <div className="divcv">
              <div className="groupcv">
                <img
                  loading="lazy"
                  src="tecknaps.webp"
                  style={{ borderRadius: "50%" }}
                  alt=""
                />
                <h2>{t("stageTechnaps")}</h2>
              </div>
              <span className="date">{t("dateTechnaps")}</span>
              <p>
                {t("descTechnaps")}
                <br />
                <span className="role">{t("techvnb")}</span> React.js, CSS,
                MongoDB, Git
              </p>
              <br />
              <button className="see-more-btn">
                <a
                  href="attestationTeckNaps.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="bx bx-link-external"></i>
                  {t("attestationTechnaps")}
                </a>
              </button>
            </div>
            <br />
            <div className="divcv">
              <div className="groupcv">
                <img loading="lazy" src="sirecom.png" alt="" />
                <h2>{t("stageSirecom")}</h2>
              </div>
              <span className="date">{t("dateSirecom")}</span>
              <p>
                {t("descSirecom")}
                <br />
                <span className="role">{t("techvnb")}</span> PHP, Laravel,
                MySQL, CSS, Bootstrap ,Git
              </p>
            </div>
            <br />
          </div>
        </div><br />
        <Certifications/>
      </div>
    </>
  );
}
