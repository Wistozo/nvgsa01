import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, MapPin, Phone, Mail, Globe } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

export default function ZonesPage() {
  const { t, language } = useTranslation();
  const p = t.pages.zones;
  const l = (fr: string, en: string) => language === 'en' ? en : fr;

  const countries = [
    {
      name: 'Bénin',
      code: 'BJ',
      isHQ: true,
      capital: 'Cotonou',
      role: l('Siège social & Unité industrielle', 'Headquarters & Industrial unit'),
      details: l(
        'Quartier général du groupe depuis 2008. Unité de production à Lokossa (Mono), agréée Catégorie B.',
        'Group headquarters since 2008. Production unit in Lokossa (Mono), Category B approved.'
      ),
      phone: '+229 01 90 94 52 55',
      email: 'newvisiongroup23@gmail.com',
      address: 'Cotonou, Gbedjromèdé 16 Ampoules',
      accent: 'border-nvg-orange bg-nvg-orange/10',
      badge: 'bg-nvg-orange text-white',
      dot: 'bg-nvg-orange',
    },
    {
      name: "Côte d'Ivoire",
      code: 'CI',
      isHQ: false,
      capital: 'Abidjan',
      role: l('Bureau de représentation', 'Representative office'),
      details: l(
        "Présence commerciale pour les marchés ivoiriens et francophones d'Afrique de l'Ouest.",
        'Commercial presence for Ivorian and French-speaking West African markets.'
      ),
      phone: '+225 XX XX XX XX',
      email: 'newvisiongroup23@gmail.com',
      address: 'Abidjan, Plateau',
      accent: 'border-white/10 bg-white/5 dark:bg-white/5',
      badge: 'bg-nvg-blue text-white',
      dot: 'bg-nvg-blue-light',
    },
    {
      name: 'Togo',
      code: 'TG',
      isHQ: false,
      capital: 'Lomé',
      role: l('Bureau de représentation', 'Representative office'),
      details: l(
        "Partenariats institutionnels et fourniture d'équipements au secteur éducatif togolais.",
        'Institutional partnerships and supply of equipment to the Togolese education sector.'
      ),
      phone: '+228 XX XX XX XX',
      email: 'newvisiongroup23@gmail.com',
      address: 'Lomé, Centre',
      accent: 'border-white/10 bg-white/5 dark:bg-white/5',
      badge: 'bg-nvg-blue text-white',
      dot: 'bg-nvg-blue-light',
    },
    {
      name: 'Burkina Faso',
      code: 'BF',
      isHQ: false,
      capital: 'Ouagadougou',
      role: l('Partenaire commercial', 'Commercial partner'),
      details: l(
        'Distribution de sacs solaires LIGHT-TC et fournitures scolaires dans les zones rurales.',
        'Distribution of LIGHT-TC solar bags and school supplies in rural areas.'
      ),
      phone: '+226 XX XX XX XX',
      email: 'newvisiongroup23@gmail.com',
      address: 'Ouagadougou',
      accent: 'border-white/10 bg-white/5 dark:bg-white/5',
      badge: 'bg-nvg-blue text-white',
      dot: 'bg-nvg-blue-light',
    },
    {
      name: 'Cameroun',
      code: 'CM',
      isHQ: false,
      capital: 'Yaoundé',
      role: l('Partenaire commercial', 'Commercial partner'),
      details: l(
        "Opérations d'import-export et fourniture d'équipements institutionnels.",
        'Import-export operations and supply of institutional equipment.'
      ),
      phone: '+237 XX XX XX XX',
      email: 'newvisiongroup23@gmail.com',
      address: 'Yaoundé',
      accent: 'border-white/10 bg-white/5 dark:bg-white/5',
      badge: 'bg-nvg-blue text-white',
      dot: 'bg-nvg-blue-light',
    },
    {
      name: 'Niger',
      code: 'NE',
      isHQ: false,
      capital: 'Niamey',
      role: l('Partenaire commercial', 'Commercial partner'),
      details: l(
        'Distribution de produits agricoles et fournitures scolaires en partenariat avec des ONG locales.',
        'Distribution of agricultural products and school supplies in partnership with local NGOs.'
      ),
      phone: '+227 XX XX XX XX',
      email: 'newvisiongroup23@gmail.com',
      address: 'Niamey',
      accent: 'border-white/10 bg-white/5 dark:bg-white/5',
      badge: 'bg-nvg-blue text-white',
      dot: 'bg-nvg-blue-light',
    },
  ];

  const offices = [
    {
      type: l('Siège Social', 'Headquarters'),
      address: 'Cotonou, Gbedjromèdé 16 Ampoules, Bénin',
      phone: '+229 01 90 94 52 55',
      email: 'newvisiongroup23@gmail.com',
      color: 'border-nvg-orange/30 bg-nvg-orange/5',
      iconColor: 'text-nvg-orange',
    },
    {
      type: l('Unité Industrielle', 'Industrial Unit'),
      address: 'Lokossa, Mono, Bénin',
      phone: '+229 01 94 74 74 11',
      email: 'newvisiongroup23@gmail.com',
      color: 'border-nvg-orange/30 bg-nvg-orange/5',
      iconColor: 'text-nvg-orange',
    },
  ];

  return (
    <div className="min-h-screen bg-nvg-dark transition-colors duration-300">
      <Helmet>
        <title>Zones d'Intervention — 6 pays d'Afrique de l'Ouest | New Vision Group SA</title>
        <meta name="description" content="NVG est présent dans 6 pays : Bénin (siège), Côte d'Ivoire, Togo, Burkina Faso, Cameroun et Niger. Découvrez nos bureaux et zones d'intervention en Afrique de l'Ouest." />
        <link rel="canonical" href="https://nvg.bj/zones" />
      </Helmet>

      {/* Page Hero */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-nvg-blue/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-nvg-blue/15 rounded-full blur-[100px]" />
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
              {p.heroTitle.split(' ').slice(0, -1).join(' ')}{' '}
              <span className="text-nvg-orange">{p.heroTitle.split(' ').slice(-1)}</span>
            </h1>
            <p className="text-lg text-white/60 leading-relaxed max-w-2xl">
              {p.heroDesc}
            </p>
          </div>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-8 mt-12">
            {p.quickStats.map((s) => (
              <div key={s.label}>
                <div className={`text-3xl font-extrabold ${s.color}`}>{s.value}</div>
                <div className="text-xs text-white/40 uppercase tracking-widest font-medium mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Countries grid */}
      <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24 py-16">
        <h2 className="text-2xl font-extrabold text-white mb-8">
          {p.countriesTitle} <span className="text-nvg-orange">({countries.length})</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {countries.map((country, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 ${country.accent}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 ${country.badge} rounded-xl flex items-center justify-center font-bold text-sm`}>
                    {country.code}
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{country.name}</h3>
                    <p className="text-xs text-white/55">{country.capital}</p>
                  </div>
                </div>
                {country.isHQ && (
                  <span className="text-[10px] bg-nvg-orange text-white px-2 py-1 rounded-full font-semibold uppercase tracking-wider">
                    {p.hqBadge}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2 mb-3">
                <div className={`w-2 h-2 rounded-full ${country.dot}`} />
                <span className="text-xs text-white/65 font-medium">{country.role}</span>
              </div>
              <p className="text-sm text-white/65 leading-relaxed mb-4">{country.details}</p>
              <div className="space-y-2 pt-4 border-t border-white/[0.05]">
                {country.phone.includes('XX') ? (
                  <a href="tel:+22901909452 55" className="flex items-center gap-2 text-xs text-white/55 hover:text-nvg-orange transition-colors">
                    <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                    {p.viaHQ} +229 01 90 94 52 55
                  </a>
                ) : (
                  <a href={`tel:${country.phone}`} className="flex items-center gap-2 text-xs text-nvg-orange hover:text-nvg-orange-light transition-colors">
                    <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                    {country.phone}
                  </a>
                )}
                <a href={`mailto:${country.email}`} className="flex items-center gap-2 text-xs text-white/60 hover:text-white/80 transition-colors">
                  <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                  {country.email}
                </a>
                <div className="flex items-start gap-2 text-xs text-white/55">
                  <MapPin className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                  {country.address}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Offices */}
        <div className="mb-20">
          <h2 className="text-2xl font-extrabold text-white mb-8">
            {p.addressesTitle.split(' ')[0]} <span className="text-nvg-orange">{p.addressesTitle.split(' ').slice(1).join(' ')}</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {offices.map((office, i) => (
              <div key={i} className={`rounded-2xl p-8 border ${office.color}`}>
                <div className="flex items-center gap-3 mb-6">
                  <Globe className={`w-6 h-6 ${office.iconColor}`} />
                  <h3 className="font-bold text-white text-lg">{office.type}</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className={`w-5 h-5 ${office.iconColor} flex-shrink-0 mt-0.5`} />
                    <p className="text-white/60 text-sm">{office.address}</p>
                  </div>
                  <a href={`tel:${office.phone}`} className={`flex items-center gap-3 text-sm ${office.iconColor} hover:opacity-80 transition-opacity font-medium`}>
                    <Phone className="w-5 h-5 flex-shrink-0" />
                    {office.phone}
                  </a>
                  <a href={`mailto:${office.email}`} className="flex items-center gap-3 text-sm text-white/50 hover:text-white/70 transition-colors">
                    <Mail className="w-5 h-5 flex-shrink-0" />
                    {office.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-10">
          <h2 className="text-2xl font-extrabold text-white mb-4">{p.ctaTitle}</h2>
          <p className="text-white/50 mb-8">{p.ctaSubtitle}</p>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 bg-nvg-orange hover:bg-nvg-orange-light text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 group"
          >
            {p.ctaButton}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
