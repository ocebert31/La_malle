// import animateur from "../assets/animateur.webp";
// import { useState, useEffect } from "react";

// function AboutMe() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const tagsStyle ="bg-gradient-to-r from-purple-100 to-purple-200 hover:scale-105 transition-transform px-3 py-1 rounded-full text-sm font-medium";

//   return (
//     <div className={`max-w-5xl mx-auto p-4 sm:p-6 space-y-12 font-sans text-gray-800 transition-all duration-1000 ${
//         isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
//         <header className="text-center space-y-4 px-2 sm:px-6">
//             <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
//             Mon Parcours Professionnel
//             </h1>
//             <p className="text-gray-600 max-w-xl sm:max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
//                 35 ans d'expérience dans l'animation pour personnes âgées, guidée par la
//                 conviction de placer la personne au cœur de ses choix.
//             </p>
//         </header>

//         <section className="relative">
//             <div className="absolute top-0 left-6 sm:left-1/2 transform sm:-translate-x-1/2 w-1 bg-primary/20 h-full rounded-full"></div>
//             <div className="relative mb-12 flex flex-col md:flex-row md:even:flex-row-reverse items-center">
//                 <div className="md:w-1/3 flex items-center justify-center p-4">
//                     <img
//                      width="192"
//                     height="192"
//                     src={animateur}
//                     alt="Animateur pour les séniors"
//                     className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg hover:scale-105 transition-transform duration-500"
//                     />
//                 </div>
//                 <div className="md:w-2/3 bg-white rounded-xl shadow-lg p-4 sm:p-6 space-y-4">
//                     <h2 className="text-xl sm:text-2xl font-semibold text-secondary">
//                         1993 — Préambule
//                     </h2>
//                     <p className="leading-relaxed text-sm sm:text-base">
//                         Dès 1993, cette philosophie s'est traduite par la mise en place
//                         d'animations profondément innovantes, comme l'organisation d'un séjour
//                         de vacances pour les résidents de cinq maisons de retraite.
//                     </p>
//                     <p className="text-sm sm:text-base">
//                         Afin de <span className="font-medium">donner la parole aux résidents</span>, nous avions créé un catalogue de destinations, leur permettant de choisir collectivement leur lieu de vacances. 
//                         Cette initiative, pionnière à l'époque, était en avance sur les textes de loi qui viendraient bien plus tard. 
//                         Elle fait écho aujourd'hui aux principes fondamentaux inscrits dans la <span className="font-medium">Loi du 2 février 2022</span>, qui renforce les droits des résidents en EHPAD. 
//                         Elle est également en parfaite résonance avec le <span className="font-medium">rapport de 2022 sur L'EHPAD DU FUTUR COMMENCE AUJOURD'HUI</span>, 
//                         notamment sur la partie qui insiste sur la nécessité de garantir la <span className="font-medium">liberté des résidents</span> et leur rôle d'acteurs de leur propre vie.
//                     </p>
//                     <p className="leading-relaxed text-sm sm:text-base">
//                         Mon engagement a toujours été de considérer chaque personne, et non pas seulement chaque résident, comme un individu à part entière. 
//                         Dans cette perspective, il me semble essentiel de substituer le mot "<span className="font-medium">habitant</span>" au terme de "<span className="font-medium">résident</span>". 
//                         Comme l'écrivait Jean-Jacques Rousseau dans Du Contrat social, il ne s'agit pas de simplement occuper un lieu, mais d'être un citoyen à part entière, un acteur de sa propre vie au sein de la communauté. 
//                         Ce terme souligne ainsi la dignité et la participation active de chacun.
//                     </p>
//                 </div>
//             </div>
//             <div className="relative mb-12 flex flex-col md:flex-row items-center">
//                 <div className="md:w-2/3 bg-white rounded-xl shadow-lg p-4 sm:p-6 space-y-4">
//                     <h2 className="text-xl sm:text-2xl font-semibold text-primary">
//                         2025 — Projets et Réalisations
//                     </h2>
//                     <div className="border-l-4 border-primary pl-4 space-y-3">
//                         <h3 className="text-lg sm:text-xl font-medium text-secondary">
//                             Création d'un Arbre de Vie
//                         </h3>
//                         <p className="text-gray-800 font-medium text-sm sm:text-base">
//                             LEMPEREUR P, FAYAD B et l’équipe pédagogique de l’école du Terne.
//                         </p>
//                         <p className="text-gray-700 text-sm sm:text-base">
//                             EHPAD "Les Vertes Années" | Projet intergénérationnel et thérapeutique
//                         </p>
//                         <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
//                             {[
//                             "Animation pour seniors",
//                             "Art thérapie",
//                             "Appropriation de l'art",
//                             "Stimulation cognitive",
//                             "Cohésion sociale",
//                             ].map((tag, i) => (
//                             <span key={i} className={tagsStyle}>
//                                 {tag}
//                             </span>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="relative mb-12 flex flex-col md:flex-row-reverse items-center">
//                 <div className="md:w-2/3 bg-white rounded-xl shadow-lg p-4 sm:p-6 space-y-4">
//                     <h2 className="text-xl sm:text-2xl font-semibold text-primary">
//                         2010-2025 — Compétences et Méthodologies
//                     </h2>
//                     <div className="border-l-4 border-secondary pl-4 space-y-3">
//                         <h3 className="text-lg sm:text-xl font-medium text-secondary">
//                             Animer en humanitude
//                         </h3>
//                         <p className="text-sm sm:text-base">
//                             <span className="font-semibold">Auteur :</span> Philippe CRÔNE <br />
//                             <span className="font-semibold">Source :</span> Organisme de formation "L’animation en humanitude" <br />
//                             <span className="font-semibold">Période :</span> Janvier 2010 - Décembre 2025
//                         </p>
//                         <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
//                             {[
//                             "Gestion de projet d’animation",
//                             "Doctrine de l’Humanitude",
//                             "Planification stratégique",
//                             "Évaluation des besoins",
//                             "Optimisation budgétaire",
//                             ].map((tag, i) => (
//                             <span key={i} className={tagsStyle}>
//                                 {tag}
//                             </span>
//                             ))}
//                         </div>
//                         <p className="leading-relaxed text-sm sm:text-base">
//                             Formation intensive et obtention d'une certification attestant de la maîtrise
//                             des outils et techniques de gestion de projet. Cette expertise a été immédiatement
//                             appliquée pour optimiser le calendrier des activités et les budgets associés, menant
//                             à une augmentation de <span className="font-semibold">15 %</span> de l'efficacité
//                             opérationnelle des animations.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//             <div className="relative mb-12 flex flex-col md:flex-row items-center">
//                 <div className="md:w-2/3 bg-white rounded-xl shadow-lg p-4 sm:p-6 space-y-4">
//                     <h2 className="text-xl sm:text-2xl font-semibold text-primary">
//                         1995-2025 — Postes et Responsabilités
//                     </h2>
//                     <div className="border-l-4 border-primary pl-4 space-y-3">
//                         <h3 className="text-lg sm:text-xl font-medium text-secondary">
//                             Responsable du service d’animation de l'EHPAD & Chef de Projet Animation de l'association GAMA
//                         </h3>
//                         <p className="text-gray-700 text-sm sm:text-base">
//                             EHPAD "Les Vertes Années" & Association GAMA
//                         </p>
//                         <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
//                             {[
//                             "Animations innovantes",
//                             "Planification stratégique",
//                             "Communication",
//                             "Évaluation des besoins",
//                             "Coordination inter-établissements",
//                             "Direction d'équipe",
//                             "Évaluation de l'équipe",
//                             ].map((tag, i) => (
//                             <span key={i} className={tagsStyle}>
//                                 {tag}
//                             </span>
//                             ))}
//                         </div>
//                         <p className="leading-relaxed text-sm sm:text-base">
//                             En tant que Chef de Projet, j'ai dirigé une équipe de 5 animateurs et été responsable de la conception et du déploiement du programme d'activités pour 3 résidences. 
//                             Mon rôle incluait la supervision des équipes, la gestion budgétaire et le rapport d'activité aux partenaires financiers. 
//                             J'ai également mis en place un système d'évaluation pour mesurer l'impact social de nos animations.
//                         </p>              
//                     </div>
//                 </div>
//             </div>
//         </section>
//     </div>
//   );
// }

