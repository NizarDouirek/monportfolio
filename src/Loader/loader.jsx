import React, { useEffect } from "react";
import './loader.css';

export default function Loader({ setIsLoaded }) {
    useEffect(() => {
        console.log("Loader started"); // Vérifier que le Loader démarre
        const timer = setTimeout(() => {
            setIsLoaded(true);
            console.log("Loader finished"); // Vérifier que le Loader termine après 3 secondes
        }, 1000); // 1 secondes

        return () => clearTimeout(timer); // Nettoyage pour éviter les fuites de mémoire
    }, [setIsLoaded]);

    return (
        <div className="loader">
            <div className="contenuloader">
                <div className="cercleload"></div>
                <div className="cercleload"></div>
                <div className="cercleload"></div>
                <div className="cercleload"></div>
            </div>
            <p className="loading-text">Chargement...</p>
            
        </div>
    );
}
