import React from "react";
import './cv.css';
export default function Cv(){
    return(
        <div id="cv" className="cv2">
            <h1 className="title">CV</h1>
            <div className="fe">
               <div className="f">
                <div className="log">
                   <img src="formation.png" alt="" />
                   <h1>Formation</h1>
                </div>
                <h2>Technicien specialisé en developpement <br /> digital option ‘full-stack web’</h2>
                <span className="date">2022 - 2024</span>
                <p className="p">  A l'institut specialisé en technologie appliquée ntic 1 Casablanca</p><br />
                <h2>Baccalauréat en Sciences de la Vie et de la Terre,</h2>
                <span className="date">2021 - 2022</span>
                <p className="p"> En Lycée Ibno-khatib, Casablanca </p>
                </div>
                <hr />
            <div className="ex">
                <div className="log">
                    <img src="experience.png" alt="" />
                    <h1>Experiences</h1>
                </div>
                <h2>Stage Développeur, SIRECOM </h2>
                     <span className="date">2024 - 2mois</span>
                
                <p> 
                    
                       Développement d'une application de gestion debiens <br /> 
                       <span className="role">Technologies utilisées :</span> php, laravel, MySQL, CSS    
                    
                </p>
                <h2>
                Projet Académique , ISTA </h2><span className="date">2024 - 4mois </span>
                <p> 
                    
                        Conception et développement d'un site web d'une agence de voyage <br /> 
                       <span className="role">Technologies utilisées :</span> HTML, CSS, React, Laravel, MySQL    
                    
                </p>
                <h2>
                Projet Académique (en binôme) , ISTA </h2><span className="date">2023 - 3mois </span>
                <p> 
                    
                       Développement d'un site web de vente en ligne <br />
                       <span className="role">Technologies utilisées :</span>  HTML, CSS, Bootstrap, angular, Nodejs <br />
                       <span className="role">Rôle :</span> Responsable de la conception et du
                         développement d’une interface intuitive,
                         création de pages réactives, intégration de
                         styles et optimisation de l'expérience utilisateur    
                    
                </p>
                
            </div>
            </div>
        </div>
    )
}