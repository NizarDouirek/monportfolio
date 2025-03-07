import React, { useState, useEffect }  from "react";
import './header.css';
import { Link, useLocation } from "react-router-dom";
export default function Header(){
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const isActive = (paths) => {
      
        return paths.includes(location.pathname);
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
                  <img src="dk.png"/>
                  {/* <h1>Nizar <span className="prenom">Douirek</span></h1> */}
                  <div className="navbar">
                      <nav>
                        <ul>
                           <li><Link to="/homme" style={{ color: isActive(["/", "/homme"]) ? '#379777' : '#495E57' }}>Accueil</Link></li>
                           <li><Link to="/about"  style={{ color: isActive(["/about"]) ? '#379777' : '#495E57' }}>À propos</Link></li>
                           <li><Link to="/skills"  style={{ color: isActive(["/skills"]) ? '#379777' : '#495E57' }}>Compétences</Link></li>
                           <li><Link to="/cv" style={{ color: isActive(["/cv"]) ? '#379777' : '#495E57' }}>CV</Link></li>
                           <li><Link to="/projet" style={{ color: isActive(["/projet"]) ? '#379777' : '#495E57' }}>Projets</Link></li>
                           <li><Link to="/contact" style={{ color: isActive(["/contact"]) ? '#379777' : '#495E57' }}>Contact</Link></li>
                           
                        </ul>
                      </nav>
                  </div>
                  <div className="navbar-icons"> 
                    <ul> 
                        <li><Link to="/homme" style={{ color: isActive(["/", "/homme"]) ? '#379777' : 'black' }}><i className="fas fa-home"></i> <span style={{ color: isActive(["/", "/homme"]) ? '#379777' : 'black' }}>homme</span></Link></li>
                        <li><Link to="/about" style={{ color: isActive(["/about"]) ? '#379777' : 'black' }}><i className="fas fa-user"></i><span style={{ color: isActive(["/about"]) ? '#379777' : 'black' }}>About</span></Link></li>
                        <li><Link to="/skills" style={{ color: isActive(["/skills"]) ? '#379777' : 'black' }}><i className="fas fa-code"></i><span style={{ color: isActive(["/skills"]) ? '#379777' : 'black' }}>skills</span></Link></li>
                        <li><Link to="/cv" style={{ color: isActive(["/cv"]) ? '#379777' : 'black' }}><i className="fas fa-file-alt"></i><span style={{ color: isActive(["/cv"]) ? '#379777' : 'black' }}>cv</span></Link></li> 
                        <li><Link to="/projet" style={{ color: isActive(["/projet"]) ? '#379777' : 'black' }}><i className="fas fa-briefcase"></i><span style={{ color: isActive(["/projet"]) ? '#379777' : 'black' }}>projet</span></Link></li>
                        <li><Link to="/contact" style={{ color: isActive(["/contact"]) ? '#379777' : 'black' }}><i className="fas fa-envelope"></i><span style={{ color: isActive(["/contact"]) ? '#379777' : 'black' }}>contact</span></Link></li>
                     </ul>
                 </div>
                </div>
            </header>
        </div>
    )
}