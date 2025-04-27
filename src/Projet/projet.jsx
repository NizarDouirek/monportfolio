import React,{useState,useEffect} from "react";
import './projet.css';
import Header from "../Header/header";
import Title from "../Constant/Titre";

import { motion } from "framer-motion";

export default function Projet(){
     useEffect(() => {
          const sections = document.querySelectorAll('.sectionP, .sectionP2, .sectionP3, .sectionP4');
          
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
        <>
                {/* <Header/> */}
        <div id="projet">
          <div className="projets">
          <Title text="Projet" />
               <div className="projet">
                <div className="sectionP">
                    <div className="contentP">
                    <h1>Luxury Voyage</h1>
                    <p>"Luxury Voyage" est une agence de voyage spécialisée dans l'organisation de séjours d'exception 
                      pour les voyageurs en quête de confort, d'élégance et d'expériences inoubliables.
                       Notre site est conçu pour vous permettre de découvrir et réserver des voyages sur mesure, 
                       dans les plus belles destinations du monde.</p><br />
                       <div className="tec">
                            
                            <img src="react.png" alt=""  title="React.js"/>
                            <img src="css.png" alt=""  title="CSS"/>
                            <img src="bootstrap.png" alt=""  title="Bootstrap"/>
                            <img src="laravel.png" alt=""  title="Laravel"/>
                            <img src="mysql.png" alt=""  title="MySQL"/>
                       </div>
                       <a href="https://github.com/NizarDouirek/Agence_Voyage" target="_blank" rel="noopener noreferrer">
                       <button className="visit">visit Repository
                       <i className="fa-brands fa-github" style={{marginLeft:'10px'}}></i>
                       </button>
                       </a>
                    </div>
                   
                      <img className="imgsite1" src="voyage.png" alt=""/>
                   
                 </div><br /><br />
                <div className="sectionP2">
                
                <div className="contentP">
                    <h1>MyBien</h1>
                    <p>"MyBien" une solution numérique conçue pour simplifier et automatiser les tâches 
                      liées à la gestion des biens de l'entreprise (ordinateurs , imprimantes…). Elle permet aux 
                        gestionnaires  de suivre efficacement leurs biens et d’organiser les données.</p><br />
                       <div className="tec">
                            <img src="laravel.png" alt="" title="Laravel" />                
                            <img src="css.png" alt=""  title="CSS"/>
                            <img src="bootstrap.png" alt=""  title="Bootstrap"/>
                            <img src="mysql.png" alt=""  title="MySQL"/>
                       </div>
                       <a href= "https://github.com/NizarDouirek/gestionBien" target="_blank" rel="noopener noreferrer">
                       <button className="visit2">visit Repository
                       <i className="fa-brands fa-github" style={{marginLeft:'10px'}}></i>
                       </button>
                       </a>
                    </div>
                   <div className="imgsite-container">
                   <img  className="imgsite"src="gbien.png" alt="" style={{marginTop:"0.1px"}}/>
                   </div>
                </div><br /><br />
                <div className="sectionP3">
                <div className="contentP">
                    <h1>StoreElec</h1>
                    <p>"StoreElec" est un site de commerce en ligne innovant et fiable, spécialisé dans
                         la vente de produits électroniques de haute qualité, notamment des téléphones 
                         mobiles, des ordinateurs portables et des tablettes. Le site propose une large 
                         sélection de marques populaires, offrant ainsi aux clients un large éventail 
                          d'options pour répondre à leurs besoins technologiques</p><br />
                       <div className="tec">
                            <img src="html.png" alt=""   title="Html"/>
                            <img src="css.png" alt="" title="CSS"/>
                            <img src="bootstrap.png" alt="" title="Bootstrap" />
                            <img src="angular.svg" alt=""  title="Angular"/>
                            
                       </div>
                       <a href="https://github.com/NizarDouirek/StoreElec" target="_blank" rel="noopener noreferrer">
                       <button className="visit3">visit Repository
                       <i className="fa-brands fa-github" style={{marginLeft:'10px'}}></i>
                       </button>
                       </a>
                    </div>
                   
                      <img className="imgsite" src="storeelec.png" alt=""/>
                   
                 </div><br /><br />
                 <div className="sectionP4">
                <div className="contentP">
                    <h1>FitTrack</h1>
                    <p>
                    "FitTrack" est une plateforme innovante dédiée au suivi de la condition
                     physique et des performances. Elle permet aux utilisateurs de fixer 
                     des objectifs, de suivre leurs progrès en temps réel, et d'accéder
                      à des analyses personnalisées pour améliorer leur bien-être et 
                      atteindre leurs objectifs de fitness.</p><br />
                       <div className="tec">
                            <img src="html.png" alt="" title="HTML"/>
                            <img src="css.png" alt="" title="CSS"/>
                            <img src="laravel.png" alt="" title="Laravel"/>
                            <img src="react.png" alt="" title="React.js"/>
                            <img src="mongo-db.png" alt="" title="MongoDB" />
                            
                       </div>
                       <a href="#" target="_blank" rel="noopener noreferrer">
                       <button className="visit4">visit Repository
                       <i className="fa-brands fa-github" style={{marginLeft:'10px'}}></i>
                       </button>
                       
                       </a>
                    </div>
                   
                      <img className="imgsite" src="fittrack.png" alt=""/>
                   
                 </div>
                 
                 </div>
                 
                 <motion.div className="projets-message"
                 initial={{ opacity: 0, y: 50 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 1, duration: 3 }}
                >
    <motion.p initial={{ opacity: 0, y: 50 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 1, duration: 3 }}>
        Des projets passionnants ✨ sont en cours de développement !!! 
        {/* Restez à l'écoute pour découvrir de nouvelles créations et solutions innovantes. */}
    </motion.p>
</motion.div>

               </div>
          </div>
        </>
    )
}