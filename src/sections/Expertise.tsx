import { Link } from 'react-router-dom';
import { Factory, Truck, Ship, Sprout, ArrowRight } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const handleTilt = (e: React.MouseEvent<HTMLDivElement>) => {
  const el   = e.currentTarget;
  const rect = el.getBoundingClientRect();
  const x    = (e.clientX - rect.left) / rect.width  - 0.5;
  const y    = (e.clientY - rect.top)  / rect.height - 0.5;
  el.style.transform = `perspective(900px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg) translateY(-4px)`;
};

const resetTilt = (e: React.MouseEvent<HTMLDivElement>) => {
  e.currentTarget.style.transform = '';
};

const areas = [
  {
    icon: Factory,
    title: 'Production & Commercialisation',
    desc: 'Sacs solaires, tenues scolaires, serviettes hygiéniques et gels biomédicaux depuis notre unité de Lokossa.',
    color: 'from-nvg-blue to-nvg-blue-light',
    bg: 'bg-nvg-blue/10 dark:bg-nvg-blue/20',
    iconColor: 'text-nvg-blue',
    glow: 'glow-blue',
  },
  {
    icon: Truck,
    title: 'Fourniture & Installation',
    desc: "Équipements pédagogiques, informatiques et mobiliers pour organismes publics et privés à travers l'Afrique.",
    color: 'from-nvg-orange to-nvg-orange-light',
    bg: 'bg-nvg-orange/10 dark:bg-nvg-orange/20',
    iconColor: 'text-nvg-orange',
    glow: 'glow-orange',
  },
  {
    icon: Ship,
    title: 'Import-Export',
    desc: "Logistique et négoce de produits tropicaux, équipements informatiques et bureautiques sur les marchés internationaux.",
    color: 'from-nvg-green to-nvg-green-light',
    bg: 'bg-nvg-green/10 dark:bg-nvg-green/20',
    iconColor: 'text-nvg-green',
    glow: 'glow-green',
  },
  {
    icon: Sprout,
    title: 'Intrants Agricoles',
    desc: "Semences certifiées, machines et produits bio pour une agriculture durable en Afrique de l'Ouest.",
    color: 'from-nvg-blue to-nvg-green',
    bg: 'bg-nvg-blue/10 dark:bg-nvg-blue/20',
    iconColor: 'text-nvg-blue',
    glow: 'glow-blue',
  },
];

export default function Expertise() {
  const { t } = useTranslation();

  return (
    <section id="expertise" className="relative section-padding bg-white dark:bg-nvg-dark transition-colors duration-300 overflow-hidden">

      {/* Background watermark */}
      <div className="absolute -bottom-4 -left-4 text-[5rem] sm:text-[9rem] lg:text-[14rem] font-black text-nvg-dark/[0.03] dark:text-white/[0.025] leading-none select-none pointer-events-none tracking-tighter">
        EXPERTISE
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section number */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-gradient-to-l from-nvg-orange/20 dark:from-white/10 to-transparent" />
          <span className="text-4xl sm:text-7xl font-black text-nvg-orange/10 dark:text-white/5 leading-none select-none tabular-nums">02</span>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-nvg-blue/10 text-nvg-blue dark:text-nvg-blue-light rounded-full text-sm font-medium mb-4 border border-nvg-blue/20">
            {t.expertise.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-nvg-dark dark:text-white mb-5">
            {t.expertise.title}<span className="text-nvg-blue dark:text-nvg-orange">{t.expertise.titleHighlight}</span>
          </h2>
          <p className="text-lg text-nvg-gray dark:text-white/60 max-w-2xl mx-auto leading-relaxed">
            {t.expertise.description}
          </p>
        </div>

        {/* 4 compact expertise cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {areas.map((area, i) => (
            <div
              key={i}
              className={`relative glass-card border-beam ${area.glow} p-6 transition-all duration-300 group overflow-hidden`}
              style={{ willChange: 'transform' }}
              onMouseMove={handleTilt}
              onMouseLeave={resetTilt}
            >
              {/* Top accent line on hover */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${area.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className={`w-12 h-12 ${area.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <area.icon className={`w-6 h-6 ${area.iconColor}`} />
              </div>
              <h3 className="font-bold text-sm text-nvg-dark dark:text-white leading-snug mb-2">{area.title}</h3>
              <p className="text-xs text-nvg-gray dark:text-white/50 leading-relaxed">{area.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/expertises"
            className="inline-flex items-center gap-2 text-nvg-orange font-semibold hover:opacity-80 transition-opacity group"
          >
            Voir tous nos domaines
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
