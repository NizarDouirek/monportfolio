import React, { useState, useEffect } from "react";
import "./header.css";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

/* ================= ANIMATION CONFIG ================= */
const DURATION = 0.25;
const STAGGER = 0.025;

/* ================= FLIP LINK COMPONENT ================= */
const FlipNavLink = ({ to, icon, text, active }) => {
  return (
    <motion.div initial="initial" whileHover="hovered" className="flip-link">
      <Link
        to={to}
        className={active ? "active" : ""}
        style={{ color: active ? "#32ca97" : "#495E57" }}
      >
        <i className={`${icon} icnH`}></i>

        <span className="flip-text">
          {/* FIRST TEXT */}
          <span className="text-layer">
            {text.split("").map((char, i) => (
              <motion.span
                key={i}
                variants={{
                  initial: { y: 0 },
                  hovered: { y: "-100%" },
                }}
                transition={{
                  duration: DURATION,
                  ease: "easeInOut",
                  delay: STAGGER * i,
                }}
                className="char"
              >
                {char}
              </motion.span>
            ))}
          </span>

          {/* SECOND TEXT */}
          <span className="text-layer absolute">
            {text.split("").map((char, i) => (
              <motion.span
                key={i}
                variants={{
                  initial: { y: "100%" },
                  hovered: { y: 0 },
                }}
                transition={{
                  duration: DURATION,
                  ease: "easeInOut",
                  delay: STAGGER * i,
                }}
                className="char"
              >
                {char}
              </motion.span>
            ))}
          </span>
        </span>
      </Link>
    </motion.div>
  );
};

/* ================= HEADER ================= */
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const isActive = (paths) => paths.includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "fr" ? "en" : "fr");
  };

  return (
    <div className="header">
      <header className={isScrolled ? "scrolled" : ""}>
        <div className="logo">
          <img className="dn" src="dn.webp" alt="logo" />

          <div className="navbar">
            <nav>
              <ul>
                <li>
                  <FlipNavLink
                    to="/home"
                    icon="bx bx-home-alt"
                    text={t("accueil")}
                    active={isActive(["/", "/home"])}
                  />
                </li>

                <li>
                  <FlipNavLink
                    to="/about"
                    icon="bx bx-user"
                    text={t("apropos")}
                    active={isActive(["/about"])}
                  />
                </li>

                <li>
                  <FlipNavLink
                    to="/skills"
                    icon="bx bx-wrench"
                    text={t("competences")}
                    active={isActive(["/skills"])}
                  />
                </li>

                <li>
                  <FlipNavLink
                    to="/cv"
                    icon="bx bx-book"
                    text={t("parcours")}
                    active={isActive(["/cv"])}
                  />
                </li>

                <li>
                  <FlipNavLink
                    to="/projet"
                    icon="bx bx-folder"
                    text={t("projets")}
                    active={isActive(["/projet"])}
                  />
                </li>

                <li>
                  <FlipNavLink
                    to="/contact"
                    icon="bx bx-envelope"
                    text={t("contact")}
                    active={isActive(["/contact"])}
                  />
                </li>
              </ul>
            </nav>

            {/* LANGUAGE BUTTON */}
            <button onClick={toggleLanguage} className="lang-toggle">
              <img
                src={
                  i18n.language === "fr"
                    ? "https://flagcdn.com/w40/fr.png"
                    : "https://flagcdn.com/w40/gb.png"
                }
                alt="lang"
                className="flag-icon"
              />
            </button>
          </div>
          


<div className="navbar-icons">
            <ul>
              <li>
                <Link
                  to="/home"
                  style={{
                    color: isActive(["/", "/home"]) ? "#379777" : "black",
                  }}
                >
                  <i className="bx bx-home-alt icnM"></i>{" "}
                  <span
                    style={{
                      color: isActive(["/", "/home"]) ? "#379777" : "black",
                    }}
                  >
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  style={{ color: isActive(["/about"]) ? "#379777" : "black" }}
                >
                  <i className="bx bx-user icnM"></i>
                  <span
                    style={{
                      color: isActive(["/about"]) ? "#379777" : "black",
                    }}
                  >
                    About
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/skills"
                  style={{ color: isActive(["/skills"]) ? "#379777" : "black" }}
                >
                  <i className="bx bx-wrench icnM"></i>
                  <span
                    style={{
                      color: isActive(["/skills"]) ? "#379777" : "black",
                    }}
                  >
                    Skills
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/cv"
                  style={{ color: isActive(["/cv"]) ? "#379777" : "black" }}
                >
                  <i className="bx bx-book icnM"></i>
                  <span
                    style={{ color: isActive(["/cv"]) ? "#379777" : "black" }}
                  >
                    Career
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/projet"
                  style={{ color: isActive(["/projet"]) ? "#379777" : "black" }}
                >
                  <i className="bx bx-folder icnM"></i>
                  <span
                    style={{
                      color: isActive(["/projet"]) ? "#379777" : "black",
                    }}
                  >
                    Projects
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  style={{
                    color: isActive(["/contact"]) ? "#379777" : "black",
                  }}
                >
                  <i className="bx bx-envelope icnM"></i>
                  <span
                    style={{
                      color: isActive(["/contact"]) ? "#379777" : "black",
                    }}
                  >
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}



