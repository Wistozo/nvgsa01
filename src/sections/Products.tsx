import { Link } from 'react-router-dom';
import { Sun, Shirt, Heart, FlaskConical, BookOpen, GraduationCap, ArrowRight } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const ITEMS_CONFIG = [
  { icon: Sun,          bg: 'bg-nvg-orange/10 dark:bg-nvg-orange/15', text: 'text-nvg-orange dark:text-nvg-orange-light',  iconBg: 'bg-nvg-orange/15 dark:bg-nvg-orange/20' },
  { icon: Shirt,        bg: 'bg-nvg-blue/10 dark:bg-nvg-blue/15',     text: 'text-nvg-blue dark:text-nvg-blue-light',       iconBg: 'bg-nvg-blue/15 dark:bg-nvg-blue/25' },
  { icon: Heart,        bg: 'bg-nvg-orange/10 dark:bg-nvg-orange/15', text: 'text-nvg-orange dark:text-nvg-orange-light',   iconBg: 'bg-nvg-orange/15 dark:bg-nvg-orange/20' },
  { icon: FlaskConical, bg: 'bg-nvg-green/10 dark:bg-nvg-green/15',   text: 'text-nvg-green dark:text-nvg-green-light',    iconBg: 'bg-nvg-green/15 dark:bg-nvg-green/20' },
  { icon: BookOpen,     bg: 'bg-nvg-blue/10 dark:bg-nvg-blue/15',     text: 'text-nvg-blue dark:text-nvg-blue-light',       iconBg: 'bg-nvg-blue/15 dark:bg-nvg-blue/25' },
  { icon: GraduationCap,bg: 'bg-nvg-green/10 dark:bg-nvg-green/15',   text: 'text-nvg-green dark:text-nvg-green-light',    iconBg: 'bg-nvg-green/15 dark:bg-nvg-green/20' },
];

const PILLS_COLORS = [
  'bg-nvg-orange/10 text-nvg-orange border-nvg-orange/20',
  'bg-nvg-green/10  text-nvg-green  border-nvg-green/20',
  'bg-nvg-blue/10   text-nvg-blue-light border-nvg-blue/20',
];

export default function Products() {
  const { t } = useTranslation();

  const items = ITEMS_CONFIG.map((cfg, i) => ({ ...cfg, ...t.products.items[i] }));
  const pills = t.products.pills.map((label, i) => ({ label, color: PILLS_COLORS[i] }));

  return (
    <section className="relative section-padding bg-nvg-light dark:bg-nvg-dark transition-colors duration-300 overflow-hidden">

      <div className="absolute -bottom-8 -left-6 text-[5rem] sm:text-[8rem] lg:text-[12rem] font-black text-nvg-dark/[0.025] dark:text-white/[0.02] leading-none select-none pointer-events-none tracking-tighter">
        NVG
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="mb-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <span className="inline-block rounded-full border border-nvg-orange/20 bg-nvg-orange/10 px-4 py-2 text-sm font-medium text-nvg-orange">
              {t.products.badge}
            </span>
            <h2 className="mt-5 max-w-3xl text-3xl font-extrabold leading-tight text-nvg-dark dark:text-white sm:text-4xl lg:text-5xl">
              {t.products.title}
            </h2>
          </div>
          <div className="lg:text-right">
            <div className="mb-6 flex flex-wrap gap-3 lg:justify-end">
              {pills.map((pill) => (
                <span
                  key={pill.label}
                  className={`inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-semibold ${pill.color}`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-current opacity-60" />
                  {pill.label}
                </span>
              ))}
            </div>
            <Link
              to="/produits"
              className="inline-flex items-center gap-2 font-semibold text-nvg-orange transition-opacity hover:opacity-80 group"
            >
              {t.products.cta}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                className={`${item.bg} ${item.text} group relative flex min-h-[158px] cursor-default flex-col justify-between overflow-hidden rounded-2xl border border-black/5 p-5 shadow-[0_18px_50px_-35px_rgba(15,23,42,0.55)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-38px_rgba(15,23,42,0.7)] dark:border-white/10`}
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-current opacity-10" />
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
