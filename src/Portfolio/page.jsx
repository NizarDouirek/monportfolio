import React from "react";
import "./page.css";

const Page = () => {
  const characters = [
    {
      name: "Dévelopeur FrontEnd",
      image: "front.webp",
      description:
        "Passionné par la conception d'interfaces modernes et intuitives, des designsélégants et fonctionnels, je transformeles idées en expériences web performantes.Expert en HTML, CSS, Bootstrap, JavaScript et React ."
    },
    {
      name: "Dévelopeur BackEnd",
      image: "back.webp",
      description:
        "J'orchestre des solutions backend performantes et sur mesure, garantissant fiabilité, évolutivité et sécurité. Avec une expertise reconnue en Php et Laravel. Maîtrisant les bases de données relationnelles et NoSQL."
    },
    
    {
      name: "Designer",
      image: "design.webp",
      description:
        "Je suis passionné par le design et j’ai développé une expertise sur des outils comme Figma, Canva et Adobe Photoshop, me permettant de créer des interfaces modernes et attrayantes 🎨✨"
    }
  ];

  return (
    <div id="skills" className="skills">
     
    <div class="subtitle-container">
        <span class="line"></span>
        <h1 class="subtitle">Competances</h1>
        <span class="line"></span>
        </div>
        <p className="hover-instruction">💡 Survolez les cartes pour en savoir plus !</p>
    <div className="containerskills">
      {characters.map((character, index) => (
        <div className="cardskills" key={index}>
          <div className="img-container">
            <img src={character.image} alt={character.name} />
          </div>
          <div className="card-details">
            <h2>{character.name}</h2>
            <p>{character.description}</p>
          </div>
        </div>
      ))}
    </div>
    <h1 className="titrecp">Langagues et Framework</h1>
    <div className="pack">
  <section>
    <img className="imgskills" src="html.png" alt="HTML5" />
    <h2>HTML</h2>
  </section>
  <section>
    <img className="imgskills" src="css.png" alt="CSS3" />
    <h2>CSS</h2>
  </section>
  <section>
    <img className="imgskills" src="javascript.png" alt="JavaScript" />
    <h2>JavaScript</h2>
  </section>
  <section>
    <img className="imgskills" src="php (2).png" alt="PHP" />
    <h2>PHP</h2>
  </section>
  <section>
    <img className="imgskills" src="bootstrap-framework.png" alt="Bootstrap" />
    <h2>Bootstrap</h2>
  </section>
  
  <section>
    <img className="imgskills" src="react (1).png" alt="React" />
    <h2>React</h2>
  </section>
  
  <section>
    <img className="imgskills" src="laravel-framework.png" alt="Laravel" />
    <h2>Laravel</h2>
  </section>
  </div>
  <h1 className="titrecp" >Base de données</h1>
  <div className="pack">
  <section>
    <img className="imgskills" src="mysql (1).png" alt="MySQL" />
    <h2>MySQL</h2>
  </section>
  <section>
    <img className="imgskills" src="mongo-db.png" alt="MongoDB" />
    <h2>MongoDB</h2>
  </section>
  </div>
  <h1 className="titrecp">Outils de Développement et de Design</h1>
  <div className="pack">
  <section>
    <img className="imgskills" src="github (2).png" alt="GitHub" />
    <h2>GitHub</h2>
  </section>
  <section>
    <img className="imgskills" src="git (1).png" alt="Git" />
    <h2>Git</h2>
  </section>
  <section>
    <img className="imgskills" src="fg.png" alt="Git" />
    <h2>Figma</h2>
  </section>
  <section>
    <img className="imgskills" src="canva.webp" alt="Git" />
    <h2>Canva</h2>
  </section>
  <section>
    <img style={{width:"100px"}} className="imgskills" src="ps.png" alt="Git" />
    <h2>Photoshop</h2>
  </section>
  </div>
</div>
      
  );
};

export default Page;