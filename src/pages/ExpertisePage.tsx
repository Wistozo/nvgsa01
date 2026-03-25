import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Factory, Truck, Ship, Sprout, Sun, Shirt, HeartPulse, BookOpen, ArrowRight, CheckCircle2 } from 'lucide-react';

const expertiseAreas = [
  {
    icon: Factory,
    title: 'Production et Commercialisation',
    subtitle: 'Unité Industrielle Lokossa — Agréée Catégorie B',
    description: "Notre unité de production à Lokossa est le cœur industriel du groupe. Agréée Catégorie B par l'État béninois, elle confectionne et distribue des produits à fort impact social : sacs scolaires solaires, tenues scolaires, serviettes hygiéniques réutilisables et gels biomédicaux.",
    features: [
      'Sacs scolaires solaires LIGHT-TC',
      'Tenues scolaires et kaki',
      'Serviettes hygiéniques réutilisables',
      'Gels hydro-alcooliques certifiés',
      '150+ employés directs',
      '100+ machines industrielles',
    ],
    stats: [
      { value: '38 899', label: 'Sacs produits' },
      { value: '150+', label: 'Employés' },
      { value: '500K+', label: 'Sacs / an (cap.)' },
    ],
    color: 'from-nvg-blue to-nvg-blue-light',
    accent: 'text-nvg-blue-light',
    border: 'border-nvg-blue/30',
    bg: 'bg-nvg-blue/5 dark:bg-nvg-blue/10',
  },
  {
    icon: Truck,
    title: 'Fourniture et Installation',
    subtitle: 'Équipements pédagogiques & institutionnels',
    description: "Nous fournissons aux organismes publics et privés les équipements nécessaires à leur bon fonctionnement. De la fourniture scolaire complète aux équipements bureautiques, NVG est un partenaire de confiance de l'État béninois et des organisations internationales.",
    features: [
      'Matériels pédagogiques complets',
      'Kits scolaires pour élèves',
      'Équipements informatiques',
      'Mobiliers de bureau',
      'Installation et mise en service',
      'Suivi et maintenance',
    ],
    stats: [
      { value: '37 199', label: 'Trousses livrées' },
      { value: '120', label: 'Conteneurs / an' },
      { value: '6', label: 'Pays couverts' },
    ],
    color: 'from-nvg-orange to-nvg-orange-light',
    accent: 'text-nvg-orange',
    border: 'border-nvg-orange/30',
    bg: 'bg-nvg-orange/5 dark:bg-nvg-orange/10',
  },
  {
    icon: Ship,
    title: 'Import-Export',
    subtitle: 'Commerce international & logistique',
    description: "NVG propose des solutions de négoce et de logistique internationale couvrant les produits tropicaux, les équipements informatiques et bureautiques. Notre réseau s'étend sur 6 pays d'Afrique de l'Ouest avec une maîtrise complète de la chaîne d'approvisionnement.",
    features: [
      'Produits tropicaux certifiés',
      'Équipements informatiques reconditionnés',
      'Matériel bureautique',
      'Solutions logistiques sur mesure',
      'Dédouanement et transit',
      'Gestion des stocks',
    ],
    stats: [
      { value: '6', label: 'Pays actifs' },
      { value: '300+', label: 'Collaborateurs' },
      { value: '2008', label: 'Depuis' },
    ],
    color: 'from-nvg-green to-nvg-green-light',
    accent: 'text-nvg-green',
    border: 'border-nvg-green/30',
    bg: 'bg-nvg-green/5 dark:bg-nvg-green/10',
  },
  {
    icon: Sprout,
    title: "Fourniture d'Intrants Agricoles",
    subtitle: 'Agriculture durable & intrants de qualité',
    description: "Nous accompagnons les exploitants agricoles béninois et sous-régionaux avec une large gamme d'intrants certifiés, de semences sélectionnées et d'équipements agricoles. Notre approche privilégie des solutions bio et durables pour une agriculture compétitive.",
    features: [
      'Intrants agricoles certifiés',
      'Semences de qualité sélectionnées',
      'Machines et outils agricoles',
      'Produits phytosanitaires bio',
      'Conseil agronomique',
      'Formation aux bonnes pratiques',
    ],
    stats: [
      { value: '3 000', label: 'Machines distribuées' },
      { value: '7 402', label: 'Couturiers formés' },
      { value: 'Bio', label: 'Approche certifiée' },
    ],
    color: 'from-nvg-blue to-nvg-green',
    accent: 'text-nvg-green',
    border: 'border-nvg-green/30',
    bg: 'bg-nvg-green/5 dark:bg-nvg-green/10',
  },
];

const products = [
  {
    icon: Sun,
    title: 'Sacs Solaires LIGHT-TC',
    description: 'Équipés de panneaux solaires et d\'une batterie intégrée Li-ion, ces sacs permettent aux élèves des zones non électrifiées d\'étudier la nuit avec une autonomie d\'au moins 2 heures de lumière. Développé en partenariat avec des experts techniques internationaux.',
    stat: '38 899',
    statLabel: 'sacs produits',
    tags: ['Énergie solaire', 'Autonomie 2h+', 'LIGHT-TC'],
    color: 'text-nvg-orange',
  },
  {
    icon: Shirt,
    title: 'Tenues Scolaires',
    description: 'Uniformes kaki et tenues scolaires de qualité produits localement par nos couturiers partenaires. Chaque commande contribue à l\'emploi local et à la formation professionnelle dans nos ateliers de couture agréés.',
    stat: '834',
    statLabel: 'tenues produites',
    tags: ['Made in Bénin', 'Qualité certifiée', 'Emploi local'],
    color: 'text-nvg-blue-light',
  },
  {
    icon: HeartPulse,
    title: 'Serviettes Hygiéniques',
    description: 'Serviettes hygiéniques réutilisables distribuées dans le cadre du projet SWEDD (Sahel Women\'s Empowerment and Demographic Dividend), ciblant 126 000+ filles bénéficiaires. Un levier clé pour le maintien des jeunes filles à l\'école.',
    stat: '631 070',
    statLabel: 'serviettes distribuées',
    tags: ['Projet SWEDD', 'Impact social', '126K+ bénéficiaires'],
    color: 'text-nvg-green',
  },
  {
    icon: BookOpen,
    title: 'Kits et Trousses Scolaires',
    description: 'Kits complets comprenant tout le matériel nécessaire pour la rentrée scolaire. Fournis en partenariat avec le gouvernement du Bénin et des organisations internationales pour assurer la scolarisation des enfants défavorisés.',
    stat: '37 199',
    statLabel: 'trousses livrées',
    tags: ['Kits complets', 'Partenariat État', 'Rentrée scolaire'],
    color: 'text-nvg-orange',
  },
];

