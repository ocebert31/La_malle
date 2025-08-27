import animateur from "../assets/animateur.webp"

function BiographyPage() {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-12 font-sans text-gray-800">
      <header className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-primary">Mon Parcours Professionnel</h1>
      </header>
      <section className="space-y-8">
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3 flex items-center justify-center">
            <div className="flex items-center justify-center">
              <img src={animateur} alt="photo de l'animateur" className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg"/>
            </div>
          </div>
          <div className="md:w-2/3 space-y-3">
            <h2 className="text-2xl font-semibold text-secondary">Préambule</h2>
            <p className="leading-relaxed">
              Fort de près de <span className="font-semibold">35 ans d'expérience</span> dans l'animation en établissement d'accueil pour personnes
              âgées, mon parcours a toujours été guidé par une conviction profonde : la nécessité de placer la
              personne au cœur de ses choix. Dès 1993, cette philosophie s'est traduite par la mise en place
              d'animations profondément innovantes, comme l'organisation d'un séjour de vacances pour les
              résidents de cinq maisons de retraite
               
            </p>
            <p>
              Afin de <span className="font-semibold">donner la parole aux résidents</span>, nous avions créé un catalogue de destinations, leur
              permettant de choisir collectivement leur lieu de vacances. Cette initiative, pionnière à l'époque,
              était en avance sur les textes de loi qui viendraient bien plus tard. Elle fait écho aujourd'hui aux
              principes fondamentaux inscrits dans la <span className="font-semibold">Loi du 2 février 2022</span>, qui renforce les droits des résidents
              en EHPAD. Elle est également en parfaite résonance avec le <span className="font-semibold">rapport de 2022 sur L'EHPAD DU
              FUTUR COMMENCE AUJOURD'HUI</span>, notamment sur la partie qui insiste sur la nécessité de
              garantir la <span className="font-semibold">liberté des résidents</span> et leur rôle d'acteurs de leur propre vie.
            </p>
            <p className="leading-relaxed">
              Mon engagement a toujours été de considérer chaque personne, et non pas comme résident mais
              comme un individu à part entière. Dans cette perspective, il me semble essentiel de substituer le mot
              "<span className="font-semibold">habitant</span>" au terme de "<span className="font-semibold">résident</span>". Comme l'écrivait Jean-Jacques Rousseau dans Du Contrat
              social, il ne s'agit pas de simplement occuper un lieu, mais d'être un citoyen à part entière, un acteur
              de sa propre vie au sein de la communauté. Ce terme souligne ainsi la dignité et la participation
              active de chacun.
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-6 space-y-3">
            <h2 className="text-2xl font-semibold text-secondary">
              Chapitre 1 : Dernier Projet Majeur Réalisé : Création d’un Arbre de Vie
            </h2>
            <div className="border-l-4 border-primary pl-4 space-y-4">
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li><span className="font-semibold">Titre :</span><span className="italic pl-1"> Création d’un arbre de vie</span> : Projet intergénérationnel et thérapeutique</li>
                <li><span className="font-semibold">Auteurs :</span> Lempereur, P., Fayad, B. et l’équipe pédagogique de l’école du Terne</li>
                <li><span className="font-semibold">Année :</span> 2025</li>
                <li><span className="font-semibold">Lieu :</span> EHPAD "Les Vertes Années"</li>
                <li><span className="font-semibold">Période :</span> Janvier à juin 2025</li>
                <li>
                  <span className="font-semibold">Mots-clés :</span> 
                  <span className="ml-1 inline-flex flex-wrap gap-2">
                    {["Animation pour seniors", "Art thérapie", "Appropriation de l’art (sculpture, peinture)", "Stimulation cognitive", "Cohésion sociale"].map((tag, i) => (
                      <span key={i} className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-sm">{tag}</span>
                    ))}
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 space-y-3">
            <h2 className="text-2xl font-semibold text-primary">
              Chapitre 2 : Compétences et Méthodologies Développées
            </h2>
            <div className="border-l-4 border-secondary pl-4 space-y-4">
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li><span className="font-semibold">Titre :</span><span className="italic pl-1">Animer en tenant compte des objectifs de vie du résident, en l’écoutant et en respectant sa singularité</span></li>
                <li><span className="font-semibold">Auteur :</span> Lempereur, P.</li>
                <li><span className="font-semibold">Source :</span> Participations à de nombreuses formations (L’animation en Humanitude, "Le prendre soin" de M. Walter Hesbeen, Projet d’Accompagnement Personnalisé en Humanitude, etc.)</li>
                <li><span className="font-semibold">Période :</span> Janvier 2010 à décembre 2025</li>
                <li>
                  <span className="font-semibold">Mots-clés :</span> 
                  <span className="ml-1 inline-flex flex-wrap gap-2">
                    {["Gestion de projet d’animation", "Doctrine de l’Humanitude", "Bien traitance", "Création de lieu de vie et d’envies"].map((tag, i) => (
                      <span key={i} className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-sm">{tag}</span>
                    ))}
                  </span>
                </li>
                <li>
                  <span className="font-semibold">Résumé analytique :</span> Cette section résume l’acquisition de compétences en gestion de projet, immédiatement appliquées pour optimiser les calendriers et budgets, ce qui a entraîné une augmentation de <span className="font-semibold">15 %</span> de l'efficacité opérationnelle des animations
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 space-y-3">
            <h2 className="text-2xl font-semibold text-secondary">
              Chapitre 3 : Postes et Responsabilités
            </h2>
            <div className="border-l-4 border-primary pl-4 space-y-4">
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li><span className="font-semibold">Titre :</span><span className="italic pl-1">Responsable du service d’animation de l’EHPAD et "Chef de Projet Animation" au niveau de l’association GAMA et participant actif au Groupement d’Organisation de la Semaine Bleue du canton de Fourmies</span></li>
                <li><span className="font-semibold">Auteur :</span> Lempereur, P.</li>
                <li><span className="font-semibold">Source :</span> Résidence "Les Vertes Années" et Association GAMA</li>
                <li><span className="font-semibold">Période :</span> 1995-2025</li>
                <li>
                  <span className="font-semibold">Mots-clés :</span> 
                  <span className="ml-1 inline-flex flex-wrap gap-2">
                    {["Direction d'équipe", "Planification stratégique des animations", "Communication", "Évaluation des besoins", "Évaluation de l’équipe"].map((tag, i) => (
                      <span key={i} className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-sm">{tag}</span>
                    ))}
                  </span>
                </li>
                <li>
                  <span className="font-semibold">Résumé analytique :</span> En tant que Chef de Projet, l'auteur a dirigé une équipe de 5 animateurs, conçu et déployé un programme d’activités pour 3 résidences. Le rôle incluait la supervision d’équipes, la gestion budgétaire et les rapports d'activité. Il a également mis en place un système d'évaluation pour mesurer l'impact social des projets
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BiographyPage;