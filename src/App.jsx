import { useState } from 'react';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, BookOpen, BriefcaseBusiness,
  Check, ChevronDown, GraduationCap, Menu, MoveRight, Play, Sparkles,
  Target, Users, X
} from 'lucide-react';

const formations = [
  { level: 'BAC +2', title: 'Informatique', type: 'Présentiel', category: 'Tech', description: 'Concevez, déployez et maintenez des solutions numériques adaptées aux enjeux des entreprises.', icon: '⌘' },
  { level: 'BAC +3', title: 'Management des Ressources Humaines', type: 'Alternance', category: 'Management', description: 'Développez les compétences humaines, juridiques et managériales pour accompagner les talents.', icon: '↗' },
  { level: 'BAC +3', title: 'Business International', type: 'Alternance', category: 'Commerce', description: 'Apprenez à évoluer dans des environnements économiques et commerciaux internationaux.', icon: '◎' },
  { level: 'BAC +3', title: 'Marketing Digital & Communication', type: 'Alternance', category: 'Marketing', description: 'Imaginez des stratégies de marque et activez les bons leviers sur les canaux numériques.', icon: '✳' },
  { level: 'BAC +3', title: 'Comptabilité & Finance', type: 'Alternance', category: 'Finance', description: 'Maîtrisez les fondamentaux comptables, financiers et budgétaires des organisations.', icon: '↗' },
  { level: 'BAC +3', title: 'Négociation & Relation Client', type: 'Alternance', category: 'Commerce', description: 'Apprenez à développer un portefeuille clients, négocier et bâtir des relations durables.', icon: '↝' },
  { level: 'BAC +2', title: 'Management, Commerce & Gestion', type: 'Initial', category: 'Management', description: 'Explorez les réalités de l’entreprise et construisez votre projet professionnel.', icon: '◈' },
  { level: 'MASTER', title: 'Management, Commerce & Entrepreneuriat', type: 'Alternance', category: 'Management', description: 'Pilotez la stratégie, accompagnez la croissance et transformez les idées en projets.', icon: '✳' },
  { level: 'MASTER', title: 'Management des Ressources Humaines', type: 'Alternance', category: 'Management', description: 'Concevez et déployez une stratégie RH alignée sur les ambitions de l’organisation.', icon: '◎' },
  { level: 'MASTER', title: 'Responsabilité Sociale des Entreprises', type: 'Alternance', category: 'Impact', description: 'Faites de l’éthique, de l’inclusion et du développement durable des leviers d’action.', icon: '⌁' },
  { level: 'MASTER', title: 'Finance Conseil', type: 'Initial', category: 'Finance', description: 'Accompagnez les organisations dans leurs décisions financières et leur performance.', icon: '↗' },
  { level: 'MASTER', title: 'Gestion de la Supply Chain', type: 'Initial', category: 'Logistique', description: 'Optimisez les flux, les stocks et les chaînes d’approvisionnement.', icon: '⌘' },
];

const benefits = [
  { icon: BriefcaseBusiness, title: 'Apprendre en faisant', text: 'Des situations concrètes, des projets et des compétences directement mobilisables en entreprise.' },
  { icon: Users, title: 'Un accompagnement humain', text: 'Une pédagogie attentive à votre parcours, vos objectifs et votre progression.' },
  { icon: Target, title: 'Une vision responsable', text: 'L’éthique, la responsabilité sociale et les enjeux environnementaux au cœur des apprentissages.' },
];

