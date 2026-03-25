import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Sun, Shirt, Heart, FlaskConical, BookOpen, GraduationCap, Sprout, Laptop } from 'lucide-react';

const categories = ['Tous', 'Solaire', 'Textile', 'Hygiène', 'Scolaire', 'Agricole'];

const products = [
  {
    icon: Sun,
    name: 'Sacs Solaires LIGHT-TC',
    category: 'Solaire',
    description: 'Sacs scolaires équipés de panneaux solaires et d\'une batterie Li-ion intégrée. Permettent aux élèves des zones sans électricité d\'étudier la nuit avec 2h+ d\'autonomie lumineuse.',
    specs: ['Panneau solaire intégré', 'Batterie Li-ion rechargeable', 'Autonomie 2h+ de lumière LED', 'Résistant à l\'eau', 'Certifié CE'],
    stat: '38 899',
    statLabel: 'sacs produits',
    bg: 'bg-amber-100 dark:bg-amber-500/10',
    text: 'text-amber-800 dark:text-amber-300',
    iconBg: 'bg-amber-200/70 dark:bg-amber-500/20',
    badge: 'bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300',
  },
  {
    icon: Shirt,
    name: 'Tenues Scolaires Kaki',
    category: 'Textile',
    description: 'Uniformes kaki et tenues scolaires produits localement dans notre unité de Lokossa. Chaque commande crée de l\'emploi pour nos 150+ couturiers partenaires au Bénin.',
    specs: ['Tissu kaki certifié', 'Couture locale (Lokossa)', 'Tailles enfants et adultes', 'Lavage facile', 'Durable et résistant'],
    stat: '834',
    statLabel: 'tenues produites',
    bg: 'bg-blue-100 dark:bg-blue-500/10',
    text: 'text-blue-800 dark:text-blue-300',
    iconBg: 'bg-blue-200/70 dark:bg-blue-500/20',
    badge: 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300',
  },
  {
    icon: Heart,
    name: 'Serviettes Hygiéniques Réutilisables',
    category: 'Hygiène',
    description: 'Serviettes hygiéniques réutilisables distribuées aux jeunes filles dans le cadre du projet SWEDD. Un outil pour maintenir les filles à l\'école et protéger leur santé.',
    specs: ['Tissu absorbant naturel', 'Réutilisable (lavable)', 'Sans produits chimiques', 'Impact environnemental faible', 'Projet SWEDD / ONU'],
    stat: '631 070',
    statLabel: 'serviettes distribuées',
    bg: 'bg-rose-100 dark:bg-rose-500/10',
    text: 'text-rose-800 dark:text-rose-300',
    iconBg: 'bg-rose-200/70 dark:bg-rose-500/20',
    badge: 'bg-rose-100 text-rose-700 dark:bg-rose-500/20 dark:text-rose-300',
  },
  {
    icon: FlaskConical,
    name: 'Gels Hydro-Alcooliques',
    category: 'Hygiène',
    description: 'Gels biomédicaux certifiés pour l\'hygiène des mains, produits en conformité avec les normes OMS. Distribués aux établissements scolaires, hôpitaux et institutions publiques.',
    specs: ['Concentration ≥70% alcool', 'Norme OMS respectée', 'Sans rinçage', 'Formats 100ml à 5L', 'Certifié ANSM équivalent'],
    stat: '100K+',
    statLabel: 'flacons distribués',
    bg: 'bg-teal-100 dark:bg-teal-500/10',
    text: 'text-teal-800 dark:text-teal-300',
    iconBg: 'bg-teal-200/70 dark:bg-teal-500/20',
    badge: 'bg-teal-100 text-teal-700 dark:bg-teal-500/20 dark:text-teal-300',
  },
  {
    icon: BookOpen,
    name: 'Kits et Trousses Scolaires',
    category: 'Scolaire',
    description: 'Kits scolaires complets fournis en partenariat avec le gouvernement du Bénin pour la rentrée. Chaque kit comprend tout le nécessaire pour une année scolaire réussie.',
    specs: ['Cahiers, stylos, règles', 'Manuel scolaire inclus', 'Trousse complète', 'Adapté par niveau', 'Fourni partout au Bénin'],
    stat: '37 199',
    statLabel: 'trousses livrées',
    bg: 'bg-violet-100 dark:bg-violet-500/10',
    text: 'text-violet-800 dark:text-violet-300',
    iconBg: 'bg-violet-200/70 dark:bg-violet-500/20',
    badge: 'bg-violet-100 text-violet-700 dark:bg-violet-500/20 dark:text-violet-300',
  },
  {
    icon: GraduationCap,
    name: 'Formation Professionnelle',
    category: 'Scolaire',
    description: 'Programmes de formation en couture, informatique et métiers techniques pour les jeunes du Bénin. NVG croit en l\'autonomisation par la compétence.',
    specs: ['Couture industrielle', 'Informatique bureautique', 'Durée 3 à 6 mois', 'Certificat délivré', '7 402 formés'],
    stat: '7 402',
    statLabel: 'couturiers formés',
    bg: 'bg-green-100 dark:bg-green-500/10',
    text: 'text-green-800 dark:text-green-300',
    iconBg: 'bg-green-200/70 dark:bg-green-500/20',
    badge: 'bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300',
  },
  {
    icon: Sprout,
    name: 'Intrants Agricoles',
    category: 'Agricole',
    description: 'Semences certifiées, engrais bio et produits phytosanitaires pour les exploitants agricoles d\'Afrique de l\'Ouest. Approche durable favorisant la productivité sans dégrader les sols.',
    specs: ['Semences certifiées', 'Engrais biologiques', 'Phytosanitaires homologués', 'Conseil agronomique', 'Livraison terrain'],
    stat: '3 000',
    statLabel: 'machines distribuées',
    bg: 'bg-lime-100 dark:bg-lime-500/10',
    text: 'text-lime-800 dark:text-lime-300',
    iconBg: 'bg-lime-200/70 dark:bg-lime-500/20',
    badge: 'bg-lime-100 text-lime-700 dark:bg-lime-500/20 dark:text-lime-300',
  },
  {
    icon: Laptop,
    name: 'Équipements Informatiques',
    category: 'Scolaire',
    description: 'Fourniture d\'équipements informatiques pour les établissements scolaires, universités et institutions publiques. Import-export et installation inclus.',
    specs: ['Ordinateurs & tablettes', 'Vidéoprojecteurs', 'Réseaux informatiques', 'Installation comprise', 'Support technique'],
    stat: '120',
    statLabel: 'conteneurs / an',
    bg: 'bg-sky-100 dark:bg-sky-500/10',
    text: 'text-sky-800 dark:text-sky-300',
    iconBg: 'bg-sky-200/70 dark:bg-sky-500/20',
    badge: 'bg-sky-100 text-sky-700 dark:bg-sky-500/20 dark:text-sky-300',
  },
];

