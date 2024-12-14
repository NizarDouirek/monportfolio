import React from "react";
import './skills.css';
export default function Skills(){
    return (
        <div id="skills" className="skills">
            <h1 className="titre1">Compétences</h1><br /><br />
            <div className="pack">
                <div className="p1">
                <section>
                    <img className="imgskills" src="html-5.png" alt="" />
                    <h2>html-5</h2>
                </section>
                <section>
                    <img className="imgskills"  src="css-3.png" alt="" />
                    <h2>css-3</h2>
                </section>
                <section>
                    <img className="imgskills" src="bootstrap.png" alt="" />
                    <h2>bootstrap</h2>
                </section>
                <section>
                    <img className="imgskills"  src="java-script.png" alt="" />
                    <h2>java-script</h2>
                </section>
                <section>
                    <img className="imgskills" src="react.png" alt="" />
                    <h2>react</h2>
                </section>
                </div>
                <div className="p2">
                <section>
                    <img className="imgskills" src="php.png" alt="" />
                    <h2>php</h2>
                </section>
                <section>
                    <img className="imgskills" src="laravel1.png" alt="" />
                    <h2>laravel</h2>
                </section>
                <section>
                    <img className="imgskills" src="github1.png" alt="" />
                    <h2>github</h2>
                </section>
                <section>
                    <img className="imgskills" src="git.png" alt="" />
                    <h2>git</h2>
                </section>
                
                </div>
            </div>
        </div>
    )
}