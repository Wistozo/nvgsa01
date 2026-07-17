import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Target, Eye, Heart, Shield, Users, TrendingUp, Leaf, Award } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

export default function AboutPage() {
  const { t, language } = useTranslation();
  const p = t.pages.about;
  const l = (fr: string, en: string) => language === 'en' ? en : fr;

  const timeline = [
    { year: '2008',      title: l('Fondation de NVG', 'NVG Foundation'),          desc: l("Création de New Vision Group SA à Cotonou, Bénin. Démarrage dans la fourniture institutionnelle.", 'Creation of New Vision Group SA in Cotonou, Benin. Start in institutional supply.'),     color: 'bg-nvg-orange' },
    { year: '2019–2023', title: l('Projet SWEDD', 'SWEDD Project'),                desc: l("Partenariat avec l'ONU pour la distribution de 631 000+ serviettes hygiéniques aux jeunes filles à travers la sous-région.", 'Partnership with the UN for the distribution of 631,000+ sanitary napkins to young girls across the sub-region.'), color: 'bg-nvg-blue-light' },
    { year: '2021',      title: l('Innovation LIGHT-TC', 'LIGHT-TC Innovation'),   desc: l('Développement des sacs scolaires solaires LIGHT-TC. Un produit révolutionnaire pour les zones non électrifiées.', 'Development of the LIGHT-TC solar school bag. A revolutionary product for non-electrified areas.'), color: 'bg-nvg-orange' },
    { year: '2023',      title: l('Lancement de la production', 'Launch of Production'), desc: l("Création de l'unité industrielle à Lokossa. Début de la production de sacs scolaires et tenues.", 'Creation of the industrial unit in Lokossa. Start of production of school bags and uniforms.'), color: 'bg-nvg-orange' },
    { year: '2024',      title: l('Croissance & Impact', 'Growth & Impact'),       desc: l("300+ collaborateurs, 6 pays couverts, certification Catégorie B. NVG, leader reconnu en Afrique de l'Ouest.", '300+ employees, 6 countries covered, Category B certification. NVG, recognized leader in West Africa.'), color: 'bg-nvg-orange' },
    { year: '2025',      title: l('Expansion régionale', 'Regional Expansion'),    desc: l("Présence confirmée dans 6 pays : Bénin, Côte d'Ivoire, Togo, Burkina Faso, Cameroun et Niger.", "Confirmed presence in 6 countries: Benin, Côte d'Ivoire, Togo, Burkina Faso, Cameroon and Niger."), color: 'bg-nvg-blue-light' },
  ];


  const values = [
    { icon: Target, title: l('Excellence',     'Excellence'),    desc: l("Nous visons l'excellence dans chaque produit et chaque service, avec des standards de qualité rigoureux à tous les niveaux.", 'We strive for excellence in every product and service, with rigorous quality standards at all levels.'),   color: 'bg-nvg-blue',   glow: 'glow-blue' },
    { icon: Eye,    title: l('Transparence',   'Transparency'),  desc: l("Honnêteté et intégrité dans toutes nos relations — avec nos clients, partenaires, et les communautés que nous servons.", 'Honesty and integrity in all our relationships — with our clients, partners, and the communities we serve.'),  color: 'bg-nvg-orange', glow: 'glow-orange' },
    { icon: Heart,  title: l('Impact Social',  'Social Impact'), desc: l("Chaque activité de NVG est pensée pour créer un impact positif durable sur les communautés béninoises et africaines.", 'Every NVG activity is designed to create a lasting positive impact on Beninese and African communities.'),    color: 'bg-nvg-orange', glow: 'glow-orange' },
    { icon: Shield, title: l('Responsabilité', 'Responsibility'),desc: l("Nous assumons nos engagements envers les communautés, l'environnement et les générations futures avec sérieux et conviction.", 'We take our commitments to communities, the environment and future generations seriously and with conviction.'), color: 'bg-nvg-blue',   glow: 'glow-blue' },
  ];

  const engagements = [
    { icon: Users,      title: l('Autonomisation',         'Empowerment'),          desc: l('Formation et emploi pour les femmes et jeunes du Bénin', 'Training and employment for women and young people in Benin') },
    { icon: TrendingUp, title: l('Développement',          'Development'),          desc: l("Croissance inclusive et durable à l'échelle sous-régionale", 'Inclusive and sustainable growth at the sub-regional level') },
    { icon: Leaf,       title: l('Environnement',          'Environment'),          desc: l('Solutions écologiques et produits à faible empreinte carbone', 'Ecological solutions and products with a low carbon footprint') },
    { icon: Award,      title: l('Qualité & Certification','Quality & Certification'),desc: l('Agréés Catégorie B, normes internationales respectées', 'Category B approved, respected international standards') },
  ];

  return (
    <div className="min-h-screen bg-nvg-light dark:bg-nvg-dark transition-colors duration-300">
      <Helmet>
        <title>À propos de NVG — Histoire, Mission & Valeurs | New Vision Group SA</title>
        <meta name="description" content="Découvrez l'histoire de New Vision Group SA depuis 2008 : notre mission, nos valeurs, notre parcours de 18 ans au service du Bénin et de l'Afrique de l'Ouest." />
        <link rel="canonical" href="https://nvg.bj/a-propos" />
      </Helmet>

      {/* Page Hero */}
      <div className="relative bg-nvg-dark pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-nvg-blue/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-nvg-orange/10 rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-16 lg:px-24">
          <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            {t.pages.backLink}
          </Link>
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-nvg-orange/10 text-nvg-orange rounded-full text-sm font-medium mb-6 border border-nvg-orange/20">
              {p.badge}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              {p.title}{' '}
              <span className="text-nvg-orange">NVG.</span>
            </h1>
            <p className="text-lg text-white/60 leading-relaxed max-w-2xl">
              {p.heroDesc}
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24 py-20">
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="glass-card glow-blue p-6 sm:p-10">
            <div className="w-14 h-14 bg-nvg-blue rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-2xl font-extrabold text-nvg-dark dark:text-white mb-4">
              {p.missionTitle.split(' ')[0]} <span className="text-nvg-orange">{p.missionTitle.split(' ').slice(1).join(' ')}</span>
            </h2>
            <p className="text-nvg-gray dark:text-white/60 leading-relaxed mb-6">
              {p.missionDesc}
            </p>
            <ul className="space-y-3">
              {p.missionItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-nvg-blue/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-nvg-blue rounded-full" />
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
              {p.visionTitle.split(' ')[0]} <span className="text-nvg-orange">{p.visionTitle.split(' ').slice(1).join(' ')}</span>
            </h2>
            <p className="text-nvg-gray dark:text-white/60 leading-relaxed mb-6">
              {p.visionDesc}
            </p>
            <div className="bg-nvg-orange/5 dark:bg-white/5 border border-nvg-orange/15 dark:border-white/10 rounded-xl p-6">
              <p className="text-nvg-dark dark:text-white font-medium italic text-sm leading-relaxed">
                "{p.visionQuote}"
              </p>
              <p className="text-nvg-orange text-xs mt-3 font-semibold">{p.visionQuoteAuthor}</p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-nvg-dark dark:text-white mb-3">
              {p.timelineTitle.split(' ')[0]} <span className="text-nvg-orange">{p.timelineTitle.split(' ').slice(1).join(' ')}</span>
            </h2>
            <p className="text-nvg-gray dark:text-white/50">{p.timelineSubtitle}</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-nvg-orange/40 via-nvg-blue/40 to-nvg-orange/40 hidden md:block" />
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


        {/* Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-nvg-dark dark:text-white mb-3">
              {p.valuesTitle.split(' ')[0]} <span className="text-nvg-orange">{p.valuesTitle.split(' ').slice(1).join(' ')}</span>
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
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-nvg-blue/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">{p.commitmentsTitle}</h2>
              <p className="text-white/60 max-w-xl mx-auto">{p.commitmentsSubtitle}</p>
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
            {p.ctaTitle.split(' ').slice(0, -1).join(' ')} <span className="text-nvg-orange">{p.ctaTitle.split(' ').slice(-1)}</span>
          </h2>
          <p className="text-nvg-gray dark:text-white/50 mb-8">{p.ctaSubtitle}</p>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 bg-nvg-orange hover:bg-nvg-orange-light text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 group"
          >
            {t.pages.contactCta}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
