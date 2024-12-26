import React,{useState,useEffect} from "react";
import './projet.css';
export default function Projet(){
     useEffect(() => {
          const sections = document.querySelectorAll('.sectionP, .sectionP2, .sectionP3');
          
          const observer = new IntersectionObserver((entries, observer) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      // Ajouter la classe 'visible' lorsque l'élément est visible à l'écran
                      entry.target.classList.add('visible');
                  }
              });
          }, { threshold: 0.5 }); // Déclenche lorsque 50% de l'élément est visible
  
          sections.forEach(section => {
              observer.observe(section);
          });
      }, []);
    return(
        <div id="projet">
          <div className="projets">
               <h1 className="titreAb">Projets</h1> 
               <div className="projet">
                <div className="sectionP">
                    <div className="contentP">
                    <h1>Luxury Voyage</h1>
                    <p>"Luxury Voyage" est une agence de voyage spécialisée dans l'organisation de séjours d'exception 
                      pour les voyageurs en quête de confort, d'élégance et d'expériences inoubliables.
                       Notre site est conçu pour vous permettre de découvrir et réserver des voyages sur mesure, 
                       dans les plus belles destinations du monde.</p><br />
                       <div className="tec">
                            <img src="lar.webp" alt="" />
                            <img src="react.png" alt="" />
                            <img src="css-3.png" alt="" />
                            <img src="bootstrap1.png" alt="" />
                            <img src="sql.png" alt="" />
                       </div>
                       <button className="visit">Visiter Site</button>
                    </div>
                   
                      <img className="imgsite" src="voyage.png" alt=""/>
                   
                 </div><br /><br />
                <div className="sectionP2">
                
                <div className="contentP">
                    <h1>MyBien</h1>
                    <p>"MyBien" une solution numérique conçue pour simplifier et automatiser les tâches 
                      liées à la gestion des biens de l'entreprise (ordinateurs , imprimantes…). Elle permet aux 
                        gestionnaires  de suivre efficacement leurs biens et d’organiser les données.</p><br />
                       <div className="tec">
                            <img src="lar.webp" alt="" />
                            <img src="php.png" alt="" />
                            <img src="css-3.png" alt="" />
                            <img src="bootstrap1.png" alt="" />
                       </div>
                       <button className="visit2">Visiter Site</button>
                    </div>
                   <a href="">
                   <img  className="imgsite"src="gbien.png" alt="" />
                   </a>
                </div><br /><br />
                <div className="sectionP3">
                <div className="contentP">
                    <h1>Luxury Voyage</h1>
                    <p>"Luxury Voyage" est une agence de voyage spécialisée dans l'organisation de séjours d'exception 
                      pour les voyageurs en quête de confort, d'élégance et d'expériences inoubliables.
                       Notre site est conçu pour vous permettre de découvrir et réserver des voyages sur mesure, 
                       dans les plus belles destinations du monde.</p><br />
                       <div className="tec">
                            <img src="lar.webp" alt="" />
                            <img src="react.png" alt="" />
                            <img src="css-3.png" alt="" />
                            <img src="bootstrap1.png" alt="" />
                            <img src="sql.png" alt="" />
                       </div>
                       <button className="visit3">Visiter Site</button>
                    </div>
                   
                      <img className="imgsite" src="voyage.png" alt=""/>
                   
                 </div>
                 </div>
                 <div class="projets-message">
    <p>
        Des projets passionnants sont en cours de développement ! 
        Restez à l'écoute pour découvrir de nouvelles créations et solutions innovantes.
    </p>
</div>

               </div>
          </div>
        
    )
}