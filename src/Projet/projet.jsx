import React from "react";
import './projet.css';
export default function Projet(){
    return(
        <div id="projet">
          <div className="projets">
               <h1 className="titre">Projets</h1> 
               <div className="projet">
                   <a href="">
                   <img className="imgsite" src="voyage.png" alt=""/><br />
                   </a>
                
                   <a href="">
                   <img  className="imgsite"src="gbien.png" alt="" /><br />
                   </a>
                
                <a href="">
                   <img className="imgsite"src="react.png" alt=""/><br />
                   </a>
                
               </div>
          </div>
        </div>
    )
}