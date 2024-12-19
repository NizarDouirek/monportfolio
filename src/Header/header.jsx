import React from "react";
import './header.css';
import { Link } from "react-router-dom";
export default function Header(){
    return(
        <div>
            <header>
                <div className="logo">
                  <img src="logoN.png"/>
                  <h1>Nizar <span className="prenom">Douirek</span></h1>
                  <div className="navbar">
                      <nav>
                        <ul>
                          
                           <li><Link to="/homme">Accueil</Link></li>
                           <li><Link to="/about">À propos</Link></li>
                           <li><Link to="/skills">Compétences</Link></li>
                           <li><Link to="/cv">CV</Link></li>
                           <li><Link to="/projet">Projets</Link></li>
                           <li><Link to="/contact">Contact</Link></li>
                           
                        </ul>
                      </nav>
                  </div>
                </div>
            </header>
        </div>
    )
}