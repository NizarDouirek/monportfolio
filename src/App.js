import React, { useState, useEffect } from 'react';
import './App.css';
import './i18n';
import Header from './Header/header';
import Home from './Home/home';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import About from './About/about';
import Projet from './Projet/projet';
import Skills from './Skills/skills';
import Cv from './Cv/cv';
import Footer from './Footer/foother';
import Contact from './Contact/contact';
import Loader from './Loader/loader';

import ReactGA from "react-ga4";
import ScrollToTop from './ScrollToTop/ScrollToTop';

function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(() =>
    (location.pathname === '/' || location.pathname.toLowerCase() === '/home')
  );

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => setLoading(false), 4000); // 4s loader
      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <>
          <ScrollToTop />
          <Header />
          {/* <Page/> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/Cv" element={<Cv />} />
            <Route path="/projet" element={<Projet />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

function App() {
  useEffect(() => {
    ReactGA.initialize("G-ZDH7MTTLQ9");
    ReactGA.send("pageview");
  }, []);

  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
