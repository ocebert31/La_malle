// // 1ere proposition de Design
// import animateur from "../assets/animateur.png"

// function AboutMe() {
//   return (
//         <div className="max-w-5xl mx-auto p-6 space-y-12 font-sans text-gray-800">
//         <header className="text-center space-y-4">
//             <h1 className="text-4xl font-bold text-primary">Mon Parcours Professionnel</h1>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//             35 ans d'expérience dans l'animation pour personnes âgées, guidée par la conviction de placer la personne au cœur de ses choix.
//             </p>
//         </header>
//       <section className="space-y-8">
//         <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row gap-6">
//             <div className="md:w-1/3 flex items-center justify-center">
//                 <div className="flex items-center justify-center">
//                     <img src={animateur} alt="photo de l'animateur" className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg"/>
//                 </div>
//             </div>
//             <div className="md:w-2/3 space-y-3">
//                 <h2 className="text-2xl font-semibold text-secondary">Préambule</h2>
//                 <p className="leading-relaxed">
//                     Dès 1993, cette philosophie s'est traduite par la mise en place d'animations profondément innovantes, comme l'organisation d'un séjour de vacances pour les résidents de cinq maisons de retraite.                     
//                 </p>
//                 <p>
//                     Afin de <span className="font-medium">donner la parole aux résidents</span>, nous avions créé un catalogue de destinations, leur permettant de choisir collectivement leur lieu de vacances. 
//                     Cette initiative, pionnière à l'époque, était en avance sur les textes de loi qui viendraient bien plus tard. 
//                     Elle fait écho aujourd'hui aux principes fondamentaux inscrits dans la <span className="font-medium">Loi du 2 février 2022</span>, qui renforce les droits des résidents en EHPAD. 
//                     Elle est également en parfaite résonance avec le <span className="font-medium">rapport de 2022 sur L'EHPAD DU FUTUR COMMENCE AUJOURD'HUI</span>, 
//                     notamment sur la partie qui insiste sur la nécessité de garantir la  <span className="font-medium">liberté des résidents</span> et leur rôle d'acteurs de leur propre vie.
//                 </p>
//                 <p className="leading-relaxed">
//                     Mon engagement a toujours été de considérer chaque personne, et non pas seulement chaque résident, comme un individu à part entière. 
//                     Dans cette perspective, il me semble essentiel de substituer le mot "<span className="font-medium">habitant</span>" au terme de "<span className="font-medium">résident</span>". 
//                     Comme l'écrivait Jean-Jacques Rousseau dans Du Contrat social, il ne s'agit pas de simplement occuper un lieu, mais d'être un citoyen à part entière, un acteur de sa propre vie au sein de la communauté. 
//                     Ce terme souligne ainsi la dignité et la participation active de chacun.
//                 </p>
//             </div>
//         </div>
//         <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
//           <h2 className="text-2xl font-semibold text-primary">Projets et Réalisations</h2>
//             <div className="border-l-4 border-primary pl-4 space-y-3">
//                 <div>
//                 <h3 className="text-xl font-medium text-secondary">Création d'un Arbre de Vie</h3>
//                     <div className="mt-4">
//                         <p className="text-gray-800 font-medium">LEMPEREUR P, FAYAD B et l’équipe pédagogique de l’école du Terne.</p>
//                     </div>
//                 <p className="text-gray-700">
//                     EHPAD "Les Vertes Années" | 2025 | Projet intergénérationnel et thérapeutique
//                 </p>
//                 <div className="flex flex-wrap gap-2 mt-2">
//                     <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-sm">Animation pour seniors</span>
//                     <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-sm">Art thérapie</span>
//                     <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-sm">Appropriation de l'art</span>
//                     <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-sm">Stimulation cognitive</span>
//                     <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-sm">Cohésion sociale</span>
//                 </div>
//                 </div>
//             </div>
//         </div>
//         <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
//             <h2 className="text-2xl font-semibold text-primary">Compétences et Méthodologies Développées</h2>
//             <div className="border-l-4 border-secondary pl-4 space-y-4">
//                 <h3 className="text-xl font-medium text-secondary">Animer en humanitude</h3>
//                 <p className="text-gray-700">
//                 <span className="font-semibold">Auteur :</span> Philippe CRÔNE <br />
//                 <span className="font-semibold">Source :</span> Organisme de formation "L’animation en humanitude" <br />
//                 <span className="font-semibold">Période :</span> Janvier 2010 - Décembre 2025
//                 </p>
//                 <div className="flex flex-wrap gap-2">
//                     {[
//                         "Gestion de projet d’animation",
//                         "Doctrine de l’Humanitude",
//                         "Planification stratégique",
//                         "Évaluation des besoins",
//                         "Optimisation budgétaire"
//                     ].map((keyword, i) => ( <span key={i} className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">{keyword}</span>))}
//                 </div>
//                 <p className="text-gray-700 leading-relaxed">
//                     Formation intensive et obtention d'une certification attestant de la maîtrise
//                     des outils et techniques de gestion de projet. Cette expertise a été immédiatement
//                     appliquée pour optimiser le calendrier des activités et les budgets associés, menant
//                     à une augmentation de <span className="font-semibold">15 %</span> de l'efficacité
//                     opérationnelle des animations.
//                 </p>
//             </div>
//         </div>

