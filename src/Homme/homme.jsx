import React, { useState } from "react";
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

  if (!isLoaded) {
    return <Loader setIsLoaded={setIsLoaded} />;
  }

  return (
    <div id="homme">
      <Header/>
      <div className="homme">
        <div className="container" >
          <p className="bonjour">
            Bonjour <span className="wave-hand"></span>, je suis
          </p>
          <h1 className="nom">Nizar Douirek</h1>
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
      </div>
      <About />
      <Skills />
      <Cv />
      <Projet />
      <Contact />
      <Footer/>
    </div>
  );
}
