import React, { useEffect, useState, useRef } from "react";
import './contact.css';

import Header from "../Header/header";

export default function Contact() {
    const [isVisible, setIsVisible] = useState(false);
    const contactRef = useRef(null);
    const [formStatus, setFormStatus] = useState(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (contactRef.current) {
            observer.observe(contactRef.current);
        }

        return () => {
            if (contactRef.current) {
                observer.unobserve(contactRef.current);
            }
        };
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page redirection on form submission

        // After submission, show a confirmation message
        setFormStatus('Message envoyé avec succès!');
        
        // Optionally reset the form
        e.target.reset();
    };

    return (
        <>
                {/* <Header/> */}
        <div id="contact" className="contact" ref={contactRef}>
            <h1 className="titre6">Contact</h1><br />
            <div className="form">
                <form
                    action="https://formspree.io/f/meoqwagg"
                    method="POST"
                    className={isVisible ? "slide-left" : ""}
                    // onSubmit={handleSubmit}
                >
                    <h2>Contactez-moi</h2><br />
                    <input type="text" name="name" id="name" placeholder="Votre nom" required /><br />
                    <input type="email" name="email" id="email" placeholder="Votre email" required /><br />
                    <textarea name="message" id="message" placeholder="Votre message" required></textarea><br />
                    <button type="submit">Envoyer</button>
                </form>
                {formStatus && <p className="form-status">{formStatus}</p>} {/* Confirmation message */}
                <div className={`detail ${isVisible ? "slide-right" : ""}`}>
                    <h2>Details Contact</h2>
                    <div className="contact-detail">
                        <a href="mailto:douireknizar@gmail.com?subject=Demande d'informations&body=Bonjour, j'ai une question concernant...">
                        <img src="mallette.png" alt="Email Icon" />
                        </a>
                        <p>douireknizar@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <a href="https://wa.me/212699862707?text=Bonjour, je souhaite en savoir plus sur vos services">
                        <img src="tel.png" alt="Phone Icon" />
                        </a>
                        <p>+212 699862707</p>
                        
                    </div>
                    <div className="contact-detail">
                        <a href="https://www.google.com/maps/place/Ennassim/@33.513411,-7.6660209,15.04z/data=!4m6!3m5!1s0xda62c5670076039:0x9057b8773d86c9d7!8m2!3d33.5127042!4d-7.
                        // 66057!16s%2Fg%2F1vxw9mbh?entry=ttu&g_ep=EgoyMDI1MDEwMS4wIKXMDSoASAFQAw%3D%3D">
                        <img src="adress.png" alt="Address Icon" /></a>
                        <p>Hay Nassim , Casablanca</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
