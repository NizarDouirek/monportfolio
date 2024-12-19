import React from "react";
import './homme.css';
import Header from "../Header/header";
import About from "../About/about";
import Skills from "../Skills/skills";
import Projet from "../Projet/projet";
import Contact from "../Contact/contact";
import Cv from "../Cv/cv";
export default function Homme(){
    
    return(
        <div id="homme">
        <div className="homme">
            <div className="container">
                <p className="bonjour">Bonjour <span className="wave-hand"></span>, je suis</p>
                <h1 className="nom">Nizar Douirek</h1>
                <p className="job">Developpeur Full Stack</p>
                <button>
                    <a href="#contact">Contactez-moi</a>
                </button>
            </div>   
           
        </div>
        <About/>
            <Skills/>
            <Cv/>
            <Projet/>
            <Contact/>
        </div>
    )
}