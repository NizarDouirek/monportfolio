import React from "react";
import "./footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Footer() {
  return (
    <footer 
      className="footer"
      role="contentinfo"
      itemScope
      itemType="http://schema.org/WPFooter"
    >
      <div
        className="social"
        role="navigation"
        aria-labelledby="social-heading"
      >
        <h1>Contactez moi</h1>
        <br />
        <a id="i"
          href="https://web.facebook.com/nizar.douirek.50"
          className="face"
          aria-label="Facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a id="i"
          className="twit"
          href="https://x.com/hicham588696564"
          aria-label="Twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-x-twitter"></i>
        </a>
        <a id="i"
          className="linkdeen"
          href="https://www.linkedin.com/in/nizar-douirek123/"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a id="i"
          className="insta"
          href="https://www.instagram.com/nizar_douirek"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a id="i"
          className="gt"
          href="https://github.com/NizarDouirek"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
      <hr className="footer-break" />
      <ul
        className="footer-links"
        role="navigation"
        aria-labelledby="footer-links-heading"
      >
        <h3 id="footer-links-heading" className="sr-only">
          Footer Links
        </h3>
        <li>
          <a href="homme">Acceuil</a>
        </li>
        <li>
          <a href="about">A propos</a>
        </li>
        <li>
          <a href="skills">compétance</a>
        </li>
        <li>
          <a href="projet">Projet</a>
        </li>
        <li>
          <a href="Cv">CV</a>
        </li>
        <li>
          <a href="contact">Contact</a>
        </li>
      </ul>
      <p className="copyright">
        copyright © Mon Portfolio 2024 <br />
        NIZAR DOUIREK
      </p>
    </footer>
  );
}
