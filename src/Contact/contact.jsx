import React, { useEffect, useRef, useState } from "react";
import "./contact.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import Title from "../Constant/Titre";

export default function Contact() {
    const sectionRef = useRef(null);
    const [formStatus, setFormStatus] = useState(null);

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
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page redirection on form submission

        // After submission, show a confirmation message
        setFormStatus('Message envoyé avec succès!');
        
        // Optionally reset the form
        e.target.reset();
    };
    return (
        <div id="contact" className="contact" ref={sectionRef}>
            
            <Title text="Contact"/>

            <div className="loginPage">
                <div className="contentForm">
                    {/* Bloc Texte & Réseaux Sociaux */}
                    <div className="imgForm hidden">
                        <h2>
                            Une idée en tête ? Un projet à concrétiser ? 🚀 Contactez-moi et transformons vos ambitions en réalité!
                        </h2>
                        <p className="parcontact">
                            Contactez-moi sur n'importe quel réseau social de votre choix ! 😊📩
                        </p>
                        <div className="social-icons">
                            <a href="https://wa.me/212699862707"><FaWhatsapp className="icon" /></a>
                            <a href="https://linkedin.com"><FaLinkedin className="icon" /></a>
                            <a href="mailto:douireknizar@gmail.com"><FaEnvelope className="icon" /></a>
                            <a href="https://instagram.com"><FaInstagram className="icon" /></a>
                            <a href="https://facebook.com"><FaFacebook className="icon" /></a>
                        </div>
                    </div>

                    {/* Formulaire */}
                    <form action="https://formspree.io/f/meoqwagg"
                    method="POST" className="formLogin hidden">
                        {/* <h1 className="bienvenu">Contactez-moi</h1> */}

                        <div className="inputbox">
                            <input type="text" name="name" id="name" placeholder="Votre nom" required />
                        </div>

                        <div className="inputbox">
                            <input type="email" name="email" id="email" placeholder="Votre email" required />
                        </div>

                        <div className="inputbox">
                            <textarea name="message" id="message" placeholder="Votre message" required></textarea>
                        </div>

                        <button className="btn-Login">Envoyer</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