// // export default AboutMe;

import { useState } from "react";
import papier from "../assets/papier.png";

const pages = [
  {
    left: {
      title: "préambule",
      content: `fort de près de 35 ans d'expérience dans l'animation en établissement d'accueil pour personnes âgées, mon parcours a toujours été guidé par une conviction profonde : la nécessité de placer la personne au cœur de ses choix. dès 1993, cette philosophie s'est traduite par la mise en place d'animations profondément innovantes, comme l'organisation d'un séjour de vacances pour les résidents de cinq maisons de retraite. 
afin de donner la parole aux résidents, nous avions créé un catalogue de destinations, leur permettant de choisir collectivement leur lieu de vacances. cette initiative, pionnière à l'époque, était en avance sur les textes de loi qui viendraient bien plus tard. elle fait écho aujourd'hui aux principes fondamentaux inscrits dans la loi du 2 février 2022, qui renforce les droits des résidents en ehpad. elle est également en parfaite résonance avec le rapport de 2022 sur l'ehpad du futur commence aujourd'hui, notamment sur la partie qui insiste sur la nécessité de garantir la liberté des résidents et leur rôle d'acteurs de leur propre vie. 
mon engagement a toujours été de considérer chaque personne, et non pas comme résident mais comme un individu à part entière. dans cette perspective, il me semble essentiel de substituer le mot "habitant" au terme de "résident". comme l'écrivait jean-jacques rousseau dans du contrat social, il ne s'agit pas de simplement occuper un lieu, mais d'être un citoyen à part entière, un acteur de sa propre vie au sein de la communauté. ce terme souligne ainsi la dignité et la participation active de chacun.`
    },
    right: {
      title: "table des matières",
      content: `1. dernier projet majeur réalisé : création d’un arbre de vie
• titre : création d’un arbre de vie [projet intergénérationnel et thérapeutique].
• auteurs : lempereur, p., fayad, b. et l’équipe pédagogique de l’école du terne.
• année : 2025.
• lieu : ehpad "les vertes années".
• période : janvier à juin 2025.
• mots-clés : animation pour seniors, art thérapie, appropriation de l’art (sculpture, peinture), stimulation cognitive, cohésion sociale.

2. compétences et méthodologies développées
• titre : animer en tenant compte des objectifs de vie du résident, en l’écoutant et en respectant sa singularité.
• auteur : lempereur, p.
• source : participations à de nombreuses formations (l’animation en humanitude, "le prendre soin" de m. walter hesbeen, projet d’accompagnement personnalisé en humanitude, etc.).
• période : janvier 2010 à décembre 2025.
• mots-clés : gestion de projet d’animation, doctrine de l’humanitude, bien traitance, création de lieu de vie et d’envies.
• résumé analytique : cette section résume l’acquisition de compétences en gestion de projet, immédiatement appliquées pour optimiser les calendriers et budgets, ce qui a entraîné une augmentation de 15 % de l'efficacité opérationnelle des animations.

3. postes et responsabilités
• titre : responsable du service d’animation de l’ehpad et "chef de projet animation" au niveau de l’association gama et participant actif au groupement d’organisation de la semaine bleue du canton de fourmies
• auteur : lempereur, p.
• source : résidence "les vertes années" et association gama.
• période : 1995-2025.
• mots-clés : direction d'équipe, planification stratégique des animations, communication, évaluation des besoins, évaluation de l’équipe.
• résumé analytique : en tant que chef de projet, l'auteur a dirigé une équipe de 5 animateurs, conçu et déployé un programme d’activités pour 3 résidences. le rôle incluait la supervision d’équipes, la gestion budgétaire et les rapports d'activité. il a également mis en place un système d'évaluation pour mesurer l'impact social des projets.`
    }
  },
];

