import React, { useState, useEffect }  from "react";
import './header.css';
import { Link } from "react-router-dom";
export default function Header(){
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return(
        <div>
            <header  className={isScrolled ? "scrolled" : ""}>
                <div className="logo">
                  <img src="nn.png"/>
                  <h1>Nizar <span className="prenom">Douirek</span></h1>
                  <div className="navbar">
                      <nav>
                        <ul>
                          
                           <li><Link to="/homme" style={{color:'#3572EF'}}>Accueil</Link></li>
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