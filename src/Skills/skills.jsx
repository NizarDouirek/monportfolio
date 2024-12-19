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
                    <img className="imgskills"  src="jsn.png" alt="" />
                    <h2>java-script</h2>
                </section>
                <section onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <img className="imgskills" src="react.png" alt="" />
                    <h2>react</h2>
                </section>
              
                
                <section onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <img className="imgskills" src="php.png" alt="" />
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
                    <img className="imgskills"  src="mongo.png" alt="" />
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
                </div>
           </div>
        
    )
}