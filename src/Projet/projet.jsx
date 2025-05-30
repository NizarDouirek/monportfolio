import React,{useState,useEffect} from "react";
import './projet.css';
import Header from "../Header/header";
import Title from "../Constant/Titre";
import { useTranslation } from "react-i18next";

import { motion } from "framer-motion";

export default function Projet(){
  const { t } = useTranslation(); 
     useEffect(() => {
          const sections = document.querySelectorAll('.sectionP, .sectionP2, .sectionP3, .sectionP4, .sectionP5');
          
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
          <Title text={t("projet")} />
          <p style={{textAlign:'center',fontSize:'20px',fontWeight:'bold',marginTop:'10px'}}>{t("projetsIntro")}</p>
               <div className="projet">
                <div className="sectionP">
                    <div className="contentP">
                    <h1>Luxury Voyage</h1>
                    <p>   {t("luxuryvoyage")}</p><br />
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
                   <a href="voyage.png" target="_blank">
                      <img className="imgsite1" src="voyage.png" alt=""/>
                   </a>
                 </div><br /><br />
                <div className="sectionP2">
                
                <div className="contentP">
                    <h1>MyBien</h1>
                    <p>   {t("mybien")}</p><br />
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
                    <a href="gbien.png" target="_blank">
                   <img  className="imgsite"src="gbien.png" alt="" style={{marginTop:"0.1px"}}/>
                   </a>
                   </div>
                </div><br /><br />
                <div className="sectionP3">
                <div className="contentP">
                    <h1>StoreElec</h1>
                    <p>   {t("storeelec")}</p><br />
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
                   <a href="storeelec.png" target="_blank">
                      <img className="imgsite" src="storeelec.png" alt=""/>
                   </a>
                 </div><br /><br />
                 <div className="sectionP4">
                <div className="contentP">
                    <h1>FitTrack</h1>
                    <p>
                    {t("fittrack")}</p><br />
                       <div className="tec">
                            <img src="html.png" alt="" title="HTML"/>
                            <img src="css.png" alt="" title="CSS"/>
                            <img src="laravel.png" alt="" title="Laravel"/>
                            <img src="react.png" alt="" title="React.js"/>
                            <img src="mongo-db.png" alt="" title="MongoDB" />
                            
                       </div>
                       <a href="https://github.com/NizarDouirek/fittrack" target="_blank" rel="noopener noreferrer">
                       <button className="visit4">visit Repository
                       <i className="fa-brands fa-github" style={{marginLeft:'10px'}}></i>
                       </button>
                       
                       </a>
                    </div>
                   <a href="fittrack.png" target="_blank">
                      <img className="imgsite" src="fittrack.png" alt=""/>
                   </a>
                 </div><br /><br />
                 <div className="sectionP5">
                <div className="contentP">
                    <h1>Tasko</h1>
                    <p>
   {t("tasko")} </p><br />
                       <div className="tec">
                            <img src="html.png" alt="" title="HTML"/>
                            <img src="css.png" alt="" title="CSS"/>
                            <img src="react.png" alt="" title="React.js"/>
                            <img src="laravel.png" alt="" title="Laravel"/>
                            
                            {/* <img src="mongo-db.png" alt="" title="MongoDB" /> */}
                            
                       </div>
                       <a href="https://github.com/NizarDouirek/Tasko" target="_blank" rel="noopener noreferrer">
                       <button className="visit5">visit Repository
                       <i className="fa-brands fa-github" style={{marginLeft:'10px'}}></i>
                       </button>
                       
                       </a>
                    </div>
                   
                   <a href="tasko.png" target="_blank">
                      <img className="imgsite" src="tasko.png" alt=""/>
                      </a>
                   
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
        {t("encours")}✨  
        {/* Restez à l'écoute pour découvrir de nouvelles créations et solutions innovantes. */}
    </motion.p>
</motion.div>

               </div>
          </div>
        </>
    )
}