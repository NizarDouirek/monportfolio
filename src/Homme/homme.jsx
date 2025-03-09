import React, { useEffect, useState } from "react";
import "./homme.css";
import Header from "../Header/header";
import About from "../About/about";
import Skills from "../Skills/skills";
import Projet from "../Projet/projet";
import Contact from "../Contact/contact";
import Cv from "../Cv/cv";
import Loader from "../Loader/loader";
import Footer from "../Footer/foother";
export default function Homme() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Fonction pour gérer la visibilité du bouton en fonction de la position de défilement
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {  // Afficher le bouton après un défilement de 300px
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Fonction pour faire défiler la page vers le haut
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // // Ajout de l'écouteur d'événements pour surveiller le défilement
  // useEffect(() => {
  //   window.addEventListener('scroll', toggleVisibility);
    
  //   // Nettoyage de l'écouteur d'événements au démontage
  //   return () => {
  //     window.removeEventListener('scroll', toggleVisibility);
  //   };
  // }, []);

  if (!isLoaded) {
    return <Loader setIsLoaded={setIsLoaded} />;
  }
  
  return (
    <div id="homme">
      {/* <Header/> */}
      <div className="homme">
        <div className="container" >
          <p className="bonjour">
            Bonjour <span className="wave-hand"></span>, je suis
          </p>
          {/* <h1 className="nom">Nizar Douirek</h1> */}
          <p className="job">Developpeur Full Stack</p>
          <button>
            <a href="#contact">Contactez-moi</a>
          </button>
       
        </div>
        
        <div className="marq">
          <p> Développeur FrontEnd</p><p>-</p>
          <p> Développeur BackEnd</p><p>-</p>
          <p> Développeur d'applications</p><p>-</p>
          <p> Développeur d'interfaces utilisateur</p><p>-</p>
          <p> Développeur créative</p>
          
        </div>
   

       


        <div class="decoration">
  <div class="carre carre1"></div>
  <div class="carre carre2"></div>
  <div class="carre carre3"></div>
  <div class="carre carre4"></div>
  <div class="carre carre5"></div>
  <div class="carre carre6"></div>
  <div class="carre carre7"></div>
  <div class="carre carre8"></div>
  <div class="carre carre9"></div>
</div>
      </div>
      <About />
      <button
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        backgroundColor: '#379777',
        color: 'white',
        border: 'none',
        borderRadius: '50%',
        padding: '10px 20px',
        fontSize: '25px',
        zIndex:1,
        cursor: 'pointer',
        display: isVisible ? 'block' : 'none', // Affiche le bouton uniquement lorsqu'il est nécessaire
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      ↑
    </button>
      <Skills />
      <Cv />
      <Projet />
      <Contact />
      <Footer/>
    </div>
  );
}