//         <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
//             <h2 className="text-2xl font-semibold text-primary">Postes et Responsabilités</h2>
//             <div className="border-l-4 border-primary pl-4 space-y-4">
//                 <h3 className="text-xl font-medium text-secondary">
//                     Responsable du service d’animation de l'EHPAD & Chef de Projet Animation de l'association GAMA
//                 </h3>
//                 <p className="text-gray-700">EHPAD "Les Vertes Années" & Association GAMA | 1995-2025</p>
//                 <div className="flex flex-wrap gap-2">
//                     {[
//                         "Animations innovantes",
//                         "Planification stratégique des animations",
//                         "Communication",
//                         "Évaluation des besoins",
//                         "Coordination inter-établissements",
//                         "Direction d'équipe",
//                         "Évaluation de l'équipe"
//                     ].map((skill, i) => (
//                         <span key={i} className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-sm">
//                         {skill}
//                         </span>
//                     ))}
//                 </div>
//                 <p className="text-gray-700 leading-relaxed">
//                     En tant que Chef de Projet, j'ai dirigé une équipe de 5 animateurs et été responsable de la conception et du déploiement du programme d'activités pour 3 résidences. 
//                     Mon rôle incluait la supervision des équipes, la gestion budgétaire et le rapport d'activité aux partenaires financiers. 
//                     J'ai également mis en place un système d'évaluation pour mesurer l'impact social de nos animations.
//                 </p>
//             </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default AboutMe;

//2e proposition de design
import animateur from "../assets/animateur.png";
import { useState, useEffect } from "react";

