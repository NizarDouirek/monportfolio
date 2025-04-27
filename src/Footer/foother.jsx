import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Footer() {
  const [formStatus, setFormStatus] = useState(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.7, 1], [0, 1]);
  
  const { ref, inView } = useInView({
    triggerOnce: true,
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

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
    
  };
  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 2.8 } },
  };
  
  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 2 } },
  };
  
  const slideInBottom = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 2.8 } },
  };
  
  const slideInTop = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { duration: 2 } },
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
      <motion.div className="social" variants={slideInRight}>
        <motion.div 
          className="head-foot"
          variants={slideInTop}
          // whileHover={{ scale: 1.02 }}
        >
        
          <div className="container-footer-form">
            <motion.form 
              className="footer-newsletter" 
              onSubmit={handleSubmit}
              variants={slideInTop}
            >
              <motion.input
                type="email"
                name="email"
                placeholder="Entrez votre adresse email"
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
            <div style={{display:'flex'}}>
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
          <b> Restez connecté à mon univers tech </b>
          </div>
          </div>
        </motion.div>

        <motion.div 
          className="section-foot"
          variants={containerVariants}
        >
          <motion.div
            className="contact-foot"
            variants={slideInLeft }
            
          >
            <h1>Contactez moi</h1>
            <motion.div variants={slideInBottom}>
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
                  whileHover={{ scale: 1.2, rotate: [0, -10, 10, -10, 0] }}
                  variants={slideInRight}
                >
                 <img
        src={social.img}
        alt={social.alt}
        className="social-icon"
      />
                </motion.a>
              ))}
            </motion.div>
            
            <motion.p   initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1, duration: 1 }}>douireknizar@gmail.com</motion.p>
            <motion.p   initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1, duration: 1 }}>+212 699862707</motion.p>
          </motion.div>

          <motion.div
            className="section-nav"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            
          >
            <h1>Pages</h1>
            <ul className="footer-links">
              <motion.li variants={slideInLeft}><motion.a whileHover={{ x: 10 }} href="/about">À propos</motion.a></motion.li>
              <motion.li variants={slideInRight}><motion.a whileHover={{ x: 10 }} href="/skills">Compétences</motion.a></motion.li>
              <motion.li variants={slideInLeft}><motion.a whileHover={{ x: 10 }} href="/projet">Projet</motion.a></motion.li>
              <motion.li variants={slideInRight}><motion.a whileHover={{ x: 10 }} href="/Cv">Parcours</motion.a></motion.li>
              <motion.li variants={slideInLeft}><motion.a whileHover={{ x: 10 }} href="/contact">Contact</motion.a></motion.li>
            </ul>
          </motion.div>

          <motion.div
            className="section-adrss"
            variants={slideInLeft}
            // whileHover={{ scale: 1.02 }}
          >
            <h1>Adresse</h1>
            <ul className="footer-links">
              <motion.p  variants={slideInRight}>
                Hay Nassim imm:31 <br /> app:9, Casablanca
              </motion.p>
            </ul>
            <motion.button
              className="cv-foot"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={slideInBottom}
            >
              <a
                href="NizarDouirek-CV (1).pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Télécharger Cv
              </a>
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div 
        className="divLogo"
        variants={slideInRight}>
        
        
      
        <motion.div
          className="logofo"
          initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1, duration: 1 }}
    variants={slideInBottom}>
        
          NIZAR
        </motion.div>
        <motion.img
          src="imgfott.png"
          alt=""
          whileHover={{
            scale: 1.05,
            rotate: [0, -20, 20, -20, 0],
            transition: { duration: 1 },
            repeat: Infinity,
          }}
          initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1, duration: 1 }}
    variants={slideInRight}
        />
      </motion.div>

      <motion.hr className="footer-break" variants={itemVariants} />
      <motion.p
        className="copyright"
        variants={slideInRight}
        whileHover={{
          scale: 1.05,
        
          transition: { duration: 0.2 }
        }}
      >
        copyright © NIZAR DOUIREK {new Date().getFullYear()}
      </motion.p>
    </motion.footer>
  );
}