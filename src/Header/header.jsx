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
                  <img src="Nizar Douirek (2).png"/>
                  {/* <h1>Nizar <span className="prenom">Douirek</span></h1> */}
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
                  <div className="navbar-icons"> 
                    <ul> 
                        <li><Link to="/homme"><i className="fas fa-home"></i></Link></li>
                        <li><Link to="/about"><i className="fas fa-user"></i></Link></li>
                        <li><Link to="/skills"><i className="fas fa-code"></i></Link></li>
                        <li><Link to="/cv"><i className="fas fa-file-alt"></i></Link></li> 
                        <li><Link to="/projet"><i className="fas fa-briefcase"></i></Link></li>
                        <li><Link to="/contact"><i className="fas fa-envelope"></i></Link></li>
                     </ul>
                 </div>
                </div>
            </header>
        </div>
    )
}