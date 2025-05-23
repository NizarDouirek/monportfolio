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
                  <img className="dn" src="dn.png"/>
                  {/* <h1>Nizar <span className="prenom">Douirek</span></h1> */}
                  <div className="navbar">
                      <nav>
                        <ul>
                           <li><Link to="/homme" style={{ color: isActive(["/", "/homme"]) ? '#32ca97' : '#495E57' }}><i className="bx bx-home-alt icnH"></i> Accueil</Link></li>
                           <li><Link to="/about"  style={{ color: isActive(["/about"]) ? '#32ca97' : '#495E57' }}><i className='bx bx-user icnH'></i> À propos</Link></li>
                           <li><Link to="/skills"  style={{ color: isActive(["/skills"]) ? '#32ca97' : '#495E57' }}><i className="bx bx-wrench icnH"></i> Compétences</Link></li>
                           <li><Link to="/cv" style={{ color: isActive(["/cv"]) ? '#32ca97' : '#495E57' }}><i className="bx bx-book icnH"></i> Parcours</Link></li>
                           <li><Link to="/projet" style={{ color: isActive(["/projet"]) ? '#32ca97' : '#495E57' }}><i className="bx bx-folder icnH"></i>  Projets</Link></li>
                           <li><Link to="/contact" style={{ color: isActive(["/contact"]) ? '#32ca97' : '#495E57' }}><i className="bx bx-envelope icnH"></i> Contact</Link></li>
                           
                        </ul>
                      </nav>
                  </div>
                  <div className="navbar-icons"> 
                    <ul> 
                        <li><Link to="/homme" style={{ color: isActive(["/", "/homme"]) ? '#379777' : 'black' }}><i className="bx bx-home-alt icnM"></i> <span style={{ color: isActive(["/", "/homme"]) ? '#379777' : 'black' }}>homme</span></Link></li>
                        <li><Link to="/about" style={{ color: isActive(["/about"]) ? '#379777' : 'black' }}><i className="bx bx-user icnM"></i><span style={{ color: isActive(["/about"]) ? '#379777' : 'black' }}>About</span></Link></li>
                        <li><Link to="/skills" style={{ color: isActive(["/skills"]) ? '#379777' : 'black' }}><i className="bx bx-wrench icnM"></i><span style={{ color: isActive(["/skills"]) ? '#379777' : 'black' }}>skills</span></Link></li>
                        <li><Link to="/cv" style={{ color: isActive(["/cv"]) ? '#379777' : 'black' }}><i className="bx bx-book icnM"></i><span style={{ color: isActive(["/cv"]) ? '#379777' : 'black' }}>Parcours</span></Link></li> 
                        <li><Link to="/projet" style={{ color: isActive(["/projet"]) ? '#379777' : 'black' }}><i className="bx bx-folder icnM"></i><span style={{ color: isActive(["/projet"]) ? '#379777' : 'black' }}>projet</span></Link></li>
                        <li><Link to="/contact" style={{ color: isActive(["/contact"]) ? '#379777' : 'black' }}><i className="bx bx-envelope icnM"></i><span style={{ color: isActive(["/contact"]) ? '#379777' : 'black' }}>contact</span></Link></li>
                     </ul>
                 </div>
                </div>
            </header>
        </div>
    )
}