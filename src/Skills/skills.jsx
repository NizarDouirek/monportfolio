import { useEffect,useState} from "react";
import React from "react";
import "./skills.css";

export default function Skills() {
    const [canPlaySound, setCanPlaySound] = useState(false);

    // Activer la lecture des sons après une interaction utilisateur
    useEffect(() => {
      const enableSound = () => {
        setCanPlaySound(true);
        window.removeEventListener("click", enableSound);
      };
  
      // Ajouter un écouteur d'événement global sur le clic
      window.addEventListener("click", enableSound);
  
      return () => {
        window.removeEventListener("click", enableSound);
      };
    }, []);
  
    // Fonction pour jouer un son si l'utilisateur a interagi
    const playSound = (audioFile) => {
      if (canPlaySound) {
        const sound = new Audio(audioFile);
        sound.play();
      }
    };
    const handleMouseEnter = () => {
        const packContainer = document.querySelector(".pack");
        if (packContainer) {
          packContainer.classList.add("paused");
        }
      };
    
      const handleMouseLeave = () => {
        const packContainer = document.querySelector(".pack");
        if (packContainer) {
          packContainer.classList.remove("paused");
        }
      };
  return (
    <div id="skills" className="skills">
      <audio ></audio>
      <h1 className="titre1">Compétences</h1>
      <br />
      <br />
      <div className="pack-container">
        <div className="pack">
          <section onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img className="imgskills" src="html.png" alt="HTML5" />
            <h2>HTML5</h2>
          </section>
          <section onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img className="imgskills" src="css.png" alt="CSS3" />
            <h2>CSS3</h2>
          </section>
          <section onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img className="imgskills" src="bootstrap-framework.png" alt="Bootstrap" />
            <h2>Bootstrap</h2>
          </section>
          <section onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img className="imgskills" src="javascript.png" alt="JavaScript" />
            <h2>JavaScript</h2>
          </section>
          <section onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img className="imgskills" src="react (1).png" alt="React" />
            <h2>React</h2>
          </section>
          <section onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img className="imgskills" src="php (2).png" alt="PHP" />
            <h2>PHP</h2>
          </section>
          <section onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img className="imgskills" src="laravel-framework.png" alt="Laravel" />
            <h2>Laravel</h2>
          </section>
          <section onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img className="imgskills" src="mysql (1).png" alt="MySQL" />
            <h2>MySQL</h2>
          </section >
          <section onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img className="imgskills" src="mongo-db.png" alt="MongoDB" />
            <h2>MongoDB</h2>
          </section>
          <section onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img className="imgskills" src="github (2).png" alt="GitHub" />
            <h2>GitHub</h2>
          </section>
          <section onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img className="imgskills" src="git (1).png" alt="Git" />
            <h2>Git</h2>
          </section>
        </div>
      </div>
      
      <div className="outils">
        <h2>
        
        Ce que je fais !!
        </h2>
        <h3>"Passez votre souris sur les sections pour découvrir les détails"</h3>
        <br />
        <div className="outil">
          <div
            className="circle1"
            onMouseEnter={() => playSound("pop.mp3")} // Audio au survol
          >
            <img src="ccc.jpg" alt="Frontend Developer" />
            <div className="det">
              <h1>Développeur FrontEnd</h1><br />
              <p>
              Passionné par la conception d'interfaces modernes et intuitives, des designs
               élégants et fonctionnels, je transformeles idées en expériences web performantes.
                Expert en HTML, CSS, Bootstrap, JavaScript et React,  .
              </p>
            </div>
          </div>

          <div
            className="circle2"
            onMouseEnter={() => playSound("pop.mp3")} // Un autre son
          >
            <img src="rr.jpg" alt="Backend Developer" />
            <div className="det2">
              <h1>Développeur BackEnd</h1><br />
              <p>
              J'orchestre des solutions backend performantes et sur mesure, garantissant fiabilité, 
              évolutivité et sécurité. Avec une expertise reconnue en Php et Laravel. 
              Maîtrisant les bases de données relationnelles et NoSQL.
              </p>
            </div>
          </div>

          <div className="circle" onMouseEnter={() => playSound("pop.mp3")} >
            <p>Outils de travail</p>
            <div className="tools">
              <img src="vs.png" alt="Visual Studio" />
              <img src="postman.png" alt="Postman" />
              <img
                src="gant.jpeg"
                alt="Gantt"
                style={{ borderRadius: "100%" }}
              />
              <img
                src="ps.png"
                alt="Photoshop"
                style={{ width: "80px" }}
              />
              <img src="github (2).png" alt="GitHub" />
              <img
                src="figma.png"
                alt="Figma"
                style={{ borderRadius: "50%" }}
              />
              <img
                src="xamp.png"
                alt="XAMPP"
                style={{ borderRadius: "50%" }}
              />
              <img src="um.png" alt="Umbraco" />
              <img
                src="studio3t.webp"
                alt="Studio 3T"
                style={{ borderRadius: "50%" }}
              />
              <img
                src="g.jpeg"
                alt="Google Tools"
                style={{ borderRadius: "50%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