export default function ExpertisePage() {
  return (
    <div className="min-h-screen bg-nvg-light dark:bg-nvg-dark transition-colors duration-300">
      <Helmet>
        <title>Nos Expertises — Production, Fourniture, Import-Export & Agriculture | NVG SA</title>
        <meta name="description" content="NVG intervient dans 4 domaines : production industrielle (sacs solaires LIGHT-TC), fourniture d'équipements, import-export, et intrants agricoles au Bénin et en Afrique de l'Ouest." />
        <link rel="canonical" href="https://www.newvisiongroupsa.bj/expertises" />
      </Helmet>

      {/* Page Hero */}
      <div className="relative bg-nvg-dark pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-nvg-blue/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-nvg-orange/15 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 left-0 w-[200px] h-[200px] bg-nvg-green/10 rounded-full blur-[80px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Retour à l'accueil
          </Link>
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-nvg-blue/20 text-nvg-blue-light rounded-full text-sm font-medium mb-6 border border-nvg-blue/30">
              Nos Domaines
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Nos Domaines{' '}
              <span className="relative inline-block">
                <span className="relative z-10 bg-nvg-orange text-white px-4 py-1 rounded-xl">d'Expertise.</span>
                <span className="absolute inset-0 bg-nvg-orange rounded-xl blur-xl opacity-30 scale-110" />
              </span>
            </h1>
            <p className="text-lg text-white/60 leading-relaxed max-w-2xl">
              Depuis 2008, NVG intervient dans quatre domaines stratégiques au service des communautés béninoises et africaines — production industrielle, fourniture institutionnelle, commerce international et agriculture durable.
            </p>
          </div>
        </div>
      </div>

      {/* Expertise Areas */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-16">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className={`inline-flex items-center gap-3 ${area.bg} rounded-2xl px-4 py-3 mb-6 border ${area.border}`}>
                    <Icon className={`w-6 h-6 ${area.accent}`} />
                    <span className={`font-semibold text-sm ${area.accent}`}>{area.subtitle}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-nvg-dark dark:text-white mb-4">
                    {area.title}
                  </h2>
                  <p className="text-nvg-gray dark:text-white/60 leading-relaxed mb-8">
                    {area.description}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {area.features.map((f, fi) => (
                      <div key={fi} className="flex items-start gap-2">
                        <CheckCircle2 className={`w-4 h-4 ${area.accent} flex-shrink-0 mt-0.5`} />
                        <span className="text-sm text-nvg-gray dark:text-white/60">{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/#contact"
                    className={`inline-flex items-center gap-2 font-semibold ${area.accent} hover:opacity-80 transition-opacity group`}
                  >
                    Nous contacter
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Stats Card */}
                <div className={`glass-card p-6 sm:p-8 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className={`w-16 h-16 bg-gradient-to-br ${area.color} rounded-2xl flex items-center justify-center mb-8`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="grid grid-cols-3 gap-3 sm:gap-6 mb-8">
                    {area.stats.map((s, si) => (
                      <div key={si} className="text-center">
                        <div className={`text-2xl font-extrabold ${area.accent} mb-1`}>{s.value}</div>
                        <div className="text-xs text-nvg-gray dark:text-white/40 font-medium">{s.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className={`h-px bg-gradient-to-r ${area.color} opacity-20 mb-6`} />
                  <p className="text-xs text-nvg-gray dark:text-white/30 uppercase tracking-widest font-semibold">
                    Domaine {String(index + 1).padStart(2, '0')} / {String(expertiseAreas.length).padStart(2, '0')}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Produits phares */}
      <div className="bg-nvg-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Nos Produits <span className="text-nvg-orange">Phares</span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">Fabriqués au Bénin, distribués à travers l'Afrique de l'Ouest.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <div key={index} className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-5">
                    <Icon className={`w-6 h-6 ${product.color}`} />
                  </div>
                  <h3 className="font-bold text-white mb-3">{product.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-5">{product.description}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {product.tags.map((tag) => (
                      <span key={tag} className="text-[10px] px-2 py-0.5 bg-white/5 text-white/40 rounded-full border border-white/10 font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-white/[0.05]">
                    <div className={`text-2xl font-extrabold ${product.color}`}>{product.stat}</div>
                    <div className="text-xs text-white/30 mt-0.5">{product.statLabel}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-nvg-dark via-nvg-blue to-nvg-blue-light rounded-3xl p-6 sm:p-10 lg:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-nvg-orange/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-nvg-green/20 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              Un projet à réaliser ensemble ?
            </h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              Nos équipes sont disponibles pour étudier vos besoins et vous proposer des solutions adaptées.
            </p>
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
    </div>
  );
}
