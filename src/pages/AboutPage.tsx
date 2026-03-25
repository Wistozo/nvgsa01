import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Target, Eye, Heart, Shield, Users, TrendingUp, Leaf, Award, Factory, Sun, Globe, Calendar } from 'lucide-react';

const timeline = [
  { year: '2008', title: 'Fondation de NVG', desc: 'Création de New Vision Group SA à Cotonou, Bénin. Démarrage dans la fourniture institutionnelle.', color: 'bg-nvg-orange' },
  { year: '2019–2023', title: 'Projet SWEDD', desc: 'Partenariat avec l\'ONU pour la distribution de 631 000+ serviettes hygiéniques aux jeunes filles à travers la sous-région.', color: 'bg-nvg-blue-light' },
  { year: '2021', title: 'Innovation LIGHT-TC', desc: 'Développement des sacs scolaires solaires LIGHT-TC. Un produit révolutionnaire pour les zones non électrifiées.', color: 'bg-nvg-orange' },
  { year: '2023', title: 'Lancement de la production', desc: 'Création de l\'unité industrielle à Lokossa. Début de la production de sacs scolaires et tenues.', color: 'bg-nvg-green' },
  { year: '2024', title: 'Croissance & Impact', desc: '300+ collaborateurs, 6 pays couverts, certification Catégorie B. NVG, leader reconnu en Afrique de l\'Ouest.', color: 'bg-nvg-green' },
  { year: '2025', title: 'Expansion régionale', desc: 'Présence confirmée dans 6 pays : Bénin, Côte d\'Ivoire, Togo, Burkina Faso, Cameroun et Niger.', color: 'bg-nvg-blue-light' },
];

const stats = [
  { icon: Sun,      value: '38 899', label: 'Sacs solaires',       color: 'text-nvg-orange',     bg: 'bg-nvg-orange/10' },
  { icon: Users,    value: '300+',   label: 'Collaborateurs',      color: 'text-nvg-green',      bg: 'bg-nvg-green/10' },
  { icon: Globe,    value: '6',      label: 'Pays couverts',       color: 'text-nvg-blue-light', bg: 'bg-nvg-blue/10' },
  { icon: Calendar, value: '2008',   label: 'Année de fondation',  color: 'text-nvg-green',      bg: 'bg-nvg-green/10' },
  { icon: Factory,  value: '500K+',  label: 'Capacité sacs/an',    color: 'text-nvg-orange',     bg: 'bg-nvg-orange/10' },
  { icon: Award,    value: '126K+',  label: 'Filles bénéficiaires',color: 'text-nvg-blue-light', bg: 'bg-nvg-blue/10' },
];

const values = [
  { icon: Target, title: 'Excellence',      desc: 'Nous visons l\'excellence dans chaque produit et chaque service, avec des standards de qualité rigoureux à tous les niveaux.',   color: 'bg-nvg-blue',   glow: 'glow-blue' },
  { icon: Eye,    title: 'Transparence',    desc: 'Honnêteté et intégrité dans toutes nos relations — avec nos clients, partenaires, et les communautés que nous servons.',         color: 'bg-nvg-orange', glow: 'glow-orange' },
  { icon: Heart,  title: 'Impact Social',   desc: 'Chaque activité de NVG est pensée pour créer un impact positif durable sur les communautés béninoises et africaines.',          color: 'bg-nvg-green',  glow: 'glow-green' },
  { icon: Shield, title: 'Responsabilité',  desc: 'Nous assumons nos engagements envers les communautés, l\'environnement et les générations futures avec sérieux et conviction.', color: 'bg-nvg-blue',   glow: 'glow-blue' },
];

