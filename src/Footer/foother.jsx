import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ParticlesBackground from "../ParticlesBackground/ParticlesBackground";

export default function Footer() {
  const { t } = useTranslation(); 
  const [formStatus, setFormStatus] = useState(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.7, 1], [0, 1]);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/myzevqnj", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus("Merci pour votre abonnement ! 🙌 !");
        e.target.reset();
      } else {
        setFormStatus("Une erreur est survenue. Veuillez réessayer.");
      }
    } catch (error) {
      setFormStatus("Une erreur réseau est survenue. Veuillez réessayer.");
    }

    setTimeout(() => {
      setFormStatus(null);
    }, 3000);
  };

  // Variants simplifiés pour tous les écrans
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const slideInBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const slideInTop = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.footer
      className="footer"
      ref={ref}
      style={{ opacity }}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
    
      <motion.div className="social" variants={fadeIn}>
        <motion.div className="head-foot" variants={slideInTop}>
          <div className="container-footer-form">
            <motion.form
              className="footer-newsletter"
              onSubmit={handleSubmit}
              variants={slideInTop}
            >
              <motion.input
                type="email"
                name="email"
                placeholder="Entrez votre email"
                required
                whileFocus={{ scale: 1.02 }}
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                S'abonner
              </motion.button>
              {formStatus && (
                <motion.b
                  className={`form-status ${formStatus.includes("Merci") ? "success" : "error"}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                >
                  {formStatus}
                </motion.b>
              )}
            </motion.form>
            <motion.div style={{ display: 'flex' }} variants={fadeIn} transition={{ duration: 2 }}>
              <motion.span
                animate={{
                  y: [-5, 5, -5],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                🚀
              </motion.span>
              <b> {t("restezConnecte")} </b>
            </motion.div>
          </div>
        </motion.div>

        <motion.div className="section-foot" variants={fadeIn}>
          <motion.div className="contact-foot" variants={slideInLeft}>
            <h1>{t("contactezMoi")}</h1>
            <motion.div variants={fadeIn}
            transition={{ duration: 1.5 }}>
              {[
                { href: "https://web.facebook.com/nizar.douirek.50", img: "fcb.png" },
                { href: "https://www.linkedin.com/in/nizar-douirek123/", img: "linkdeen-footer.png" },
                { href: "https://www.instagram.com/nizar_douirek", img: "insta.png" },
                { href: "https://github.com/NizarDouirek", img: "gtf.png" },
                { href: "mailto:douireknizar@gmail.com", img: "gmail.avif" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 1.3 }}
                  variants={slideInRight}
                >
                  <img src={social.img} alt="" className="social-icon" />
                </motion.a>
              ))}
            </motion.div>

            <motion.p variants={slideInBottom} transition={{ duration: 2 }}>
              <i className="fas fa-envelope"></i> douireknizar@gmail.com
            </motion.p>
            <motion.p variants={slideInBottom} transition={{ duration: 2 }}>
              <i className="fas fa-phone"></i> +212 699862707
            </motion.p>
          </motion.div>

          <motion.div className="section-nav" variants={slideInRight}>
            <h1>Pages</h1>
            <ul className="footer-links">
              <motion.li variants={slideInLeft} transition={{ duration: 2 }}>
                <motion.div whileHover={{ x: 10 }}>
                  <Link to="/about">{t("apropos")}</Link>
                </motion.div>
              </motion.li>
              <motion.li variants={slideInRight} transition={{ duration: 2 }}>
                <motion.div whileHover={{ x: 10 }}>
                  <Link to="/skills">{t("competences")}</Link>
                </motion.div>
              </motion.li>
              <motion.li variants={slideInLeft} transition={{ duration: 2 }}>
                <motion.div whileHover={{ x: 10 }}>
                  <Link to="/projet">{t("projet")}</Link>
                </motion.div>
              </motion.li>
              <motion.li variants={slideInRight} transition={{ duration: 2 }}>
                <motion.div whileHover={{ x: 10 }}>
                  <Link to="/Cv">{t("parcours")}</Link>
                </motion.div>
              </motion.li>
              <motion.li variants={slideInLeft} transition={{ duration: 2 }}>
                <motion.div whileHover={{ x: 10 }}>
                  <Link to="/contact">{t("contact")}</Link>
                </motion.div>
              </motion.li>
            </ul>
          </motion.div>

          <motion.div className="section-adrss" variants={slideInLeft} transition={{ duration: 2 }}>
            <h1>{t("adr")}</h1>
            <ul className="footer-links">
              <motion.p variants={slideInRight}>
                Hay Nassim imm:31 <br /> app:9, Casablanca
              </motion.p>
            </ul>
            <motion.button
              className="cv-foot"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={slideInBottom}
            >
              <a href="Nizar-douirek.pdf" target="_blank" rel="noopener noreferrer">
                <i class="bx bx-download icnBu"></i> {t("telechargerCV")}
              </a>
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div className="divLogo" variants={slideInRight}>
        <motion.div
          className="logofo"
          variants={slideInBottom}
          transition={{ duration: 1 }}
        >
          NIZAR
        </motion.div>
        <motion.img
          src="imgfott.png"
          alt=""
          whileHover={{
            scale: 1.05,
            rotate: [0, -20, 20, -20, 0],
            transition: { duration: 1 }
          }}
          transition={{ duration: 2 }}
          variants={slideInRight}
        />
      </motion.div>

      <motion.hr className="footer-break" variants={fadeIn} />
      <motion.p
        className="copyright"
        variants={slideInRight}
        whileHover={{ scale: 1.01 }}
      >
        copyright © NIZAR DOUIREK {new Date().getFullYear()} 🤍
      </motion.p>
    </motion.footer>
  );
}