import { Link } from 'react-router-dom';
import { Sun, Shirt, Heart, FlaskConical, BookOpen, GraduationCap, ArrowRight } from 'lucide-react';

const items = [
  {
    icon: Sun,
    name: 'Sacs solaires',
    sub: 'Technologie LIGHT-TC',
    bg: 'bg-amber-100 dark:bg-amber-500/10',
    text: 'text-amber-800 dark:text-amber-300',
    iconBg: 'bg-amber-200/70 dark:bg-amber-500/20',
  },
  {
    icon: Shirt,
    name: 'Tenues scolaires',
    sub: 'Uniformes & kaki',
    bg: 'bg-blue-100 dark:bg-blue-500/10',
    text: 'text-blue-800 dark:text-blue-300',
    iconBg: 'bg-blue-200/70 dark:bg-blue-500/20',
  },
  {
    icon: Heart,
    name: 'Serviettes hygiéniques',
    sub: 'Réutilisables & durables',
    bg: 'bg-rose-100 dark:bg-rose-500/10',
    text: 'text-rose-800 dark:text-rose-300',
    iconBg: 'bg-rose-200/70 dark:bg-rose-500/20',
  },
  {
    icon: FlaskConical,
    name: 'Gels biomédicaux',
    sub: 'Hydro-alcooliques',
    bg: 'bg-teal-100 dark:bg-teal-500/10',
    text: 'text-teal-800 dark:text-teal-300',
    iconBg: 'bg-teal-200/70 dark:bg-teal-500/20',
  },
  {
    icon: BookOpen,
    name: 'Kits scolaires',
    sub: 'Distribution nationale',
    bg: 'bg-violet-100 dark:bg-violet-500/10',
    text: 'text-violet-800 dark:text-violet-300',
    iconBg: 'bg-violet-200/70 dark:bg-violet-500/20',
  },
  {
    icon: GraduationCap,
    name: 'Formation pro.',
    sub: 'Couture & métiers',
    bg: 'bg-green-100 dark:bg-green-500/10',
    text: 'text-green-800 dark:text-green-300',
    iconBg: 'bg-green-200/70 dark:bg-green-500/20',
  },
];

const pills = [
  { label: 'Impact',    color: 'bg-nvg-orange/10 text-nvg-orange border-nvg-orange/20' },
  { label: 'Afrique',   color: 'bg-nvg-green/10  text-nvg-green  border-nvg-green/20'  },
  { label: 'Avenir',    color: 'bg-nvg-blue/10   text-nvg-blue-light border-nvg-blue/20'  },
];

export default function Products() {
  return (
    <section className="relative section-padding bg-nvg-light dark:bg-nvg-dark transition-colors duration-300 overflow-hidden">

      {/* Subtle background watermark */}
      <div className="absolute -bottom-8 -left-6 text-[5rem] sm:text-[8rem] lg:text-[12rem] font-black text-nvg-dark/[0.025] dark:text-white/[0.02] leading-none select-none pointer-events-none tracking-tighter">
        NVG
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header — Awake style: bold text + inline pills */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-nvg-dark dark:text-white leading-tight mb-5">
            Des produits pensés pour
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            {pills.map((pill) => (
              <span
                key={pill.label}
                className={`inline-flex items-center gap-1.5 px-5 py-2 rounded-full border text-sm font-semibold ${pill.color}`}
              >
                <span className="text-[10px] opacity-60">✦</span>
                {pill.label}
              </span>
            ))}
          </div>
          <Link
            to="/produits"
            className="inline-flex items-center gap-2 text-nvg-orange font-semibold hover:opacity-80 transition-opacity group"
          >
            Voir le catalogue complet
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Product cards grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                className={`${item.bg} rounded-2xl p-5 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-300 cursor-default`}
              >
                <div className={`w-10 h-10 ${item.iconBg} rounded-xl flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 ${item.text}`} />
                </div>
                <div>
                  <p className={`font-semibold text-sm leading-snug ${item.text}`}>{item.name}</p>
                  <p className={`text-xs mt-0.5 opacity-60 ${item.text}`}>{item.sub}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