function AboutMe() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const tagsStyle ="bg-gradient-to-r from-purple-100 to-purple-200 hover:scale-105 transition-transform px-3 py-1 rounded-full text-sm font-medium";

  return (
    <div className={`max-w-5xl mx-auto p-4 sm:p-6 space-y-12 font-sans text-gray-800 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <header className="text-center space-y-4 px-2 sm:px-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
            Mon Parcours Professionnel
            </h1>
            <p className="text-gray-600 max-w-xl sm:max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
                35 ans d'expérience dans l'animation pour personnes âgées, guidée par la
                conviction de placer la personne au cœur de ses choix.
            </p>
        </header>

        <section className="relative">
            <div className="absolute top-0 left-6 sm:left-1/2 transform sm:-translate-x-1/2 w-1 bg-primary/20 h-full rounded-full"></div>
            <div className="relative mb-12 flex flex-col md:flex-row md:even:flex-row-reverse items-center">
                <div className="md:w-1/3 flex items-center justify-center p-4">
                    <img
                    src={animateur}
                    alt="Animateur"
                    className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg hover:scale-105 transition-transform duration-500"
                    />
                </div>
                <div className="md:w-2/3 bg-white rounded-xl shadow-lg p-4 sm:p-6 space-y-4">
                    <h2 className="text-xl sm:text-2xl font-semibold text-secondary">
                        1993 — Préambule
                    </h2>
                    <p className="leading-relaxed text-sm sm:text-base">
                        Dès 1993, cette philosophie s'est traduite par la mise en place
                        d'animations profondément innovantes, comme l'organisation d'un séjour
                        de vacances pour les résidents de cinq maisons de retraite.
                    </p>
                    <p className="text-sm sm:text-base">
                        Afin de <span className="font-medium">donner la parole aux résidents</span>, nous avions créé un catalogue de destinations, leur permettant de choisir collectivement leur lieu de vacances. 
                        Cette initiative, pionnière à l'époque, était en avance sur les textes de loi qui viendraient bien plus tard. 
                        Elle fait écho aujourd'hui aux principes fondamentaux inscrits dans la <span className="font-medium">Loi du 2 février 2022</span>, qui renforce les droits des résidents en EHPAD. 
                        Elle est également en parfaite résonance avec le <span className="font-medium">rapport de 2022 sur L'EHPAD DU FUTUR COMMENCE AUJOURD'HUI</span>, 
                        notamment sur la partie qui insiste sur la nécessité de garantir la <span className="font-medium">liberté des résidents</span> et leur rôle d'acteurs de leur propre vie.
                    </p>
                    <p className="leading-relaxed text-sm sm:text-base">
                        Mon engagement a toujours été de considérer chaque personne, et non pas seulement chaque résident, comme un individu à part entière. 
                        Dans cette perspective, il me semble essentiel de substituer le mot "<span className="font-medium">habitant</span>" au terme de "<span className="font-medium">résident</span>". 
                        Comme l'écrivait Jean-Jacques Rousseau dans Du Contrat social, il ne s'agit pas de simplement occuper un lieu, mais d'être un citoyen à part entière, un acteur de sa propre vie au sein de la communauté. 
                        Ce terme souligne ainsi la dignité et la participation active de chacun.
                    </p>
                </div>
            </div>
            <div className="relative mb-12 flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 bg-white rounded-xl shadow-lg p-4 sm:p-6 space-y-4">
                    <h2 className="text-xl sm:text-2xl font-semibold text-primary">
                        2025 — Projets et Réalisations
                    </h2>
                    <div className="border-l-4 border-primary pl-4 space-y-3">
                        <h3 className="text-lg sm:text-xl font-medium text-secondary">
                            Création d'un Arbre de Vie
                        </h3>
                        <p className="text-gray-800 font-medium text-sm sm:text-base">
                            LEMPEREUR P, FAYAD B et l’équipe pédagogique de l’école du Terne.
                        </p>
                        <p className="text-gray-700 text-sm sm:text-base">
                            EHPAD "Les Vertes Années" | Projet intergénérationnel et thérapeutique
                        </p>
                        <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
                            {[
                            "Animation pour seniors",
                            "Art thérapie",
                            "Appropriation de l'art",
                            "Stimulation cognitive",
                            "Cohésion sociale",
                            ].map((tag, i) => (
                            <span key={i} className={tagsStyle}>
                                {tag}
                            </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative mb-12 flex flex-col md:flex-row-reverse items-center">
                <div className="md:w-2/3 bg-white rounded-xl shadow-lg p-4 sm:p-6 space-y-4">
                    <h2 className="text-xl sm:text-2xl font-semibold text-primary">
                        2010-2025 — Compétences et Méthodologies
                    </h2>
                    <div className="border-l-4 border-secondary pl-4 space-y-3">
                        <h3 className="text-lg sm:text-xl font-medium text-secondary">
                            Animer en humanitude
                        </h3>
                        <p className="text-sm sm:text-base">
                            <span className="font-semibold">Auteur :</span> Philippe CRÔNE <br />
                            <span className="font-semibold">Source :</span> Organisme de formation "L’animation en humanitude" <br />
                            <span className="font-semibold">Période :</span> Janvier 2010 - Décembre 2025
                        </p>
                        <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
                            {[
                            "Gestion de projet d’animation",
                            "Doctrine de l’Humanitude",
                            "Planification stratégique",
                            "Évaluation des besoins",
                            "Optimisation budgétaire",
                            ].map((tag, i) => (
                            <span key={i} className={tagsStyle}>
                                {tag}
                            </span>
                            ))}
                        </div>
                        <p className="leading-relaxed text-sm sm:text-base">
                            Formation intensive et obtention d'une certification attestant de la maîtrise
                            des outils et techniques de gestion de projet. Cette expertise a été immédiatement
                            appliquée pour optimiser le calendrier des activités et les budgets associés, menant
                            à une augmentation de <span className="font-semibold">15 %</span> de l'efficacité
                            opérationnelle des animations.
                        </p>
                    </div>
                </div>
            </div>
            <div className="relative mb-12 flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 bg-white rounded-xl shadow-lg p-4 sm:p-6 space-y-4">
                    <h2 className="text-xl sm:text-2xl font-semibold text-primary">
                        1995-2025 — Postes et Responsabilités
                    </h2>
                    <div className="border-l-4 border-primary pl-4 space-y-3">
                        <h3 className="text-lg sm:text-xl font-medium text-secondary">
                            Responsable du service d’animation de l'EHPAD & Chef de Projet Animation de l'association GAMA
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base">
                            EHPAD "Les Vertes Années" & Association GAMA
                        </p>
                        <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
                            {[
                            "Animations innovantes",
                            "Planification stratégique",
                            "Communication",
                            "Évaluation des besoins",
                            "Coordination inter-établissements",
                            "Direction d'équipe",
                            "Évaluation de l'équipe",
                            ].map((tag, i) => (
                            <span key={i} className={tagsStyle}>
                                {tag}
                            </span>
                            ))}
                        </div>
                        <p className="leading-relaxed text-sm sm:text-base">
                            En tant que Chef de Projet, j'ai dirigé une équipe de 5 animateurs et été responsable de la conception et du déploiement du programme d'activités pour 3 résidences. 
                            Mon rôle incluait la supervision des équipes, la gestion budgétaire et le rapport d'activité aux partenaires financiers. 
                            J'ai également mis en place un système d'évaluation pour mesurer l'impact social de nos animations.
                        </p>              
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default AboutMe;
