import React from "react";
import "./certification.css"

const certifications = [
  {
    id: 1,
    title: "Maîtrise complète React JS",
    org: "Udemy",
    date: "février 2025",
    color: "blue",
     image: "reactUdemy.webp",
      url: "reactUdemy.jpg",
  },
  {
    id: 2,
    title: "Formation Odoo",
    org: "Technaps",
    date: "Juin 2025",
    color: "orange",
    image: "certifodoo.webp",
     url: "attestationFormationOdoo.pdf",
  },
  {
    id: 3,
    title: "Guide complet de CSS",
    org: "Udemy",
    date: "Août 2025",
    color: "green",
    image: "certifCSS.webp",
     url: "certifUdemyEnCSS.pdf",
  },
  {
    id: 4,
    title: "Mongo",
    org: "MongoDB",
    date: "Août 2025",
    color: "green",
    image: "certifMongoDB.webp",
     url: "certifMongoDB.pdf",
  },

  {
    id: 5,
    title: "Frontend Développement",
    org: "Udemy",
    date: "Septembre 2025",
    color: "purple",
    image: "certifFrontend.webp",
  },
//   {
//     id: 6,
//     title: "Cybersécurité",
//     org: "CompTIA Security+",
//     date: "Juin 2023",
//     color: "yellow",
//     image: "reactUdemy.jpg",
//   },
];

export default function Certifications() {
  return (
    <div className="certifications-container">
      {/* Header */}
      <header className="cert-header fade-in">
        <h1><i class='bx bx-badge-check'></i> Mes Certifications</h1>
        <p></p>
      </header>
     
      {/* Grid */}
      <div className="cert-grid">
        {certifications.map((cert, index) => (
          <div
            key={cert.id}
            className={`cert-card fade-in stagger-${index + 1}`}
          >
              <div className="cert-image">
                <a  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer">
              <img src={cert.image} alt={cert.titre} />
              </a>
            </div>
            <div className="cert-content">
              <div className="cert-title">
                <h3>{cert.title}</h3>
                <div className={`cert-badge ribbon `}>
  ✔
</div>
              </div>
              <p className="orgcert">{cert.org}</p>
              <p className="datecert">{cert.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