export default function ProduitsPage() {
  const [activeCategory, setActiveCategory] = useState('Tous');

  const filtered = activeCategory === 'Tous'
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-nvg-light dark:bg-nvg-dark transition-colors duration-300">
      <Helmet>
        <title>Nos Produits — Sacs solaires, Tenues scolaires, Kits & plus | NVG SA</title>
        <meta name="description" content="Catalogue complet des produits NVG : sacs scolaires solaires LIGHT-TC, tenues scolaires, serviettes hygiéniques réutilisables, gels biomédicaux, kits scolaires et intrants agricoles." />
        <link rel="canonical" href="https://www.newvisiongroupsa.bj/produits" />
      </Helmet>

      {/* Page Hero */}
      <div className="relative bg-nvg-dark pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-nvg-orange/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-nvg-blue/15 rounded-full blur-[80px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Retour à l'accueil
          </Link>
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-nvg-orange/20 text-nvg-orange rounded-full text-sm font-medium mb-6 border border-nvg-orange/30">
              Catalogue
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Nos{' '}
              <span className="relative inline-block">
                <span className="relative z-10 bg-nvg-orange text-white px-4 py-1 rounded-xl">Produits.</span>
                <span className="absolute inset-0 bg-nvg-orange rounded-xl blur-xl opacity-30 scale-110" />
              </span>
            </h1>
            <p className="text-lg text-white/60 leading-relaxed max-w-2xl">
              Fabriqués au Bénin et distribués à travers l'Afrique de l'Ouest — des produits pensés pour l'impact social, l'éducation et le développement durable.
            </p>
          </div>
        </div>
      </div>

      {/* Filters + Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-nvg-orange text-white shadow-[0_0_20px_rgba(249,115,22,0.4)]'
                  : 'bg-nvg-dark/5 dark:bg-white/5 text-nvg-gray dark:text-white/60 hover:bg-nvg-orange/10 dark:hover:bg-white/10 border border-nvg-dark/10 dark:border-white/10'
              }`}
            >
              {cat}
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
                className={`${product.bg} rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300`}
              >
                <div className={`w-12 h-12 ${product.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${product.text}`} />
                </div>
                <span className={`inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full mb-3 ${product.badge}`}>
                  {product.category}
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
                <div className={`pt-4 border-t border-current/10`}>
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
            Intéressé par nos <span className="text-nvg-orange">produits</span> ?
          </h2>
          <p className="text-nvg-gray dark:text-white/50 mb-8 max-w-lg mx-auto">
            Demandez un devis personnalisé ou renseignez-vous sur nos conditions de commande et de livraison.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 bg-nvg-orange hover:bg-nvg-orange-light text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 group"
            >
              Demander un devis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/expertises"
              className="inline-flex items-center gap-2 border-2 border-nvg-dark/20 dark:border-white/20 text-nvg-dark dark:text-white font-semibold px-8 py-4 rounded-full hover:border-nvg-orange dark:hover:border-nvg-orange transition-all duration-300"
            >
              Voir nos expertises
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
