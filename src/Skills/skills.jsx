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
            <img className="imgskills" src="html-5.png" alt="HTML5" />
            <h2>HTML5</h2>
          </section>
          <section onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img className="imgskills" src="css-3.png" alt="CSS3" />
            <h2>CSS3</h2>
          </section>
          <section onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img className="imgskills" src="bootstrap.png" alt="Bootstrap" />
            <h2>Bootstrap</h2>
          </section>
          <section onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img className="imgskills" src="js.svg" alt="JavaScript" />
            <h2>JavaScript</h2>
          </section>
          <section onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img className="imgskills" src="react.svg" alt="React" />
            <h2>React</h2>
          </section>
          <section onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img className="imgskills" src="php2.svg" alt="PHP" />
            <h2>PHP</h2>
          </section>
          <section onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img className="imgskills" src="laravel1.png" alt="Laravel" />
            <h2>Laravel</h2>
          </section>
          <section onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img className="imgskills" src="sql.png" alt="MySQL" />
            <h2>MySQL</h2>
          </section >
          <section onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img className="imgskills" src="mongo.svg" alt="MongoDB" />
            <h2>MongoDB</h2>
          </section>
          <section onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img className="imgskills" src="github1.png" alt="GitHub" />
            <h2>GitHub</h2>
          </section>
          <section onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img className="imgskills" src="git.png" alt="Git" />
            <h2>Git</h2>
          </section>
        </div>
      </div>
      
      <div className="outils">
        <h2>
          Créateurs d'expériences web modernes et solutions backend puissantes
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
              <h1>Développeur FrontEnd</h1>
              <p>
                Passionné par la création d'expériences web modernes et
                intuitives, je transforme des concepts en interfaces élégantes
                et performantes. Avec une expertise solide en HTML, CSS,
                Bootstrap, JavaScript et des frameworks comme React.
              </p>
            </div>
          </div>

          <div
            className="circle2"
            onMouseEnter={() => playSound("pop.mp3")} // Un autre son
          >
            <img src="rr.jpg" alt="Backend Developer" />
            <div className="det2">
              <h1>Développeur BackEnd</h1>
              <p>
                Je conçois des architectures backend qui assurent fiabilité,
                évolutivité et sécurité. Expert en langages comme Laravel et
                Node.js, et maîtrisant les bases de données relationnelles et
                NoSQL.
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
              <img src="github1.png" alt="GitHub" />
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
