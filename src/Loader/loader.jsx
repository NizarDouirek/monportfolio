import React, { useEffect } from "react";
import './loader.css';

export default function Loader({ setIsLoaded }) {
    useEffect(() => {
        console.log("Loader started"); // Vérifier que le Loader démarre
        const timer = setTimeout(() => {
            setIsLoaded(true);
            console.log("Loader finished");
            return () => {
                console.log("Loader unmounted");} // Vérifier que le Loader termine après 3 secondes
        }, 4000); // 1 secondes
        
        return () => clearTimeout(timer); // Nettoyage pour éviter les fuites de mémoire
    }, [setIsLoaded]);

    return (
        <div className="loader">
            <div className="wee">
            <div className="contenuloader">
                <div className="cercleload"></div>
                <div className="cercleload"></div>
                <div className="cercleload"></div>
                <div className="cercleload"></div>
            </div>
            <p className="loading-text">Bienvenue sur mon portfolio...</p>
            </div>
             <video 
                src="Vid7.mp4" 
                autoPlay 
               
                muted 
                className="loader-video"
            />
        </div>
    );
}
