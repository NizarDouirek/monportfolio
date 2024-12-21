import React,{useState}  from "react";
import './skills.css';
export default function Skills(){
     const [canPlaySound, setCanPlaySound] = useState(false); // État pour activer le son
     const [isHovered, setIsHovered] = useState(false);
    
      
      const playSound = () => {
        if (canPlaySound) {
          const sound = new Audio("audio1.mp3");
          sound.play();
        }
      };
      const playSound1 = () => {
        const audio = new Audio("audio.mp3");
        audio.play();
      };
    
     
      const enableSound = () => {
        setCanPlaySound(true);
      };
      const handleMouseEnter = () => {
        setIsHovered(true); // Animation en pause
    };

    const handleMouseLeave = () => {
        setIsHovered(false); // Animation reprend
    };
    return (
        <div id="skills" className="skills" onClick={enableSound}>
            <h1 className="titre1" onMouseEnter={playSound}>Compétences</h1><br /><br />
            <div  class="pack-container">
            <div className="pack" style={{
                    animationPlayState: isHovered ? "paused" : "running",  }}>
                
                <section onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <img className="imgskills" src="html-5.png" alt="" />
                    <h2>html-5</h2>
                </section>
                <section onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <img className="imgskills"  src="css-3.png" alt="" />
                    <h2>css-3</h2>
                </section>
                <section onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <img className="imgskills" src="bootstrap.png" alt="" />
                    <h2>bootstrap</h2>
                </section>
                <section onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <img className="imgskills"  src="js.svg" alt="" />
                    <h2>java-script</h2>
                </section>
                <section onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <img className="imgskills" src="react.svg" alt="" />
                    <h2>react</h2>
                </section>
              
                
                <section onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <img className="imgskills" src="php2.svg" alt="" />
                    <h2>php</h2>
                </section>
                <section onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <img className="imgskills" src="laravel1.png" alt="" />
                    <h2>laravel</h2>
                </section>
                <section onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <img className="imgskills"  src="sql.png" alt="" />
                    <h2>MySQL</h2>
                </section>
                <section onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <img className="imgskills"  src="mongo.svg" alt="" />
                    <h2>MongoDB</h2>
                </section>
                <section onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <img className="imgskills" src="github1.png" alt="" />
                    <h2>github</h2>
                </section>
                <section onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <img className="imgskills" src="git.png" alt="" />
                    <h2>git</h2>
                </section>
                </div>
                </div><br />
                <div className="outils">
                <h2>Créateurs d'expériences web modernes et solutions backend puissantes</h2>
                <h3>"Passez votre souris sur les sections pour découvrir les détails"</h3><br />
                <div className="outil">

                <div className="circle1"   onMouseOver={playSound1}>
                    <img src="ccc.jpg" alt="" />
                    <div className="det">
                      <h1>Developpeur FrontEnd</h1>
                      <p>Passionné par la création d'expériences web modernes et intuitives,
                         je transforme des concepts en interfaces élégantes et performantes.
                          Avec une expertise solide en HTML, CSS, Bootstrap, JavaScript et des frameworks comme React</p>
                   </div>
                </div>

                <div className="circle2" onMouseOver={playSound1}>
                    <img src="rr.jpg" alt="" />
                    <div className="det2">
                      <h1>Developpeur BackEnd</h1>
                      <p> je conçois des architectures backend qui assurent fiabilité, évolutivité et sécurité. Expert en 
                        langages comme laravel et Node.js, et maîtrisant les bases de données relationnelles et NoSQL</p>
                   </div>
                </div>
                {/* <img className="rd" src="d3.webp" alt="" /> */}
                <div className="circle" onMouseOver={playSound1}>
                    <p>Outils de travail</p>
                    <div className="tools">
                       <img src="vs.png" alt="React" />
                       <img src="postman.png" alt="postman" />
                       <img src="gant.jpeg" alt="gant" style={{borderRadius:'100%'}} />
                       <img src="ps.png" alt="ps" style={{width:'80px'}}/>
                       <img src="github1.png" alt="ps" />
                       <img src="figma.png" alt="ps" style={{borderRadius:'50%'}} />
                       
                       <img src="xamp.png" alt="xamp" style={{borderRadius:'50%'}} />
                       <img src="um.png" alt="Bootstrap" />
                       <img src="studio3t.webp" alt="st" style={{borderRadius:'50%'}}/>
                       <img src="g.jpeg" alt="g" style={{borderRadius:'50%'}} />
                   </div>

                </div>
                </div>
                </div>
           </div>
        
    )
}