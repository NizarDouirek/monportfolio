import React, { useEffect, useRef, useState } from "react";
import "./test.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt,FaLinkedin,FaGithub,FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import Title from "../Constant/Titre";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Contact({ showHero = true }) {
  const sectionRef = useRef(null);
  const [formStatus, setFormStatus] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.3 }
    );

    const elements = sectionRef.current.querySelectorAll(".hidden");
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/meoqwagg", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setFormStatus("✅ Message envoyé avec succès !");
        e.target.reset();
      } else setFormStatus("❌ Une erreur est survenue. Veuillez réessayer.");
    } catch {
      setFormStatus("⚠️ Une erreur réseau est survenue.");
    }

    setTimeout(() => setFormStatus(null), 5000);
  };

  return (
    <>
      {showHero && (
        <section className="hero-section">
          <div className="hero-overlay">
            <div className="hero-content">
              <h1>Contact</h1>
              <div className="breadcrumb">
                <Link to="/home">
                  <i className="bx bx-home-alt icnH"></i> Home
                </Link>
                /<span className="spann"> Contact</span>
              </div>
            </div>
          </div>
        </section>
      )}

      <div id="contact" className="contact-section" ref={sectionRef}>
        <Title text={t("contact")} />

        <div className="contact-container">
          {/* Partie gauche - Formulaire */}
          <div className="contact-form hidden">
            <h2 className="contact-title">
              {t("lets")} <span>{t("go")} </span>
            </h2>
            <h3 className="contact-stitle">Votre vision, mon code </h3>
           
            

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <input type="text" name="first_name" placeholder="First name" required />
                <input type="text" name="last_name" placeholder="Last name" required />
              </div>

              <div className="form-row">
                <input type="email" name="email" placeholder="Email address" required />
                <input type="tel" name="phone" placeholder="Phone number" />
              </div>
              <textarea name="message" placeholder="Message" rows="4" required></textarea>

              <button type="submit" className="btn-Login">
                  {t("envoyer")}
              </button>

              {formStatus && (
                <b className={`form-status ${formStatus.includes("succès") ? "success" : "error"}`}>
                  {formStatus}
                </b>
              )}
            </form>
          </div>

          {/* Partie droite - Informations */}
          <div className="gridform">
          <div className="imgForm1 hidden">
                        <h2>
                           {t("ideeProjet")}
                        </h2> 
                       
                  </div>
          
          <div className="contact-info hidden">
 <div className="info-item">
    <div className="icon-circle">
      <FaWhatsapp />
    </div>
    <div>
      <p className="info-label">WhatsApp</p>
      <a href="https://wa.me/212699862707?text=Bonjour%20👋,%20je%20suis%20intéressé%20par%20vos%20services%20et%20j'aimerais%20en%20savoir%20plus" target="_blank" rel="noopener noreferrer" className="contact-link info-text">
        +212 6 99 86 27 07
      </a>
    </div>
  </div>
  <div className="info-item">
    <div className="icon-circle">
      <FaFacebook />
    </div>
    <div>
      <p className="info-label">Facebook</p>
      <a href="https://web.facebook.com/nizar.douirek.50" target="_blank" rel="noopener noreferrer" className="contact-link info-text">
        Nizar Douirek
      </a>
    </div>
  </div>

  <div className="info-item">
    <div className="icon-circle">
      <FaEnvelope />
    </div>
    <div>
      <p className="info-label">Email</p>
       <a href="mailto:douireknizar@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-link info-text">douireknizar@gmail.com</a>
      
      
    </div>
  </div>

  

  {/* 🌐 LinkedIn */}
  <div className="info-item">
    <div className="icon-circle">
      <FaLinkedin />
    </div>
    <div>
      <p className="info-label">LinkedIn</p>
      <a href ="https://www.linkedin.com/in/nizar-douirek123/" target="_blank" rel="noopener noreferrer" className="contact-link info-text">
        Nizar Douirek
      </a>
    </div>
  </div>

  {/* 🧑‍💻 GitHub */}
  <div className="info-item">
    <div className="icon-circle">
      <FaGithub />
    </div>
    <div>
      <p className="info-label">GitHub</p>
      <a  href="https://github.com/NizarDouirek" target="_blank" rel="noopener noreferrer" className="contact-link info-text">
        github.com/NizarDouirek
      </a>
    </div>
  </div>

  {/* 💬 WhatsApp */}
 
  <div className="info-item">
    <div className="icon-circle">
      <FaInstagram />
    </div>
    <div>
      <p className="info-label">Instagram</p>
      <a href="https://www.instagram.com/nizar_douirek" target="_blank" rel="noopener noreferrer" className="contact-link info-text">
        Nizar Douirek
      </a>
      
    </div>
  </div>

</div>

          </div>
        </div>
      </div>
    </>
  );
}
