import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

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
            <motion.div
              style={{ display: "flex" }}
              variants={fadeIn}
              transition={{ duration: 0.4 }}
            >
              <motion.span
                animate={{
                  y: [-5, 5, -5],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                🚀
              </motion.span>
              <b> {t("restezConnecte")} </b>
            </motion.div>
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
              
                whileTap={{ scale: 0.95 }}
              >
                S'abonner
              </motion.button>
              {formStatus && (
                <motion.b
                  className={`form-status ${
                    formStatus.includes("Merci") ? "success" : "error"
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                >
                  {formStatus}
                </motion.b>
              )}
            </motion.form>
          </div>
        </motion.div>

        <motion.div className="section-foot" variants={fadeIn}>
          <motion.div className="contact-foot" variants={slideInLeft}>
            <h1>{t("contactezMoi")}</h1>
            <motion.div variants={fadeIn} transition={{ duration: 0.4 }}>
              {[
                {
                  href: "https://web.facebook.com/nizar.douirek.50",
                  img: "fcb.png",
                },
                {
                  href: "https://www.linkedin.com/in/nizar-douirek123/",
                  img: "linkdeen-footer.png",
                },
                {
                  href: "https://www.instagram.com/nizar_douirek",
                  img: "insta.png",
                },
                { href: "https://github.com/NizarDouirek", img: "gtf.png" },
                { href: "mailto:douireknizar@gmail.com", img: "gmail.avif" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                  variants={slideInRight}
                >
                  <img loading="lazy" src={social.img} alt="" className="social-icon" />
                </motion.a>
              ))}
            </motion.div>

            <motion.p className="pEmail" variants={slideInBottom} transition={{ duration: 0.3}}>
              <Link  to="https://mail.google.com/mail/?view=cm&to=douireknizar@gmail.com"
  target="_blank"
  rel="noopener noreferrer" className="monmail">
              <i className="fas fa-envelope"></i> douireknizar@gmail.com</Link>
            </motion.p>
            <motion.p variants={slideInBottom} transition={{ duration: 0.3 }}>
              
              <i className="fas fa-phone"></i> +212 699862707
            </motion.p>
          </motion.div>

          <motion.div className="section-nav" variants={slideInRight}>
            <h1>Pages</h1>
            <ul className="footer-links">
              <motion.li variants={slideInLeft} transition={{ duration: 0.4 }}>
                <motion.div whileHover={{ x: 10 }}>
                  <Link to="/about">{t("apropos")}</Link>
                </motion.div>
              </motion.li>
              <motion.li variants={slideInRight} transition={{ duration: 0.4 }}>
                <motion.div whileHover={{ x: 10 }}>
                  <Link to="/skills">{t("competences")}</Link>
                </motion.div>
              </motion.li>
              <motion.li variants={slideInLeft} transition={{ duration: 0.4 }}>
                <motion.div whileHover={{ x: 10 }}>
                  <Link to="/projet">{t("projet")}</Link>
                </motion.div>
              </motion.li>
              <motion.li variants={slideInRight} transition={{ duration: 0.4 }}>
                <motion.div whileHover={{ x: 10 }}>
                  <Link to="/Cv">{t("parcours")}</Link>
                </motion.div>
              </motion.li>
              <motion.li variants={slideInLeft} transition={{ duration: 0.4 }}>
                <motion.div whileHover={{ x: 10 }}>
                  <Link to="/contact">{t("contact")}</Link>
                </motion.div>
              </motion.li>
            </ul>
          </motion.div>

          <motion.div
            className="section-adrss"
            variants={slideInLeft}
            transition={{ duration: 0.3}}
          >
            <h1>{t("adr")}</h1>
            <ul className="footer-links">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.3rem",
                }}
              >
                <svg
                  style={{ width: "40px" }}
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Google Maps</title>
                  <path d="M19.527 4.799c1.212 2.608.937 5.678-.405 8.173-1.101 2.047-2.744 3.74-4.098 5.614-.619.858-1.244 1.75-1.669 2.727-.141.325-.263.658-.383.992-.121.333-.224.673-.34 1.008-.109.314-.236.684-.627.687h-.007c-.466-.001-.579-.53-.695-.887-.284-.874-.581-1.713-1.019-2.525-.51-.944-1.145-1.817-1.79-2.671L19.527 4.799zM8.545 7.705l-3.959 4.707c.724 1.54 1.821 2.863 2.871 4.18.247.31.494.622.737.936l4.984-5.925-.029.01c-1.741.601-3.691-.291-4.392-1.987a3.377 3.377 0 0 1-.209-.716c-.063-.437-.077-.761-.004-1.198l.001-.007zM5.492 3.149l-.003.004c-1.947 2.466-2.281 5.88-1.117 8.77l4.785-5.689-.058-.05-3.607-3.035zM14.661.436l-3.838 4.563a.295.295 0 0 1 .027-.01c1.6-.551 3.403.15 4.22 1.626.176.319.323.683.377 1.045.068.446.085.773.012 1.22l-.003.016 3.836-4.561A8.382 8.382 0 0 0 14.67.439l-.009-.003zM9.466 5.868L14.162.285l-.047-.012A8.31 8.31 0 0 0 11.986 0a8.439 8.439 0 0 0-6.169 2.766l-.016.018 3.665 3.084z" />
                </svg>
                <motion.p variants={slideInRight}>
                  Hay Nassim imm:31 <br /> app:9, Casablanca
                </motion.p>
              </div>
            </ul>
            <motion.button
              className="cv-foot"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={slideInBottom}
            >
              <a
                href="CV NIZAR DOUIREK.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
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
          transition={{ duration: 0.4 }}
        >
          NIZAR
        </motion.div>
        <motion.img
          src="imgfott.png"
          loading="lazy"
          alt=""
          whileHover={{
            scale: 1.05,
            rotate: [0, -20, 20, -20, 0],
            transition: { duration: 1 },
          }}
          transition={{ duration: 0.4 }}
          variants={slideInRight}
        />
      </motion.div>

      <motion.hr className="footer-break" variants={fadeIn} />
      <motion.p
        className="copyright"
        variants={slideInRight}
        // whileHover={{ scale: 1.01 }}
      >
        Copyright © NIZAR DOUIREK {new Date().getFullYear()}
      </motion.p>
    </motion.footer>
  );
}
