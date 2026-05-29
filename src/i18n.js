import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      fr: {
        translation: {
          // HEDEAR
          accueil: "Accueil",
          apropos: "À propos",
          competences: "Compétences",
          parcours: "Parcours",
          projets: "Projets",
          contact: "Contact",

          // HOMME
         intro1: "Je transforme vos idées en applications web rapides, intuitives et scalables, pour répondre parfaitement aux besoins de vos utilisateurs.",
         Bonjour: "Bonjour",
         jesuis:"je suis",
         job: "Développeur Full Stack",
         contactezMoi: "Contactez-moi",
         telechargerCV: "Consulter mon CV",
         descriptionDev: "Développeur FrontEnd ✦ Développeur BackEnd ✦ Développeur d'applications ✦ Développeur d'interfaces utilisateur ✦ Développeur créatif ✦ Développeur Web ✦ Freelancer ✦ Développeur FrontEnd ✦ Développeur BackEnd ✦ Développeur d'applications ✦ Développeur d'interfaces utilisateur ✦ Développeur créatif ✦ Développeur Web ✦ Freelancer ✦ Développeur FrontEnd ✦ Développeur BackEnd ✦ Développeur d'applications ✦ Développeur d'interfaces utilisateur ✦ Développeur créatif ✦ Développeur Web ✦ Freelancer ",
         skills: "Compétences",
projetsRealises: "Projet ",
certification: "Certification",
 

        //  ABOUT
         BonjourJesuis:"Bonjour! Je suis",
         resumeAbout:" Développeur Full Stack axé sur la performance et l'innovation, je crée des solutions web robustes et intuitives, transformant vos défis digitaux en expériences utilisateur fluides qui génèrent de la valeur",
         tel:"Téléphone",
         adr:"Adresse",
         langue:"Langues",
         linkdeen:"Visiter mon linkedin",

         // SKILLS
         hover: " Survolez les cartes pour en savoir plus !",
         frontendtitle:"Développeur FrontEnd",
         frontenddescription:"Passionné par la conception d'interfaces modernes et intuitives, des designs élégants et fonctionnels, je transforme les idées en expériences web performantes. Expert en HTML, CSS, Bootstrap, JavaScript et React.",
         backendtitle:"Développeur BackEnd",
         backenddescription:"Je développe des solutions backend performantes, sécurisées et sur mesure, avec une expertise en PHP/Laravel et bases de données (relationnelles et NoSQL), me permet de répondre efficacement à vos besoins spécifiques.",
         designerdescription:"Je suis passionné par le design et j’ai développé une expertise sur des outils comme Figma, Canva et Adobe Photoshop, me permettant de créer des interfaces modernes et attrayantes 🎨✨",
         languagesFrameworks: "Langages et Frameworks",
         databases: "Base de données",
         tools: "Outils de Développement et de Design",

        //  CV
         formation:"Formation",
         experience:"Expérience",
         est:"Licence Professionnelle en Génie Informatique",
         desEst:"formation polyvalente couvre toutes les étapes de la création d'un projet informatique, de la conception à la mise en service. Elle apporte une solide expertise dans le développement d'applications et de solutions web, tout en intégrant les principes essentiels de la sécurité et de la gestion de réseau",
         ecoleEst:"📍 EST – École Supérieure de Technologie, Casablanca",
        
         forodoo:"Formation Odoo chez Technaps",
         descodoo:"Formation 100% en ligne couvrant l'installation et la configuration d’Odoo sur Linux, le développement de modules personnalisés, l’intégration d’APIs tierces, ainsi que les bonnes pratiques de versioning, test et déploiement.",
         dts:"Technicien spécialisé en développement digital option ‘full-stack web’ ",
         ecoleista:"📍 A l'institut spécialisé en technologie appliquée NTIC 1, Casablanca",
         dscIsta:"Formation axée sur la conception, le développement et le déploiementd’applications web dynamiques, incluant des projets pratiques avec React.js et Laravel.",
         bac:"Baccalaureate en Sciences de vie et de terre",
         ecolebac:"📍 En Lycée Ibno-Khatib, Casablanca",

         dateForodoo:"Avril 2025 - Juin 2025",
         dateEst:"oct 2025 - Présent",
          stagevnb: "Stagiaire Développeur Mobile, VNB-IT",
          datedevnb: "Avril 2025 – Juillet 2025",
          descvnb: "Développement de l’application mobile LCR, une plateforme numérique de l’auto-école GMP, axée sur la formation accélérée à la conduite et l’accompagnement personnalisé des élèves.",
          techvnb: "Technologies utilisées :",

          Yokamos: "Développeur Full Stack, YOKAMOS",
          dateYokamos: "Nov 2025 – Présent",
          descYokamos: "Conception et développement d'interfaces créatives pour centres de surveillance (SOC). Création de Dashboards pour Solutions SOC . Visualisation de données de sécurité en temps réel, monitoring des alertes et analyse des journaux (logs). Développement de solutions applicatives pour la détection de menaces et la gestion des vulnérabilités.",
          techYokamos: "Technologies utilisées :",

          stageTechnaps: "Stagiaire Développeur Full Stack, TECHNAPS",
          dateTechnaps: "Décembre 2024 - Mars 2025",
          descTechnaps: "Développement de l'interface d'un site web de réservation d'hôtels, de voitures et de restaurants.",
          attestationTechnaps: " Attestation",

          stageSirecom: "Stagiaire Développeur Full Stack - Laravel, SIRECOM",
          dateSirecom: "1 Mars 2024 - 1 Mai 2024",
          descSirecom: "Développement d'une application de gestion des équipements informatiques et matériels de l'entreprise.",

        //  PROJET
         projetsIntro: " Découvrez une sélection de mes projets les plus aboutis et innovants ",
         encours:"Des projets passionnants sont en cours de développement.",
        luxuryvoyage: `"Luxury Voyage" est une agence de voyage spécialisée dans l'organisation de séjours d'exception 
pour les voyageurs en quête de confort, d'élégance et d'expériences inoubliables. Notre site est conçu pour vous 
permettre de découvrir et réserver des voyages sur mesure, dans les plus belles destinations du monde.`,

mybien: `"MyBien" une solution numérique conçue pour simplifier et automatiser les tâches 
liées à la gestion des biens de l'entreprise (ordinateurs, imprimantes…). Elle permet aux 
gestionnaires de suivre efficacement leurs biens et d’organiser les données.`,

storeelec: `"StoreElec" est un site de commerce en ligne innovant et fiable, spécialisé dans 
la vente de produits électroniques de haute qualité, notamment des téléphones mobiles, 
des ordinateurs portables et des tablettes. Le site propose une large sélection de marques 
populaires, offrant ainsi aux clients un large éventail d'options pour répondre à leurs besoins technologiques.`,

fittrack: `"FitTrack" est une plateforme innovante dédiée au suivi de la condition physique et des performances. 
Elle permet aux utilisateurs de fixer des objectifs, de suivre leurs progrès en temps réel, et d'accéder 
à des analyses personnalisées pour améliorer leur bien-être et atteindre leurs objectifs de fitness.`,

tasko: `"Tasko" est une application de gestion de tâches conçue pour aider les utilisateurs à organiser efficacement leur quotidien. Elle permet de gérer une liste de tâches de manière simple et intuitive. Chaque utilisateur peut ajouter de nouvelles tâches, les modifier, les marquer comme terminées, ou encore les supprimer.`,
alphaweb: `"Alpha Web" est une agence digitale spécialisée dans les solutions IT, le développement de sites web modernes et la création d’applications sur mesure. Elle accompagne les entreprises dans leur transformation numérique en proposant des services adaptés à leurs besoins`,
tchatoo: "Tchatoo est un chatbot intelligent construit avec React et Groq API (Llama 3). Il offre des réponses en streaming temps réel, un historique de conversations, la recherche, l'export en .txt, le mode sombre/clair et une interface moderne thème orange.",

// CONTACT
ideeProjet: "Une idée en tête ? Un projet à concrétiser ? 🚀 Contactez-moi et transformons vos ambitions en réalité!",
contactReseaux: "Contactez-moi sur n'importe quel réseau social de votre choix ! 😊📩",
envoyer:"Envoyer Message",
lets: "Travaillons",
go: "ensemble !",

placeholderNom: "Entrez votre nom complet",
placeholderEmail: "Entrez votre adresse email ",
placeholderMessage: "Écrivez votre message ici...",
placeholderPhone: "numéro de téléphone",

finished:"  PROJET TERMINE",
ongoing: "  PROJET EN COURS",

  restezConnecte: " Vous aimez mon travail ?",
  boutonLike: "Aimer",
  merciLike: "Merci pour votre soutien ! 🙌"


        },
      },
      en: {
        translation: {
          // HEDEAR
          accueil: "Home",
          apropos: "About",
          competences: "Skills",
          parcours: "Career",
          projets: "Projects",
          contact: "Contact",

          // HOMME
          intro1: "I turn your ideas into fast, intuitive, and scalable web applications to perfectly meet your users’ needs.",
          Bonjour: "Hello",
          jesuis:"I’m",
          job: "Full Stack Developer",
          contactezMoi: "Contact Me",
          telechargerCV: "Consult My Resume",
          descriptionDev: "FrontEnd Developer ✦ BackEnd Developer ✦ Application Developer ✦ UI Developer ✦ Creative Developer ✦ Web Developer ✦ Freelancer FrontEnd Developer ✦ BackEnd Developer ✦ Application Developer ✦ UI Developer ✦ Creative Developer ✦ Web Developer ✦ Freelancer ✦ FrontEnd Developer ✦ BackEnd Developer ✦ Application Developer ✦ UI Developer ✦ Creative Developer ✦ Web Developer ✦ Freelancer ✦ FrontEnd Developer ✦ BackEnd Developer ✦ Application Developer ✦ UI Developer ✦ Creative Developer ✦ Web Developer ✦ Freelancer",
          skills: "Skills",
          projetsRealises:"Project",
          certification: "Certification",

          
        //  ABOUT
          BonjourJesuis:"Hello ! I'm",
          resumeAbout:"Performance and innovation-driven Full Stack Developer, I build robust and intuitive web solutions, transforming your digital challenges into seamless user experiences that generate value",
          tel:"Phone ",
          adr:"Address",
          langue:"Languages",
          linkdeen:" Visit my LinkedIn",

          // SKILLS
          hover: " Hover over the cards to learn more!",
          frontendtitle:"Front-End Developer",
          frontenddescription:"Passionate about designing modern and intuitive interfaces, with elegant and functional designs. I turn ideas into high-performance web experiences. Expert in HTML, CSS, Bootstrap, JavaScript, and React.",
          backendtitle:"Back-End Developer",
          backenddescription:"I develop high-performance, secure, and custom backend solutions, with expertise in PHP/Laravel and databases (relational and NoSQL), allows me to effectively meet your specific needs.",
          designerdescription: "I am passionate about design and have developed expertise in tools such as Figma, Canva, and Adobe Photoshop, enabling me to create modern and attractive interfaces 🎨✨",
          languagesFrameworks: "Languages and Frameworks",
          databases: "Databases",
          tools: "Development and Design Tools",

           //  CV
           est:"Bachelor’s Degree in Computer Engineering",
         desEst:"A versatile program covering all stages of IT project development, from initial design to deployment. It provides solid expertise in building applications and web solutions, while integrating essential principles of cybersecurity and network management",
         dateEst:"oct 2025 - Present", 

         formation:"Education",
          experience:"Experience",
          forodoo:"Odoo Training at Technaps",
          dateForodoo:"April 2025 – June 2025",
          descodoo:"A 100% online training covering the installation and configuration of Odoo on Linux, the development of custom modules, integration of third-party APIs, as well as best practices in versioning, testing, and deployment.",
          dts:"Specialized Technician in Digital Development, 'Full-Stack Web' option",
          ecoleista:"📍 At the Specialized Institute of Applied Technology NTIC 1, Casablanca",
          dscIsta:"Training focused on the design, development, and deployment of dynamic web applications, including practical projects with React.js and Laravel.",
          bac:"Baccalaureate in Life and Earth Sciences",
          ecolebac:"📍 At Lycée Ibno-Khatib, Casablanca",

         Yokamos: "Full Stack Developer, YOKAMOS",
          dateYokamos: "Nov 2025 – Present",
          descYokamos: "Design and development of creative interfaces for Security Operations Centers (SOC). I focus on building advanced dashboards for SOC solutions, featuring real-time security data visualization, alert monitoring, and log analysis. I also develop application-based solutions dedicated to threat detection and vulnerability management",
          techYokamos: "Technologies used: ",


          stagevnb: "Mobile Developer Intern, VNB-IT",
          datedevnb: "April 2025 – July 2025",
          descvnb: "Development of the LCR mobile application, a digital platform for the GMP driving school, focused on accelerated driving training and personalized student support.",
          techvnb: "Technologies used: ",

          stageTechnaps: "Full Stack Developer Intern, TECHNAPS",
          dateTechnaps: "December 2024 - March 2025",
          descTechnaps: "Developed the user interface of a booking website for hotels, cars, and restaurants.",
          attestationTechnaps: " Certificate",

          stageSirecom: "Full Stack Developer Intern - Laravel, SIRECOM",
          dateSirecom: "March 1st, 2024 - May 1st, 2024",
          descSirecom: "Developed an application for managing the company's IT equipment and hardware.",
          
          // PROJET
         
projetsIntro: " Discover a selection of my most refined and innovative projects 💡",
encours:"Exciting projects are currently in development.",

luxuryvoyage: `"Luxury Voyage" is a travel agency specializing in organizing exceptional trips 
for travelers seeking comfort, elegance, and unforgettable experiences. Our website is designed 
to help you discover and book tailor-made journeys to the most beautiful destinations in the world.`,

mybien: `"MyBien" is a digital solution designed to simplify and automate tasks related to company 
asset management (computers, printers, etc.). It enables managers to efficiently track their assets 
and organize relevant data.`,

storeelec: `"StoreElec" is an innovative and reliable e-commerce website specializing in the sale of 
high-quality electronic products, including mobile phones, laptops, and tablets. The site offers a wide 
selection of popular brands, giving customers plenty of options to meet their technology needs.`,

fittrack: `"FitTrack" is an innovative platform dedicated to tracking physical fitness and performance. 
It allows users to set goals, monitor their progress in real-time, and access personalized analytics 
to improve their well-being and achieve their fitness goals.`,
tasko: `"Tasko" is a task management application designed to help users efficiently organize their daily lives. It allows users to manage a to-do list in a simple and intuitive way. Each user can add new tasks, edit them, mark them as completed, or delete them.`,
alphaweb: `"Alpha Web" is a digital agency specialized in IT solutions, modern website development, and custom application creation. It supports businesses in their digital transformation by providing services tailored to their specific needs.`,
tchatoo: "Tchatoo is an intelligent chatbot built with React and Groq API (Llama 3). It features real-time streaming responses, conversation history, search, .txt export, dark/light mode, and a modern orange-themed interface.",

// CONTACT
ideeProjet: "Got an idea in mind? A project to bring to life? 🚀 Reach out and let’s turn your vision into reality!",
contactReseaux: "Feel free to contact me on any social media platform of your choice! 😊📩",
envoyer:"Send Message",
lets:"Let’s",
go:"work together!",
placeholderNom: "Enter your full name",
placeholderEmail: "Enter your email address",
placeholderMessage: "Write your message here...",
placeholderPhone: "Enter your phone number",

finished: "  COMPLETED PROJECT",
ongoing: "  ONGOING PROJECT",

  restezConnecte: " Like my work?",
  boutonLike: "Like",
  merciLike : "Thanks for your support! 🙌"


        },
      },
    },
    lng: "fr", 
    fallbackLng: "fr",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;