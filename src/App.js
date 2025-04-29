import React, { useState,useEffect } from 'react';
import './App.css';
import Header from './Header/header';
import Homme from './Homme/homme';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './About/about';
import Projet from './Projet/projet';
import Skills from './Skills/skills';
import Cv from './Cv/cv';
import Footer from './Footer/foother';
import Contact from './Contact/contact';
import Loader from './Loader/loader';
import Page from './Portfolio/page';
import ReactGA from "react-ga4";

function App() {
    const [isLoaded, setIsLoaded] = useState(true); 
    console.log("App rendered - isLoaded:", isLoaded);// Gérer l'état de chargement
    useEffect(() => {
        ReactGA.initialize("G-ZDH7MTTLQ9"); // Remplace par ton ID GA4
        ReactGA.send("pageview");
      }, []);
    if (!isLoaded) {
        // Tant que le chargement n'est pas terminé, affiche uniquement le Loader
        return <Loader  key="loader" setIsLoaded={setIsLoaded} />;
    }
    
    return (
        <Router>
            
            {/* <Header /> */}
            {/* <Page/> */}
            <Routes>
                <Route path="/" element={<Homme />} />
                <Route path="/homme" element={<Homme />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/Cv" element={<Cv />} />
                <Route path="/projet" element={<Projet />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
