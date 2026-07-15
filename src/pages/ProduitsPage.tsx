import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Sun, Shirt, Heart, FlaskConical, BookOpen, GraduationCap, Sprout, Laptop } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

// Stable category keys used for filtering (always FR)
const CATEGORY_KEYS = ['Tous', 'Solaire', 'Textile', 'Hygiène', 'Scolaire', 'Agricole'] as const;
type CategoryKey = (typeof CATEGORY_KEYS)[number];

export default function ProduitsPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('Tous');
  const { t, language } = useTranslation();
  const p = t.pages.produits;
  const l = (fr: string, en: string) => language === 'en' ? en : fr;

  const categoryLabels: Record<CategoryKey, string> = {
    'Tous':    p.categories[0],
    'Solaire': p.categories[1],
    'Textile': p.categories[2],
    'Hygiène': p.categories[3],
    'Scolaire':p.categories[4],
    'Agricole':p.categories[5],
  };

  const products = [
    {
      icon: Sun,
      name: l('Sacs Solaires LIGHT-TC', 'LIGHT-TC Solar Bags'),
      category: 'Solaire' as CategoryKey,
      description: l(
        "Sacs scolaires équipés de panneaux solaires et d'une batterie Li-ion intégrée. Permettent aux élèves des zones sans électricité d'étudier la nuit avec 2h+ d'autonomie lumineuse.",
        'School bags equipped with solar panels and an integrated Li-ion battery. Allow students in areas without electricity to study at night with 2h+ of light autonomy.'
      ),
      specs: [
        l('Panneau solaire intégré',       'Integrated solar panel'),
        l('Batterie Li-ion rechargeable',  'Rechargeable Li-ion battery'),
        l('Autonomie 2h+ de lumière LED',  '2h+ LED light autonomy'),
        l("Résistant à l'eau",             'Water resistant'),
        l('Certifié CE',                   'CE certified'),
      ],
      stat: '38 899', statLabel: l('sacs produits', 'bags produced'),
      bg: 'bg-nvg-orange/10 dark:bg-nvg-orange/15',
      text: 'text-nvg-orange dark:text-nvg-orange-light',
      iconBg: 'bg-nvg-orange/15 dark:bg-nvg-orange/20',
      badge: 'bg-nvg-orange/10 text-nvg-orange dark:bg-nvg-orange/20 dark:text-nvg-orange-light',
    },
    {
      icon: Shirt,
      name: l('Tenues Scolaires Kaki', 'Khaki School Uniforms'),
      category: 'Textile' as CategoryKey,
      description: l(
        "Uniformes kaki et tenues scolaires produits localement dans notre unité de Lokossa. Chaque commande crée de l'emploi pour nos 150+ couturiers partenaires au Bénin.",
        'Khaki uniforms and school uniforms locally produced in our Lokossa unit. Each order creates employment for our 150+ partner seamstresses in Benin.'
      ),
      specs: [
        l('Tissu kaki certifié',        'Certified khaki fabric'),
        l('Couture locale (Lokossa)',   'Local sewing (Lokossa)'),
        l('Tailles enfants et adultes', 'Children and adult sizes'),
        l('Lavage facile',              'Easy washing'),
        l('Durable et résistant',       'Durable and resistant'),
      ],
      stat: '834', statLabel: l('tenues produites', 'uniforms produced'),
      bg: 'bg-nvg-blue/10 dark:bg-nvg-blue/15',
      text: 'text-nvg-blue dark:text-nvg-blue-light',
      iconBg: 'bg-nvg-blue/15 dark:bg-nvg-blue/25',
      badge: 'bg-nvg-blue/10 text-nvg-blue dark:bg-nvg-blue/20 dark:text-nvg-blue-light',
    },
    {
      icon: Heart,
      name: l('Serviettes Hygiéniques Réutilisables', 'Reusable Sanitary Napkins'),
      category: 'Hygiène' as CategoryKey,
      description: l(
        "Serviettes hygiéniques réutilisables distribuées aux jeunes filles dans le cadre du projet SWEDD. Un outil pour maintenir les filles à l'école et protéger leur santé.",
        "Reusable sanitary napkins distributed to young girls through the SWEDD project. A tool to keep girls in school and protect their health."
      ),
      specs: [
        l('Tissu absorbant naturel',      'Natural absorbent fabric'),
        l('Réutilisable (lavable)',        'Reusable (washable)'),
        l('Sans produits chimiques',      'Chemical-free'),
        l('Impact environnemental faible','Low environmental impact'),
        'Projet SWEDD / ONU',
      ],
      stat: '631 070', statLabel: l('serviettes distribuées', 'napkins distributed'),
      bg: 'bg-nvg-orange/10 dark:bg-nvg-orange/15',
      text: 'text-nvg-orange dark:text-nvg-orange-light',
      iconBg: 'bg-nvg-orange/15 dark:bg-nvg-orange/20',
      badge: 'bg-nvg-orange/10 text-nvg-orange dark:bg-nvg-orange/20 dark:text-nvg-orange-light',
    },
    {
      icon: FlaskConical,
      name: l('Gels Hydro-Alcooliques', 'Hydroalcoholic Gels'),
      category: 'Hygiène' as CategoryKey,
      description: l(
        "Gels biomédicaux certifiés pour l'hygiène des mains, produits en conformité avec les normes OMS. Distribués aux établissements scolaires, hôpitaux et institutions publiques.",
        'Certified biomedical gels for hand hygiene, produced in compliance with WHO standards. Distributed to schools, hospitals and public institutions.'
      ),
      specs: [
        l('Concentration ≥70% alcool', 'Concentration ≥70% alcohol'),
        l('Norme OMS respectée',       'WHO standard compliant'),
        l('Sans rinçage',              'No rinsing'),
        l('Formats 100ml à 5L',        '100ml to 5L formats'),
        l('Certifié ANSM équivalent',  'Equivalent ANSM certified'),
      ],
      stat: '100K+', statLabel: l('flacons distribués', 'flasks distributed'),
      bg: 'bg-nvg-green/10 dark:bg-nvg-green/15',
      text: 'text-nvg-green dark:text-nvg-green-light',
      iconBg: 'bg-nvg-green/15 dark:bg-nvg-green/20',
      badge: 'bg-nvg-green/10 text-nvg-green dark:bg-nvg-green/20 dark:text-nvg-green-light',
    },
    {
      icon: BookOpen,
      name: l('Kits et Trousses Scolaires', 'School Kits'),
      category: 'Scolaire' as CategoryKey,
      description: l(
        "Kits scolaires complets fournis en partenariat avec le gouvernement du Bénin pour la rentrée. Chaque kit comprend tout le nécessaire pour une année scolaire réussie.",
        'Complete school kits provided in partnership with the Beninese government for the school year. Each kit contains everything needed for a successful school year.'
      ),
      specs: [
        l('Cahiers, stylos, règles', 'Notebooks, pens, rulers'),
        l('Manuel scolaire inclus',  'Textbook included'),
        l('Trousse complète',        'Complete pencil case'),
        l('Adapté par niveau',       'Adapted by level'),
        l('Fourni partout au Bénin', 'Delivered throughout Benin'),
      ],
      stat: '37 199', statLabel: l('trousses livrées', 'kits delivered'),
      bg: 'bg-nvg-blue/10 dark:bg-nvg-blue/15',
      text: 'text-nvg-blue dark:text-nvg-blue-light',
      iconBg: 'bg-nvg-blue/15 dark:bg-nvg-blue/25',
      badge: 'bg-nvg-blue/10 text-nvg-blue dark:bg-nvg-blue/20 dark:text-nvg-blue-light',
    },
    {
      icon: GraduationCap,
      name: l('Formation Professionnelle', 'Vocational Training'),
      category: 'Scolaire' as CategoryKey,
      description: l(
        "Programmes de formation en couture, informatique et métiers techniques pour les jeunes du Bénin. NVG croit en l'autonomisation par la compétence.",
        'Vocational training programs in sewing, IT and technical trades for young people in Benin. NVG believes in empowerment through skills.'
      ),
      specs: [
        l('Couture industrielle',     'Industrial sewing'),
        l('Informatique bureautique', 'Office IT'),
        l('Durée 3 à 6 mois',        '3 to 6 months duration'),
        l('Certificat délivré',       'Certificate awarded'),
        l('7 402 formés',             '7,402 trained'),
      ],
      stat: '7 402', statLabel: l('couturiers formés', 'seamstresses trained'),
      bg: 'bg-nvg-green/10 dark:bg-nvg-green/15',
      text: 'text-nvg-green dark:text-nvg-green-light',
      iconBg: 'bg-nvg-green/15 dark:bg-nvg-green/20',
      badge: 'bg-nvg-green/10 text-nvg-green dark:bg-nvg-green/20 dark:text-nvg-green-light',
    },
    {
      icon: Sprout,
      name: l('Intrants Agricoles', 'Agricultural Inputs'),
      category: 'Agricole' as CategoryKey,
      description: l(
        "Semences certifiées, engrais bio et produits phytosanitaires pour les exploitants agricoles d'Afrique de l'Ouest. Approche durable favorisant la productivité sans dégrader les sols.",
        "Certified seeds, organic fertilizers and phytosanitary products for West African farmers. Sustainable approach favoring productivity without degrading soils."
      ),
      specs: [
        l('Semences certifiées',           'Certified seeds'),
        l('Engrais biologiques',           'Organic fertilizers'),
        l('Phytosanitaires homologués',    'Approved phytosanitary products'),
        l('Conseil agronomique',           'Agronomic advice'),
        l('Livraison terrain',             'Field delivery'),
      ],
      stat: '3 000', statLabel: l('machines distribuées', 'machines distributed'),
      bg: 'bg-nvg-green/10 dark:bg-nvg-green/15',
      text: 'text-nvg-green dark:text-nvg-green-light',
      iconBg: 'bg-nvg-green/15 dark:bg-nvg-green/20',
      badge: 'bg-nvg-green/10 text-nvg-green dark:bg-nvg-green/20 dark:text-nvg-green-light',
    },
    {
      icon: Laptop,
      name: l('Équipements Informatiques', 'IT Equipment'),
      category: 'Scolaire' as CategoryKey,
      description: l(
        "Fourniture d'équipements informatiques pour les établissements scolaires, universités et institutions publiques. Import-export et installation inclus.",
        'Supply of IT equipment for schools, universities and public institutions. Import-export and installation included.'
      ),
      specs: [
        l('Ordinateurs & tablettes',  'Computers & tablets'),
        l('Vidéoprojecteurs',         'Video projectors'),
        l('Réseaux informatiques',    'Computer networks'),
        l('Installation comprise',    'Installation included'),
        l('Support technique',        'Technical support'),
      ],
      stat: '120', statLabel: l('conteneurs / an', 'containers / year'),
      bg: 'bg-nvg-blue/10 dark:bg-nvg-blue/15',
      text: 'text-nvg-blue dark:text-nvg-blue-light',
      iconBg: 'bg-nvg-blue/15 dark:bg-nvg-blue/25',
      badge: 'bg-nvg-blue/10 text-nvg-blue dark:bg-nvg-blue/20 dark:text-nvg-blue-light',
    },
  ];

  const filtered = activeCategory === 'Tous'
    ? products
    : products.filter((prod) => prod.category === activeCategory);

  return (
    <div className="min-h-screen bg-nvg-light dark:bg-nvg-dark transition-colors duration-300">
      <Helmet>
        <title>Nos Produits — Sacs solaires, Tenues scolaires, Kits & plus | NVG SA</title>
        <meta name="description" content="Catalogue complet des produits NVG : sacs scolaires solaires LIGHT-TC, tenues scolaires, serviettes hygiéniques réutilisables, gels biomédicaux, kits scolaires et intrants agricoles." />
        <link rel="canonical" href="https://nvg.bj/produits" />
      </Helmet>

      {/* Page Hero */}
      <div className="relative bg-nvg-dark pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-nvg-orange/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-nvg-blue/15 rounded-full blur-[80px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-16 lg:px-24">
          <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            {t.pages.backLink}
          </Link>
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-nvg-orange/20 text-nvg-orange rounded-full text-sm font-medium mb-6 border border-nvg-orange/30">
              {p.badge}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              {p.heroTitle.split(' ')[0]}{' '}
              <span className="relative inline-block">
                <span className="relative z-10 bg-nvg-orange text-white px-4 py-1 rounded-xl">{p.heroTitle.split(' ').slice(1).join(' ')}</span>
                <span className="absolute inset-0 bg-nvg-orange rounded-xl blur-xl opacity-30 scale-110" />
              </span>
            </h1>
            <p className="text-lg text-white/60 leading-relaxed max-w-2xl">
              {p.heroDesc}
            </p>
          </div>
        </div>
      </div>

      {/* Filters + Grid */}
      <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24 py-16">

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {CATEGORY_KEYS.map((key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === key
                  ? 'bg-nvg-orange text-white shadow-[0_0_20px_rgba(249,115,22,0.4)]'
                  : 'bg-nvg-dark/5 dark:bg-white/5 text-nvg-gray dark:text-white/60 hover:bg-nvg-orange/10 dark:hover:bg-white/10 border border-nvg-dark/10 dark:border-white/10'
              }`}
            >
              {categoryLabels[key]}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
          {filtered.map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.name}
                className={`${product.bg} rounded-2xl border border-black/5 p-6 shadow-[0_20px_55px_-38px_rgba(15,23,42,0.55)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_65px_-42px_rgba(15,23,42,0.72)] dark:border-white/10`}
              >
                <div className={`w-12 h-12 ${product.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${product.text}`} />
                </div>
                <span className={`inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full mb-3 ${product.badge}`}>
                  {categoryLabels[product.category]}
                </span>
                <h3 className={`font-bold text-sm leading-snug mb-3 ${product.text}`}>{product.name}</h3>
                <p className={`text-xs leading-relaxed mb-4 opacity-70 ${product.text}`}>{product.description}</p>
                <div className="space-y-1.5 mb-4">
                  {product.specs.slice(0, 3).map((spec) => (
                    <div key={spec} className={`flex items-center gap-1.5 text-xs ${product.text} opacity-70`}>
                      <div className={`w-1.5 h-1.5 rounded-full opacity-60 ${product.iconBg}`} />
                      {spec}
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-current/10">
                  <div className={`text-xl font-extrabold ${product.text}`}>{product.stat}</div>
                  <div className={`text-xs opacity-50 mt-0.5 ${product.text}`}>{product.statLabel}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center py-10 border-t border-nvg-dark/10 dark:border-white/10">
          <h2 className="text-2xl font-extrabold text-nvg-dark dark:text-white mb-4">
            {p.ctaTitle.split(' ').slice(0, -1).join(' ')} <span className="text-nvg-orange">{p.ctaTitle.split(' ').slice(-1)}</span>
          </h2>
          <p className="text-nvg-gray dark:text-white/50 mb-8 max-w-lg mx-auto">
            {p.ctaSubtitle}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 bg-nvg-orange hover:bg-nvg-orange-light text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 group"
            >
              {p.ctaButton}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/expertises"
              className="inline-flex items-center gap-2 border-2 border-nvg-dark/20 dark:border-white/20 text-nvg-dark dark:text-white font-semibold px-8 py-4 rounded-full hover:border-nvg-orange dark:hover:border-nvg-orange transition-all duration-300"
            >
              {p.ctaButton2}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
