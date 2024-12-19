import React,{useState} from "react";
import './contact.css';
export default function Contact(){
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
        <div id="contact" className="contact" onClick={enableSound}>
        <h1 className="titre" onMouseEnter={playSound}>Contact</h1>
        <div className="form">
            <form action="https://formspree.io/f/meoqwagg" method="POST">
                <h2>Contactez-moi</h2><br />
                
                <input type="text" name="name" id="name" placeholder="Votre nom" required /><br />
                
                <input type="email" name="email" id="email" placeholder="Votre email" required /><br />
                
                <textarea name="message" id="message" placeholder="Votre message" required></textarea><br />
                <button type="submit">Envoyer</button>
            </form>
            <div className="detail">
                <h2>Details Contact</h2>
                <div className="contact-detail">
                    <img src="email (1).png" alt="Email Icon" />
                    <p>douireknizar@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src="tel.png" alt="Phone Icon" />
                    <p>+212 699862707</p>
                </div>
                <div className="contact-detail">
                    <img src="adress.png" alt="Phone Icon" />
                    <p>Hay Nassim , Casablanca</p>
                </div>
            </div>
        </div>
    </div>
    )
}