import React, { useEffect, useState, useRef } from "react";
import "./about.css";
import Header from "../Header/header";
import Title from "../Constant/Titre";

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
        <>
        {/* <Header/> */}
        <div id="about" className="about" ref={aboutRef}>
            <Title text="À propos" />
            <div className={`containe ${isVisible ? "slide-in" : ""}`}>
                <img className={`i ${isVisible ? "slide-left" : ""}`} src="profillinkd.jpg" alt="Profil" />
                <div className={`contentAbout ${isVisible ? "slide-right" : ""}`}>
                    <h2>
                        <span>Bonjour! Je suis</span> Nizar Douirek
                    </h2>
                    {/* <h4>Développeur Full Stack</h4> */}
                    <p>
                    jeune diplômé en développement digital, passionné par la

<br />
création de solutions innovantes , avec une expertise solide <br />
en programmation et en conception web  <br />

                        
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
        </>
    );
}