const engagements = [
  { icon: Users,      title: 'Autonomisation',        desc: 'Formation et emploi pour les femmes et jeunes du Bénin' },
  { icon: TrendingUp, title: 'Développement',          desc: 'Croissance inclusive et durable à l\'échelle sous-régionale' },
  { icon: Leaf,       title: 'Environnement',          desc: 'Solutions écologiques et produits à faible empreinte carbone' },
  { icon: Award,      title: 'Qualité & Certification',desc: 'Agréés Catégorie B, normes internationales respectées' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-nvg-light dark:bg-nvg-dark transition-colors duration-300">
      <Helmet>
        <title>À propos de NVG — Histoire, Mission & Valeurs | New Vision Group SA</title>
        <meta name="description" content="Découvrez l'histoire de New Vision Group SA depuis 2008 : notre mission, nos valeurs, notre parcours de 18 ans au service du Bénin et de l'Afrique de l'Ouest." />
        <link rel="canonical" href="https://www.newvisiongroupsa.bj/a-propos" />
      </Helmet>

      {/* Page Hero */}
      <div className="relative bg-nvg-dark pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-nvg-green/15 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-nvg-orange/10 rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Retour à l'accueil
          </Link>
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-nvg-green/20 text-nvg-green rounded-full text-sm font-medium mb-6 border border-nvg-green/30">
              Notre Histoire
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              À propos de{' '}
              <span className="relative inline-block">
                <span className="relative z-10 bg-nvg-orange text-white px-4 py-1 rounded-xl">NVG.</span>
                <span className="absolute inset-0 bg-nvg-orange rounded-xl blur-xl opacity-30 scale-110" />
              </span>
            </h1>
            <p className="text-lg text-white/60 leading-relaxed max-w-2xl">
              Depuis 2008, New Vision Group SA œuvre pour le développement socio-économique du Bénin et de l'Afrique de l'Ouest — à travers la production industrielle, la fourniture institutionnelle et l'innovation solaire.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="glass-card glow-green p-6 sm:p-10">
            <div className="w-14 h-14 bg-nvg-green rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-2xl font-extrabold text-nvg-dark dark:text-white mb-4">
              Notre <span className="text-nvg-orange">Mission</span>
            </h2>
            <p className="text-nvg-gray dark:text-white/60 leading-relaxed mb-6">
              Contribuer au développement économique et social du Bénin et de la sous-région en fournissant des produits et services de qualité, accessibles et adaptés aux réalités locales. Nous créons de la valeur durable pour nos communautés, nos partenaires et nos collaborateurs.
            </p>
            <ul className="space-y-3">
              {['Accès à l\'éducation pour tous les enfants', 'Autonomisation des femmes et des jeunes', 'Promotion de l\'industrie locale', 'Innovation au service du développement'].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-nvg-green/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-nvg-green rounded-full" />
                  </div>
                  <span className="text-sm text-nvg-gray dark:text-white/60">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card glow-orange p-6 sm:p-10">
            <div className="w-14 h-14 bg-nvg-orange rounded-2xl flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-2xl font-extrabold text-nvg-dark dark:text-white mb-4">
              Notre <span className="text-nvg-orange">Vision</span>
            </h2>
            <p className="text-nvg-gray dark:text-white/60 leading-relaxed mb-6">
              Devenir le groupe industriel et commercial de référence en Afrique de l'Ouest — reconnu pour la qualité de ses produits, son impact social mesurable et sa capacité d'innovation au service des communautés les plus vulnérables.
            </p>
            <div className="bg-nvg-orange/5 dark:bg-white/5 border border-nvg-orange/15 dark:border-white/10 rounded-xl p-6">
              <p className="text-nvg-dark dark:text-white font-medium italic text-sm leading-relaxed">
                "Notre vision est un Bénin et une Afrique de l'Ouest où chaque enfant a accès à l'éducation, chaque femme à sa dignité, et chaque entrepreneur à des ressources de qualité."
              </p>
              <p className="text-nvg-orange text-xs mt-3 font-semibold">— Direction Générale, NVG</p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-nvg-dark dark:text-white mb-3">
              Notre <span className="text-nvg-orange">Parcours</span>
            </h2>
            <p className="text-nvg-gray dark:text-white/50">16 ans d'engagement et de croissance continue.</p>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-nvg-orange/40 via-nvg-blue/40 to-nvg-green/40 hidden md:block" />
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center gap-4 sm:gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 glass-card p-6 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="text-xs text-nvg-gray dark:text-white/30 uppercase tracking-widest font-semibold mb-1">{item.year}</div>
                    <h3 className="font-bold text-nvg-dark dark:text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-nvg-gray dark:text-white/55 leading-relaxed">{item.desc}</p>
                  </div>
                  <div className={`hidden md:flex w-12 h-12 ${item.color} rounded-full items-center justify-center flex-shrink-0 z-10 shadow-lg`}>
                    <span className="text-white font-bold text-xs">{item.year.slice(2)}</span>
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-nvg-dark rounded-3xl p-6 sm:p-10 mb-20 relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[400px] h-[300px] bg-nvg-blue/15 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[200px] bg-nvg-orange/10 rounded-full blur-[80px]" />
          <div className="relative z-10">
            <h2 className="text-2xl font-extrabold text-white text-center mb-10">
              NVG en <span className="text-nvg-orange">Chiffres</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
              {stats.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={i} className="text-center">
                    <div className={`w-12 h-12 ${s.bg} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                      <Icon className={`w-6 h-6 ${s.color}`} />
                    </div>
                    <div className={`text-3xl font-extrabold ${s.color} mb-1`}>{s.value}</div>
                    <div className="text-xs text-white/40 uppercase tracking-widest font-medium">{s.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-nvg-dark dark:text-white mb-3">
              Nos <span className="text-nvg-green">Valeurs</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className={`glass-card ${v.glow} p-6 hover:-translate-y-2 transition-all duration-300 group`}>
                  <div className={`w-14 h-14 ${v.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-nvg-dark dark:text-white mb-2">{v.title}</h3>
                  <p className="text-sm text-nvg-gray dark:text-white/55 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Engagements */}
        <div className="bg-gradient-to-r from-nvg-dark via-nvg-blue to-nvg-blue-light rounded-3xl p-6 sm:p-10 lg:p-16 text-white relative overflow-hidden mb-20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-nvg-orange/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-nvg-green/20 rounded-full blur-3xl" />
          <div className="relative z-10">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">Nos Engagements</h2>
              <p className="text-white/60 max-w-xl mx-auto">Des principes qui guident chacune de nos décisions et actions quotidiennes.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {engagements.map((eng, i) => {
                const Icon = eng.icon;
                return (
                  <div key={i} className="bg-white/10 rounded-xl p-5">
                    <Icon className="w-8 h-8 text-nvg-orange mb-3" />
                    <h3 className="font-bold text-white mb-1">{eng.title}</h3>
                    <p className="text-sm text-white/60">{eng.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-extrabold text-nvg-dark dark:text-white mb-4">
            Envie de collaborer avec <span className="text-nvg-orange">NVG</span> ?
          </h2>
          <p className="text-nvg-gray dark:text-white/50 mb-8">Parlons de votre projet et voyons comment nous pouvons vous accompagner.</p>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 bg-nvg-orange hover:bg-nvg-orange-light text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 group"
          >
            Nous contacter
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
