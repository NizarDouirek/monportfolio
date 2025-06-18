import React, { useState, useEffect } from "react";
import "./header.css";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isActive = (paths) => {
    return paths.includes(location.pathname);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [darkMode, setDarkMode] = useState(false);

  // const toggleTheme = () => {
  //   setDarkMode(!darkMode);
    
  //   document.body.style.backgroundColor = darkMode ? "white" : "gray";
  //   document.body.style.color = darkMode ? "yellow" : "white";
  // };
   const { t, i18n } = useTranslation(); // dans le composant

  const toggleLanguage = () => {
    const newLang = i18n.language === "fr" ? "en" : "fr";
    i18n.changeLanguage(newLang);
  };
  return (
    <div>
      <header className={isScrolled ? "scrolled" : ""}>
        <div className="logo">
          <img className="dn" src="dn.png" />
          {/* <h1>Nizar <span className="prenom">Douirek</span></h1> */}
          <div className="navbar">
            <nav>
              <ul>
                <li>
                  <Link
                    to="/homme"
                    style={{
                      color: isActive(["/", "/homme"]) ? "#32ca97" : "#495E57",
                    }}
                  >
                    <i className="bx bx-home-alt icnH"></i> {t("accueil")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    style={{
                      color: isActive(["/about"]) ? "#32ca97" : "#495E57",
                    }}
                  >
                    <i className="bx bx-user icnH"></i> {t("apropos")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/skills"
                    style={{
                      color: isActive(["/skills"]) ? "#32ca97" : "#495E57",
                    }}
                  >
                    <i className="bx bx-wrench icnH"></i> {t("competences")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cv"
                    style={{ color: isActive(["/cv"]) ? "#32ca97" : "#495E57" }}
                  >
                    <i className="bx bx-book icnH"></i> {t("parcours")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/projet"
                    style={{
                      color: isActive(["/projet"]) ? "#32ca97" : "#495E57",
                    }}
                  >
                    <i className="bx bx-folder icnH"></i> {t("projets")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    style={{
                      color: isActive(["/contact"]) ? "#32ca97" : "#495E57",
                    }}
                  >
                    <i className="bx bx-envelope icnH"></i> {t("contact")}
                  </Link>
                </li>
              </ul>
            </nav>
             <button
  onClick={toggleLanguage}
  className="lang-toggle"
  aria-label="Changer la langue"
>
  {/* <i className="bx bx-globe"></i> */}
    <span>{i18n.language === "fr" ? "Français" : "English"}</span>
  <img
    src={i18n.language === "fr"
      ? "https://flagcdn.com/w40/fr.png"
      : "https://flagcdn.com/w40/gb.png"}
    alt={i18n.language === "fr" ? "FR" : "EN"}
    className="flag-icon"
  />

</button>
        
            {/* <button
              onClick={toggleTheme}
              style={{
                fontSize: "27px",
                marginLeft: "120px",
                marginTop: "-30px",
                cursor: "pointer",
                background: "none",
                border: "none",
                color: darkMode ? "yellow" : "black",
              }}
            >
              <i className={darkMode ? "bx bx-sun" : "bx bx-moon"}></i>
            </button> */}
          </div>

          <div className="navbar-icons">
            <ul>
              <li>
                <Link
                  to="/homme"
                  style={{
                    color: isActive(["/", "/homme"]) ? "#379777" : "black",
                  }}
                >
                  <i className="bx bx-home-alt icnM"></i>{" "}
                  <span
                    style={{
                      color: isActive(["/", "/homme"]) ? "#379777" : "black",
                    }}
                  >
                    homme
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
                    skills
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
                    Parcours
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
                    projet
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
                    contact
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
