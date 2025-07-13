import React, { useEffect, useRef, useState } from "react";
import "./contact.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import Title from "../Constant/Titre";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Contact({ showHero = true })  {
    const sectionRef = useRef(null);
    const [formStatus, setFormStatus] = useState(null);
    const { t } = useTranslation(); 

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                    }
                });
            },
            { threshold: 0.3 }
        );

        const elements = sectionRef.current.querySelectorAll(".hidden");
        elements.forEach((el) => observer.observe(el));

        return () => elements.forEach((el) => observer.unobserve(el));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault(); // Empêcher le comportement par défaut du formulaire

        // Récupérer les données du formulaire
        const formData = new FormData(e.target);

        try {
            // Envoyer les données à Formspree via fetch
            const response = await fetch("https://formspree.io/f/meoqwagg", {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            });

            // Vérifier si la soumission a réussi
            if (response.ok) {
                setFormStatus("Message envoyé avec succès !");
                e.target.reset(); // Réinitialiser le formulaire
            } else {
                setFormStatus("Une erreur est survenue. Veuillez réessayer.");
            }
        } catch (error) {
            setFormStatus("Une erreur réseau est survenue. Veuillez réessayer.");
        }

        // Effacer le message après 5 secondes
        setTimeout(() => {
            setFormStatus(null);
        }, 5000); 
    };

    return (
        <>
         {showHero && (
        <section className="hero-section">
          <div className="hero-overlay">
            <div className="hero-content">
              <h1>Contact</h1>
              <div className="breadcrumb">
                 <Link to="/home">Home</Link><span className="spann"> • Contact</span> 
              </div>
            </div>
          </div>
        </section>
      )}
        <div id="contact" className="contact" ref={sectionRef}>
            <Title text={t("contact") }/>

            <div className="loginPage">
                <div className="contentForm">
                    {/* Bloc Texte & Réseaux Sociaux */}
                    <div className="imgForm hidden">
                        <h2>
                           {t("ideeProjet")}
                        </h2>
                        <p className="parcontact">
                            {t("contactReseaux")}
                        </p>
                        <div className="social-icons">
                            <a href="https://wa.me/212699862707?text=Bonjour%20👋,%20je%20suis%20intéressé%20par%20vos%20services%20et%20j'aimerais%20en%20savoir%20plus">
                                <FaWhatsapp className="icon" />
                            </a>
                            <a href="https://www.linkedin.com/in/nizar-douirek123/">
                                <FaLinkedin className="icon" />
                            </a>
                            <a href="mailto:douireknizar@gmail.com">
                                <FaEnvelope className="icon" />
                            </a>
                            <a href="https://www.instagram.com/nizar_douirek">
                                <FaInstagram className="icon" />
                            </a> 
                            <a href="https://web.facebook.com/nizar.douirek.50">
                                <FaFacebook className="icon" />
                            </a>
                        </div>
                    </div>

                    {/* Formulaire */}
                    <form onSubmit={handleSubmit} className="formLogin hidden">
                        <h1 className="bienvenu">{t("contactezMoi")}</h1>

                        <div className="inputbox">
                            <input type="text" name="name" id="name" placeholder={t("placeholderNom")} required />
                        </div>

                        <div className="inputbox">
                            <input type="email" name="email" id="email" placeholder={t("placeholderEmail")} required />
                        </div>

                        <div className="inputbox">
                            <textarea name="message" id="message" placeholder={t("placeholderMessage")} required></textarea>
                        </div>

                        <button type="submit" className="btn-Login">
                            {t("envoyer")}
                        </button>

                        {/* Afficher le statut du formulaire */}
                        {formStatus && (
                            <b className={`form-status ${formStatus.includes("succès") ? "success" : "error"}`}>
                                {formStatus}
                            </b>
                        )}
                    </form>
                </div>
            </div>
        </div>
        </>
    );
}