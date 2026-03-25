import { Link } from 'react-router-dom';
import { MapPin, Navigation, ArrowRight } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const countries = [
  { name: 'Bénin',         code: 'BJ', isHQ: true  },
  { name: "Côte d'Ivoire", code: 'CI', isHQ: false },
  { name: 'Togo',          code: 'TG', isHQ: false },
  { name: 'Burkina Faso',  code: 'BF', isHQ: false },
  { name: 'Cameroun',      code: 'CM', isHQ: false },
  { name: 'Niger',         code: 'NE', isHQ: false },
];

export default function Zones() {
  const { t } = useTranslation();

  return (
    <section id="zones" className="relative section-padding bg-nvg-dark overflow-hidden">

      {/* Background watermark */}
      <div className="absolute -top-6 -right-6 text-[5rem] sm:text-[9rem] lg:text-[14rem] font-black text-white/[0.025] leading-none select-none pointer-events-none tracking-tighter">
        ZONES
      </div>

      {/* Blobs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-nvg-green/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-nvg-blue/15 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section number */}
        <div className="flex items-center gap-4 mb-10">
          <span className="text-4xl sm:text-7xl font-black text-white/5 leading-none select-none tabular-nums">03</span>
          <div className="flex-1 h-px bg-gradient-to-r from-nvg-green/30 to-transparent" />
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-nvg-green/20 text-nvg-green rounded-full text-sm font-medium mb-4 border border-nvg-green/20">
            {t.zones.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            {t.zones.title}<span className="text-nvg-green">{t.zones.titleHighlight}</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            {t.zones.description}
          </p>
        </div>

        {/* Country chips */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {countries.map((c) => (
            <div
              key={c.code}
              className={`flex items-center gap-3 px-5 py-3 rounded-2xl transition-all duration-200 ${
                c.isHQ
                  ? 'bg-nvg-orange/15 border-2 border-nvg-orange/40'
                  : 'bg-white/5 border border-white/10 hover:bg-white/10'
              }`}
            >
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold text-xs flex-shrink-0 ${c.isHQ ? 'bg-nvg-orange' : 'bg-nvg-blue'}`}>
                {c.code}
              </div>
              <span className="text-sm font-medium text-white">{c.name}</span>
              {c.isHQ && <Navigation className="w-4 h-4 text-nvg-orange ml-1" />}
            </div>
          ))}
        </div>

        {/* Address pill */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2.5 flex-wrap justify-center text-center">
            <MapPin className="w-4 h-4 text-nvg-green flex-shrink-0" />
            <span className="text-sm text-white/60">Siège : Cotonou, Gbedjromèdé 16 Ampoules</span>
            <span className="text-white/20 mx-1 hidden sm:inline">·</span>
            <span className="text-sm text-nvg-orange font-medium">+229 01 90 94 52 55</span>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/zones"
            className="inline-flex items-center gap-2 text-nvg-green font-semibold hover:opacity-80 transition-opacity group"
          >
            Voir la carte complète
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>

      {/* Wave → Products (bg-nvg-light) */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 80L48 72C96 64 192 48 288 42C384 36 480 40 576 44C672 48 768 52 864 50C960 48 1056 40 1152 38C1248 36 1344 40 1392 42L1440 44V80H1392C1344 80 1248 80 1152 80C1056 80 960 80 864 80C768 80 672 80 576 80C480 80 384 80 288 80C192 80 96 80 48 80H0Z"
            fill="#f8fafc"
          />
        </svg>
      </div>
    </section>
  );
}
