import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Factory, Truck, Ship, Sprout, Sun, Shirt, HeartPulse, BookOpen, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

export default function ExpertisePage() {
  const { t, language } = useTranslation();
  const p = t.pages.expertise;
  const l = (fr: string, en: string) => language === 'en' ? en : fr;

  const expertiseAreas = [
    {
      icon: Factory,
      title: l('Production et Commercialisation', 'Production and Marketing'),
      subtitle: l('Unité Industrielle Lokossa — Agréée Catégorie B', 'Lokossa Industrial Unit — Category B Approved'),
      description: l(
        "Notre unité de production à Lokossa est le cœur industriel du groupe. Agréée Catégorie B par l'État béninois, elle confectionne et distribue des produits à fort impact social : sacs scolaires solaires, tenues scolaires, serviettes hygiéniques réutilisables et gels biomédicaux.",
        'Our production unit in Lokossa is the industrial heart of the group. Category B approved by the Beninese State, it manufactures and distributes products with high social impact: solar school bags, school uniforms, reusable sanitary napkins and biomedical gels.'
      ),
      features: [
        l('Sacs scolaires solaires LIGHT-TC',            'LIGHT-TC solar school bags'),
        l('Tenues scolaires et kaki',                    'School and khaki uniforms'),
        l('Serviettes hygiéniques réutilisables',        'Reusable sanitary napkins'),
        l('Gels hydro-alcooliques certifiés',            'Certified hydroalcoholic gels'),
        l('150+ employés directs',                       '150+ direct employees'),
        l('100+ machines industrielles',                 '100+ industrial machines'),
      ],
      stats: [
        { value: '98 867', label: l('Sacs produits',   'Bags produced') },
        { value: '150+',   label: l('Employés',        'Employees') },
        { value: '500K+',  label: l('Sacs / an (cap.)','Bags / year (cap.)') },
      ],
      color: 'from-nvg-blue to-nvg-blue-light',
      accent: 'text-nvg-blue-light',
      border: 'border-nvg-blue/30',
      bg: 'bg-nvg-blue/5 dark:bg-nvg-blue/10',
    },
    {
      icon: Truck,
      title: l('Fourniture et Installation', 'Supply and Installation'),
      subtitle: l('Équipements pédagogiques & institutionnels', 'Educational & institutional equipment'),
      description: l(
        "Nous fournissons aux organismes publics et privés les équipements nécessaires à leur bon fonctionnement. De la fourniture scolaire complète aux équipements bureautiques, NVG est un partenaire de confiance de l'État béninois et des organisations internationales.",
        'We provide public and private organizations with the equipment needed for their proper functioning. From complete school supplies to office equipment, NVG is a trusted partner of the Beninese State and international organizations.'
      ),
      features: [
        l('Matériels pédagogiques complets',     'Complete educational materials'),
        l('Kits scolaires pour élèves',          'School kits for students'),
        l('Équipements informatiques',           'IT equipment'),
        l('Mobiliers de bureau',                 'Office furniture'),
        l('Installation et mise en service',     'Installation and commissioning'),
        l('Suivi et maintenance',                'Monitoring and maintenance'),
      ],
      stats: [
        { value: '37 199', label: l('Trousses livrées',  'Kits delivered') },
        { value: '120',    label: l('Conteneurs / an',   'Containers / year') },
        { value: '6',      label: l('Pays couverts',     'Countries covered') },
      ],
      color: 'from-nvg-orange to-nvg-orange-light',
      accent: 'text-nvg-orange',
      border: 'border-nvg-orange/30',
      bg: 'bg-nvg-orange/5 dark:bg-nvg-orange/10',
    },
    {
      icon: Ship,
      title: l('Import-Export', 'Import-Export'),
      subtitle: l('Commerce international & logistique', 'International trade & logistics'),
      description: l(
        "NVG propose des solutions de négoce et de logistique internationale couvrant les produits tropicaux, les équipements informatiques et bureautiques. Notre réseau s'étend sur 6 pays d'Afrique de l'Ouest avec une maîtrise complète de la chaîne d'approvisionnement.",
        'NVG offers international trading and logistics solutions covering tropical products, IT and office equipment. Our network spans 6 West African countries with complete control of the supply chain.'
      ),
      features: [
        l('Produits tropicaux certifiés',               'Certified tropical products'),
        l('Équipements informatiques reconditionnés',   'Reconditioned IT equipment'),
        l('Matériel bureautique',                       'Office equipment'),
        l('Solutions logistiques sur mesure',           'Custom logistics solutions'),
        l('Dédouanement et transit',                    'Customs clearance and transit'),
        l('Gestion des stocks',                         'Inventory management'),
      ],
      stats: [
        { value: '6',    label: l('Pays actifs',      'Active countries') },
        { value: '300+', label: l('Collaborateurs',   'Employees') },
        { value: '2008', label: l('Depuis',           'Since') },
      ],
      color: 'from-nvg-orange to-nvg-orange-light',
      accent: 'text-nvg-orange',
      border: 'border-nvg-orange/30',
      bg: 'bg-nvg-orange/5 dark:bg-nvg-orange/10',
    },
    {
      icon: Sprout,
      title: l("Fourniture d'Intrants Agricoles", 'Agricultural Inputs'),
      subtitle: l('Agriculture durable & intrants de qualité', 'Sustainable agriculture & quality inputs'),
      description: l(
        "Nous accompagnons les exploitants agricoles béninois et sous-régionaux avec une large gamme d'intrants certifiés, de semences sélectionnées et d'équipements agricoles. Notre approche privilégie des solutions bio et durables pour une agriculture compétitive.",
        'We support Beninese and sub-regional farmers with a wide range of certified inputs, selected seeds and agricultural equipment. Our approach favors organic and sustainable solutions for competitive agriculture.'
      ),
      features: [
        l('Intrants agricoles certifiés',            'Certified agricultural inputs'),
        l('Semences de qualité sélectionnées',       'Selected quality seeds'),
        l('Machines et outils agricoles',            'Agricultural machines and tools'),
        l('Produits phytosanitaires bio',            'Organic phytosanitary products'),
        l('Conseil agronomique',                     'Agronomic advice'),
        l('Formation aux bonnes pratiques',          'Training in good practices'),
      ],
      stats: [
        { value: '3 000', label: l('Machines distribuées', 'Machines distributed') },
        { value: '7 402', label: l('Couturiers formés',    'Seamstresses trained') },
        { value: l('Bio', 'Organic'), label: l('Approche certifiée', 'Certified approach') },
      ],
      color: 'from-nvg-blue to-nvg-orange',
      accent: 'text-nvg-orange',
      border: 'border-nvg-orange/30',
      bg: 'bg-nvg-orange/5 dark:bg-nvg-orange/10',
    },
  ];

  const products = [
    {
      icon: Sun,
      title: l('Sacs Solaires LIGHT-TC', 'LIGHT-TC Solar Bags'),
      description: l(
        "Équipés de panneaux solaires et d'une batterie intégrée Li-ion, ces sacs permettent aux élèves des zones non électrifiées d'étudier la nuit avec une autonomie d'au moins 2 heures de lumière.",
        'Equipped with solar panels and an integrated Li-ion battery, these bags allow students in non-electrified areas to study at night with at least 2 hours of light autonomy.'
      ),
      stat: '98 867', statLabel: l('sacs produits', 'bags produced'),
      tags: [l('Énergie solaire', 'Solar energy'), l('Autonomie 2h+', '2h+ autonomy'), 'LIGHT-TC'],
      color: 'text-nvg-orange',
    },
    {
      icon: Shirt,
      title: l('Tenues Scolaires', 'School Uniforms'),
      description: l(
        "Uniformes kaki et tenues scolaires de qualité produits localement par nos couturiers partenaires. Chaque commande contribue à l'emploi local et à la formation professionnelle.",
        'Quality khaki uniforms and school outfits locally produced by our partner seamstresses. Each order contributes to local employment and vocational training.'
      ),
      stat: '834', statLabel: l('tenues produites', 'uniforms produced'),
      tags: [l('Made in Bénin', 'Made in Benin'), l('Qualité certifiée', 'Certified quality'), l('Emploi local', 'Local employment')],
      color: 'text-nvg-blue-light',
    },
    {
      icon: HeartPulse,
      title: l('Serviettes Hygiéniques', 'Sanitary Napkins'),
      description: l(
        "Serviettes hygiéniques réutilisables distribuées dans le cadre du projet SWEDD, ciblant 126 000+ filles bénéficiaires. Un levier clé pour le maintien des jeunes filles à l'école.",
        'Reusable sanitary napkins distributed under the SWEDD project, targeting 126,000+ beneficiary girls. A key lever for keeping young girls in school.'
      ),
      stat: '631 070', statLabel: l('serviettes distribuées', 'napkins distributed'),
      tags: ['Projet SWEDD', l('Impact social', 'Social impact'), l('126K+ bénéficiaires', '126K+ beneficiaries')],
      color: 'text-nvg-orange',
    },
    {
      icon: BookOpen,
      title: l('Kits et Trousses Scolaires', 'School Kits'),
      description: l(
        "Kits complets comprenant tout le matériel nécessaire pour la rentrée scolaire. Fournis en partenariat avec le gouvernement du Bénin et des organisations internationales.",
        'Complete kits containing all the materials needed for the school year. Provided in partnership with the Beninese government and international organizations.'
      ),
      stat: '37 199', statLabel: l('trousses livrées', 'kits delivered'),
      tags: [l('Kits complets', 'Complete kits'), l('Partenariat État', 'State partnership'), l('Rentrée scolaire', 'Back to school')],
      color: 'text-nvg-orange',
    },
  ];

  return (
    <div className="min-h-screen bg-nvg-light dark:bg-nvg-dark transition-colors duration-300">
      <Helmet>
        <title>Nos Expertises — Production, Fourniture, Import-Export & Agriculture | NVG SA</title>
        <meta name="description" content="NVG intervient dans 4 domaines : production industrielle (sacs solaires LIGHT-TC), fourniture d'équipements, import-export, et intrants agricoles au Bénin et en Afrique de l'Ouest." />
        <link rel="canonical" href="https://nvg.bj/expertises" />
      </Helmet>

      {/* Page Hero */}
      <div className="relative bg-nvg-dark pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-nvg-blue/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-nvg-orange/15 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 left-0 w-[200px] h-[200px] bg-nvg-blue/10 rounded-full blur-[80px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-16 lg:px-24">
          <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            {t.pages.backLink}
          </Link>
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-nvg-blue/20 text-nvg-blue-light rounded-full text-sm font-medium mb-6 border border-nvg-blue/30">
              {p.badge}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              {p.heroTitle.split(' ').slice(0, -1).join(' ')}{' '}
              <span className="text-nvg-orange">{p.heroTitle.split(' ').slice(-1)}</span>
            </h1>
            <p className="text-lg text-white/60 leading-relaxed max-w-2xl">
              {p.heroDesc}
            </p>
          </div>
        </div>
      </div>

      {/* Expertise Areas */}
      <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24 py-20">
        <div className="space-y-16">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
              >
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
                    {p.contactLink}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                <div className={`glass-card p-6 sm:p-8 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className={`w-16 h-16 bg-gradient-to-br ${area.color} rounded-2xl flex items-center justify-center mb-8`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className={`h-px bg-gradient-to-r ${area.color} opacity-20 mb-6`} />
                  <p className="text-xs text-nvg-gray dark:text-white/30 uppercase tracking-widest font-semibold">
                    {p.domainLabel} {String(index + 1).padStart(2, '0')} / {String(expertiseAreas.length).padStart(2, '0')}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Produits phares */}
      <div className="bg-nvg-dark py-20">
        <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              {p.productsTitle.split(' ').slice(0, -1).join(' ')} <span className="text-nvg-orange">{p.productsTitle.split(' ').slice(-1)}</span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">{p.productsSubtitle}</p>
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
      <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24 py-20">
        <div className="bg-gradient-to-r from-nvg-dark via-nvg-blue to-nvg-blue-light rounded-3xl p-6 sm:p-10 lg:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-nvg-orange/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-nvg-blue/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">{p.ctaTitle}</h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">{p.ctaSubtitle}</p>
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
    </div>
  );
}
