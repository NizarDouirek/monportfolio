import React, { useEffect, useState, useRef } from "react";
import './contact.css';

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
        <div id="contact" className="contact" ref={contactRef}>
            <h1 className={`titre ${isVisible ? "fade-in" : ""}`}>Contact</h1><br />
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
                        <img src="email (1).png" alt="Email Icon" />
                        <p>douireknizar@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src="tel.png" alt="Phone Icon" />
                        <p>+212 699862707</p>
                    </div>
                    <div className="contact-detail">
                        <img src="adress.png" alt="Address Icon" />
                        <p>Hay Nassim , Casablanca</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
