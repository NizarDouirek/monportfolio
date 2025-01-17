import React, { useEffect, useState, useRef } from "react";
import "./about.css";

export default function About() {
    const [isVisible, setIsVisible] = useState(false);
    const aboutRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 } // Déclenche lorsque 50% de la section est visible
        );

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => {
            if (aboutRef.current) {
                observer.unobserve(aboutRef.current);
            }
        };
    }, []);

    return (
        <div id="about" className="about" ref={aboutRef}>
            <h1 >À Propos</h1>
            <div className={`containe ${isVisible ? "slide-in" : ""}`}>
                <img className={`i ${isVisible ? "slide-left" : ""}`} src="profillinkd.jpg" alt="Profil" />
                <div className={`contentAbout ${isVisible ? "slide-right" : ""}`}>
                    <h2>
                        <span>Bonjour! Je suis</span> Nizar Douirek
                    </h2>
                    {/* <h4>Développeur Full Stack</h4> */}
                    <p>
                        Jeune diplômé en développement digital, passionné <br />
                        par les nouvelles technologies et l'innovation, je possède <br />
                        une solide formation en programmation et en conception <br />
                        de solutions numériques.
                    </p>
                    <div>
                        <table>
                            <tr>
                                <td>Téléphone</td>
                                <td>+212 699862707</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>douireknizar@gmail.com</td>
                            </tr>
                            <tr>
                                <td>Adresse</td>
                                <td>Hay Nassim, Casablanca</td>
                            </tr>
                            <tr>
                                <td>Langues</td>
                                <td>Arabe, Français, Anglais</td>
                            </tr>
                        </table>
                    </div>
                    <button className="cv">
                        <a
                            href="NizarCV.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            télécharger CV
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
}
