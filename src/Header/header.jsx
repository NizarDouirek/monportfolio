import React, { useState, useEffect }  from "react";
import './header.css';
import { Link, useLocation } from "react-router-dom";
export default function Header(){
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const isActive = (path) => {
        return location.pathname === path;
    };
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
                           <li><Link to="/homme" style={{ color: isActive("/homme") ? '#3572EF' : 'white' }}>Accueil</Link></li>
                           <li><Link to="/about"  style={{ color: isActive("/about") ? '#3572EF' : 'white' }}>À propos</Link></li>
                           <li><Link to="/skills"  style={{ color: isActive("/skills") ? '#3572EF' : 'white' }}>Compétences</Link></li>
                           <li><Link to="/cv" style={{ color: isActive("/cv") ? '#3572EF' : 'white' }}>CV</Link></li>
                           <li><Link to="/projet" style={{ color: isActive("/projet") ? '#3572EF' : 'white' }}>Projets</Link></li>
                           <li><Link to="/contact" style={{ color: isActive("/contact") ? '#3572EF' : 'white' }}>Contact</Link></li>
                           
                        </ul>
                      </nav>
                  </div>
                  <div className="navbar-icons"> 
                    <ul> 
                        <li><Link to="/homme" style={{ color: isActive("/homme") ? '#3572EF' : 'white' }}><i className="fas fa-home"></i> <span style={{ color: isActive("/homme") ? '#3572EF' : 'white' }}>homme</span></Link></li>
                        <li><Link to="/about" style={{ color: isActive("/about") ? '#3572EF' : 'white' }}><i className="fas fa-user"></i><span style={{ color: isActive("/about") ? '#3572EF' : 'white' }}>About</span></Link></li>
                        <li><Link to="/skills" style={{ color: isActive("/skills") ? '#3572EF' : 'white' }}><i className="fas fa-code"></i><span style={{ color: isActive("/skills") ? '#3572EF' : 'white' }}>skills</span></Link></li>
                        <li><Link to="/cv" style={{ color: isActive("/cv") ? '#3572EF' : 'white' }}><i className="fas fa-file-alt"></i><span style={{ color: isActive("/cv") ? '#3572EF' : 'white' }}>cv</span></Link></li> 
                        <li><Link to="/projet" style={{ color: isActive("/projet") ? '#3572EF' : 'white' }}><i className="fas fa-briefcase"></i><span style={{ color: isActive("/projet") ? '#3572EF' : 'white' }}>projet</span></Link></li>
                        <li><Link to="/contact" style={{ color: isActive("/contact") ? '#3572EF' : 'white' }}><i className="fas fa-envelope"></i><span style={{ color: isActive("/contact") ? '#3572EF' : 'white' }}>contact</span></Link></li>
                     </ul>
                 </div>
                </div>
            </header>
        </div>
    )
}