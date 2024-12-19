import React,{useState} from "react";
import './about.css'
export default function About(){
     const [canPlaySound, setCanPlaySound] = useState(false); // État pour activer le son
    
      
      const playSound = () => {
        if (canPlaySound) {
          const sound = new Audio("audio1.mp3");
          sound.play();
        }
      };
    
     
      const enableSound = () => {
        setCanPlaySound(true);
      };
    return(
        <div className="about" onClick={enableSound}>
           <h1 className="titre1" onMouseEnter={playSound}>À Propos</h1>
            <div className="containe">
                <img className="i" src="profillinkd.jpg"/>
                <div className="contentAbout">
                <h2 ><span>Bonjour! Je suis</span> Nizar Douirek</h2>
                <h4>Développeur Full Stack</h4>
                <p>
                   Jeune diplômé en développement digital, passionné <br/> par  les nouvelles
                    technologies et l'innovation, je possède <br/> une solide formation   en
                     programmation  et en conception <br/>de solutions numériques.
               </p>
               <div>
                 <table>
                    <tr>
                        <td>Téléphone </td>
                        <td>+212 699862707</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>douireknizar@gmail.com</td>
                    </tr>
                    <tr>
                        <td>Adresse</td>
                        <td>Hay Nassim, Casablanca</td>
                    </tr>
                    <tr>
                        <td>Langues</td>
                        <td>Arabe, Francais, Anglais</td>
                    </tr>
                 </table>
                
               </div>
               <button className="cv">
               <a href="Nizar douirek.pdf" target="_blank" rel="noopener noreferrer">télécharger CV</a></button>
               </div>
            </div>
        </div>
    )
}