function Brand({ light = false }) {
  return <a className={`brand ${light ? 'brand-light' : ''}`} href="#accueil" aria-label="ESMES Business School, accueil">
    <span className="brand-mark">E<span>S</span></span>
    <span className="brand-copy"><strong>ESMES</strong><small>BUSINESS SCHOOL</small></span>
  </a>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [level, setLevel] = useState('Tous');
  const [showAll, setShowAll] = useState(false);
  const visibleFormations = formations.filter((f) => level === 'Tous' || f.level === level);
  const cards = showAll ? visibleFormations : visibleFormations.slice(0, 6);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="topline"><span>Construisez votre avenir, dès aujourd’hui.</span><a href="#contact">Parlons de votre projet <ArrowUpRight size={14} /></a></div>
      <header className="header">
        <div className="container nav-wrap">
          <Brand />
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}>{menuOpen ? <X /> : <Menu />}</button>
          <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Navigation principale">
            <a onClick={closeMenu} href="#ecole">L’école</a>
            <a onClick={closeMenu} href="#formations">Formations <ChevronDown size={14} /></a>
            <a onClick={closeMenu} href="#pedagogie">Notre pédagogie</a>
            <a onClick={closeMenu} href="#admission">Admissions</a>
            <a onClick={closeMenu} href="#contact">Contact</a>
            <a onClick={closeMenu} className="nav-cta" href="#contact">Candidater <ArrowUpRight size={16} /></a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="accueil">
          <div className="hero-glow" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-dot" /> L’ÉCOLE QUI VOUS FAIT AVANCER</div>
              <h1>Le prochain chapitre de votre avenir <em>commence ici.</em></h1>
              <p className="hero-lead">Révélez votre potentiel. Développez vos compétences. Donnez du sens à votre ambition avec une école tournée vers le monde professionnel.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#formations">Découvrir nos formations <ArrowRight size={17} /></a>
                <a className="text-link" href="#ecole"><span className="play-icon"><Play size={13} fill="currentColor" /></span> Découvrir ESMES</a>
              </div>
              <div className="hero-proof">
                <div className="avatar-stack"><span>É</span><span>M</span><span>A</span><span>+</span></div>
                <p><strong>Un parcours qui vous ressemble</strong><small>Des formations pensées pour vos ambitions.</small></p>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-image-main" role="img" aria-label="Étudiants échangeant dans un espace de travail lumineux" />
              <div className="image-label"><span className="label-icon"><GraduationCap size={19} /></span><span><strong>Apprendre autrement</strong><small>Grandir ensemble, réussir demain</small></span></div>
              <div className="floating-note"><Sparkles size={17} /><span>Votre ambition,<br /><strong>notre engagement.</strong></span></div>
              <div className="image-index">01 <span /> 03</div>
            </div>
          </div>
          <div className="container hero-bottom"><span>FORMER LES LEADERS RESPONSABLES</span><a href="#ecole">Explorez notre univers <ArrowDownRight size={16} /></a></div>
        </section>

        <section className="intro section-pad" id="ecole">
          <div className="container intro-grid">
            <div className="intro-left"><div className="eyebrow">BIENVENUE CHEZ ESMES</div><h2>Une école. Des idées.<br /><em>Un impact réel.</em></h2></div>
            <div className="intro-right"><p className="intro-text">Nous réinventons l’approche pédagogique pour aider chaque étudiant à transformer ses idées en projets viables, responsables et porteurs d’avenir.</p><p>À ESMES, la performance économique ne se dissocie pas de la responsabilité sociale et environnementale. Nous formons des professionnels capables d’agir, d’innover et de faire évoluer leur environnement.</p><a className="underlined-link" href="#pedagogie">Ce qui nous anime <ArrowUpRight size={16} /></a></div>
          </div>
          <div className="container values-strip">
            <div><span className="value-number">01</span><span><strong>Oser entreprendre</strong><small>Passer de l’idée à l’action.</small></span></div>
            <div><span className="value-number">02</span><span><strong>Penser autrement</strong><small>Apprendre à questionner et innover.</small></span></div>
            <div><span className="value-number">03</span><span><strong>Agir avec impact</strong><small>Concilier performance et responsabilité.</small></span></div>
          </div>
        </section>

        <section className="formations section-pad" id="formations">
          <div className="container">
            <div className="section-heading">
              <div><div className="eyebrow">TROUVEZ VOTRE VOIE</div><h2>La formation qui vous<br /><em>ressemble.</em></h2></div>
              <div className="heading-side"><p>Du Bac+2 au Master, explorez des parcours qui conjuguent expertise, ouverture et expérience professionnelle.</p><a className="underlined-link" href="#contact">Être conseillé <ArrowUpRight size={16} /></a></div>
            </div>
            <div className="formation-toolbar"><span>{visibleFormations.length} parcours pour construire la suite</span><div className="filters" role="group" aria-label="Filtrer les formations">{['Tous', 'BAC +2', 'BAC +3', 'MASTER'].map((item) => <button key={item} className={level === item ? 'filter active' : 'filter'} onClick={() => { setLevel(item); setShowAll(false); }}>{item}</button>)}</div></div>
            <div className="formation-grid">
              {cards.map((f, i) => <article className="formation-card" key={f.title}>
                <div className="card-top"><span className="card-icon">{f.icon}</span><span className="card-index">{String(i + 1).padStart(2, '0')}</span></div>
                <div className="card-tags"><span>{f.level}</span><span className="tag-dot" /><span>{f.type}</span></div>
                <h3>{f.title}</h3><p>{f.description}</p>
                <a href="#contact" className="card-link" aria-label={`En savoir plus sur ${f.title}`}>Découvrir le programme <ArrowUpRight size={16} /></a>
              </article>)}
            </div>
            {visibleFormations.length > 6 && <div className="show-more-wrap"><button className="button button-outline" onClick={() => setShowAll(!showAll)}>{showAll ? 'Voir moins' : 'Voir toutes les formations'} <ArrowRight size={16} /></button></div>}
            <p className="disclaimer">Les modalités et l’ouverture des programmes peuvent évoluer. Contactez notre équipe pour confirmer les informations relatives à votre rentrée.</p>
          </div>
        </section>

        <section className="pedagogy section-pad" id="pedagogie">
          <div className="container pedagogy-grid">
            <div className="pedagogy-photo"><div className="pedagogy-photo-image" role="img" aria-label="Étudiants collaborant autour d'un projet" /><div className="photo-caption"><span>APPRENDRE ENSEMBLE</span><ArrowUpRight size={17} /></div></div>
            <div className="pedagogy-copy"><div className="eyebrow eyebrow-light">BIEN PLUS QU’UN DIPLÔME</div><h2>Apprendre à faire.<br />Apprendre à <em>devenir.</em></h2><p className="pedagogy-lead">Le monde change. Votre formation doit vous donner les moyens d’y prendre part.</p><div className="benefits">{benefits.map(({ icon: Icon, title, text }) => <div className="benefit" key={title}><div className="benefit-icon"><Icon size={20} /></div><div><h3>{title}</h3><p>{text}</p></div></div>)}</div><a className="button button-white" href="#admission">Découvrir notre approche <ArrowRight size={17} /></a></div>
          </div>
        </section>

        <section className="admission section-pad" id="admission">
          <div className="container admission-inner">
            <div className="admission-copy"><div className="eyebrow">VOTRE PROCHAINE ÉTAPE</div><h2>Votre avenir ne se<br />regarde pas. Il se <em>construit.</em></h2><p>Vous avez une ambition, une question ou un projet ? Faisons le point ensemble et trouvons le parcours qui vous correspond.</p><a className="button button-primary" href="#contact">Parlons de votre projet <ArrowRight size={17} /></a></div>
            <div className="admission-steps"><div className="step"><span>01</span><div><h3>Faites le premier pas</h3><p>Présentez-nous votre parcours et vos envies.</p></div><MoveRight /></div><div className="step"><span>02</span><div><h3>Échangeons ensemble</h3><p>Faisons le point sur votre projet et les formations possibles.</p></div><MoveRight /></div><div className="step"><span>03</span><div><h3>Préparez la suite</h3><p>Construisez votre prochaine étape avec notre équipe.</p></div><MoveRight /></div></div>
          </div>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="container contact-panel"><div><div className="eyebrow eyebrow-light">ON EN PARLE ?</div><h2>Chaque grande aventure<br />commence par <em>un échange.</em></h2><p>Notre équipe est là pour répondre à vos questions et vous accompagner dans votre orientation.</p></div><div className="contact-actions"><a className="button button-white" href="https://www.esmes-lyon.com/" target="_blank" rel="noreferrer">Visiter le site officiel <ArrowUpRight size={17} /></a><a className="contact-secondary" href="https://www.esmes-lyon.com/nos-formations" target="_blank" rel="noreferrer">Consulter les formations <ArrowRight size={16} /></a></div><div className="contact-decoration">E</div></div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-main"><div className="footer-brand"><Brand light /><p>Former les professionnels<br />responsables de demain.</p></div><div className="footer-column"><strong>Explorer</strong><a href="#ecole">L’école</a><a href="#formations">Nos formations</a><a href="#pedagogie">Notre pédagogie</a></div><div className="footer-column"><strong>Votre parcours</strong><a href="#admission">Admissions</a><a href="#contact">Être accompagné</a><a href="https://www.esmes-lyon.com/" target="_blank" rel="noreferrer">Site officiel</a></div><div className="footer-note"><span className="footer-badge"><BookOpen size={16} /> LE SAVOIR EN ACTION</span><p>Des compétences concrètes.<br />Une ambition responsable.</p></div></div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} ESMES Business School</span><span>Design & expérience — Lyon, France</span><a href="#accueil">Retour en haut ↑</a></div>
      </footer>
    </>
  );
}

export default App;