export default function LivreAncien() {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, pages.length - 1));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 0));

  return (
    <div className="min-h-screen flex flex-col items-center py-10 font-serif ">
      {/* livre */}
      <div className="relative w-full max-w-7xl flex overflow-hidden shadow-[0_25px_50px_rgba(0,0,0,0.7)] rounded-lg">
        {/* reliure centrale */}
        <div className="absolute inset-y-0 left-1/2 w-[6px] -translate-x-1/2 bg-gradient-to-b from-transparent via-[#00000050] to-transparent z-10" />
        
        {/* page gauche */}
        <div
          className="w-[52%] p-10 relative bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${papier})`,
            boxShadow: "inset 0 0 30px rgba(0,0,0,0.70), -15px 0 25px rgba(0,0,0,0.8)",
            WebkitMaskImage: "radial-gradient(circle at 20% 20%, black 95%, transparent 100%)",
            maskImage: "radial-gradient(circle at 20% 20%, black 95%, transparent 100%)",
            maskComposite: "intersect",
            WebkitMaskComposite: "destination-in",
          }}
        >
          <h2 className="text-3xl font-bold mb-6 text-[#2a1a0f] font-[Cormorant]">
            {pages[currentPage].left.title}
          </h2>
          <p className="whitespace-pre-line text-[#3e2c1c] leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:mr-2 first-letter:text-[#2a1a0f]">
            {pages[currentPage].left.content}
          </p>
          <span className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm text-[#6b4a2b] italic">
            page {currentPage * 2 + 1}
          </span>
        </div>

        {/* page droite */}
        <div
          className="w-[52%] p-10 relative bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${papier})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            transform: "scaleX(-1)", // inverse seulement l'image
            // boxShadow: "inset 0 0 30px rgba(0,0,0,0.35), 15px 0 25px rgba(0,0,0,0.4)",
            boxShadow: "inset 0 0 30px rgba(0,0,0,0.70), -15px 0 25px rgba(0,0,0,0.8)",
          }}
        >
          <div style={{ transform: "scaleX(-1)" }}> {/* re-inverse le texte */}
            <h2 className="text-3xl font-bold mb-6 text-[#2a1a0f] font-[Cormorant]">
              {pages[currentPage].right.title}
            </h2>
            <p className="whitespace-pre-line text-[#3e2c1c] leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:mr-2 first-letter:text-[#2a1a0f]">
              {pages[currentPage].right.content}
            </p>
            <span className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm text-[#6b4a2b] italic">
              page {currentPage * 2 + 2}
            </span>
          </div>
        </div>
      </div>

      {/* navigation */}
      <div className="flex justify-between w-full max-w-7xl mt-6 px-10">
        <button
          onClick={prevPage}
          className="px-6 py-2 bg-[#8b5e3c] text-[#fdf5e6] rounded hover:bg-[#6b4a2b] transition"
        >
          ◀ page précédente
        </button>
        <button
          onClick={nextPage}
          className="px-6 py-2 bg-[#8b5e3c] text-[#fdf5e6] rounded hover:bg-[#6b4a2b] transition"
        >
          page suivante ▶
        </button>
      </div>
    </div>
  );
}
