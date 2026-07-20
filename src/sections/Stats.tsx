import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sun, Users, Globe, Calendar } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

// Back.out spring ease
const c1 = 1.70158;
const c3 = c1 + 1;
const backOut = (t: number) => 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);

function useTilt() {
  const ref = useRef<HTMLDivElement>(null);
  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width  - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    el.style.transform = `perspective(1200px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg)`;
  };
  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = '';
  };
  return { ref, handleMove, handleLeave };
}

function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  useEffect(() => {
    if (!inView) return;
    const duration = 900;
    let startTime: number | null = null;
    let raf: number;
    const animate = (now: number) => {
      if (!startTime) startTime = now;
      const p = Math.min((now - startTime) / duration, 1);
      setCount(Math.floor(backOut(p) * target));
      if (p < 1) raf = requestAnimationFrame(animate);
      else setCount(target);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [inView, target]);

  return (
    <span ref={ref}>
      <span aria-hidden="true">{count.toLocaleString('fr-FR')}{suffix}</span>
      <span className="sr-only">{target.toLocaleString('fr-FR')}{suffix}</span>
    </span>
  );
}

const STATS_CONFIG = [
  { icon: Sun,      value: 98867, suffix: '',  iconColor: 'text-nvg-orange',     accentColor: '#f97316', span: 'col-span-12 lg:col-span-8', large: true  },
  { icon: Users,    value: 300,   suffix: '+', iconColor: 'text-nvg-blue-light', accentColor: '#2563eb', span: 'col-span-12 lg:col-span-4', large: false },
  { icon: Globe,    value: 6,     suffix: '',  iconColor: 'text-nvg-blue-light', accentColor: '#2563eb', span: 'col-span-12 lg:col-span-4', large: false },
  { icon: Calendar, value: 2008,  suffix: '',  iconColor: 'text-nvg-orange',     accentColor: '#f97316', span: 'col-span-12 lg:col-span-8', large: true  },
];

type StatItem = (typeof STATS_CONFIG)[number] & { label: string; sub: string };

function StatCard({ stat, index }: { stat: StatItem; index: number }) {
  const { ref, handleMove, handleLeave } = useTilt();
  const Icon = stat.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8%' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={stat.span}
    >
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="group relative overflow-hidden rounded-3xl bg-white/[0.03] border border-white/[0.06] p-8 lg:p-10 h-full transition-colors duration-300 hover:border-white/[0.12] hover:bg-white/[0.05]"
        style={{ willChange: 'transform' }}
      >
        <div
          className="absolute -right-4 -bottom-4 font-black leading-none select-none pointer-events-none transition-transform duration-500 group-hover:scale-110"
          style={{
            fontSize: stat.large ? '12rem' : '8rem',
            color: `${stat.accentColor}08`,
          }}
        >
          {stat.value.toLocaleString('fr-FR')}{stat.suffix}
        </div>

        <div
          className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `linear-gradient(90deg, transparent, ${stat.accentColor}80, transparent)` }}
        />

        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
          style={{ background: `${stat.accentColor}15` }}
        >
          <Icon className={`w-6 h-6 ${stat.iconColor}`} />
        </div>

        <div
          className="font-black tracking-tighter leading-none mb-4 tabular-nums"
          style={{
            fontSize: stat.large ? 'var(--step-5)' : 'var(--step-4)',
            color: stat.accentColor,
          }}
        >
          <Counter target={stat.value} suffix={stat.suffix} />
        </div>

        <p className="text-white font-semibold text-step-0 mb-1">{stat.label}</p>
        <p className="text-white/30 text-sm tracking-wide">{stat.sub}</p>
      </div>
    </motion.div>
  );
}

export default function Stats() {
  const { t } = useTranslation();
  const stats: StatItem[] = STATS_CONFIG.map((cfg, i) => ({ ...cfg, ...t.stats.items[i] }));

  return (
    <section className="relative py-24 bg-nvg-dark overflow-hidden">

      {/* Blobs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-nvg-blue/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-nvg-orange/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-nvg-blue/10 rounded-full blur-[90px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="inline-flex items-center gap-2 text-white/30 text-xs tracking-[0.3em] uppercase font-medium">
            <span className="w-8 h-px bg-nvg-orange/60" />
            {t.stats.eyebrow}
            <span className="w-8 h-px bg-nvg-orange/60" />
          </span>
        </motion.div>

        {/* Bento grid asymétrique */}
        <div className="bento-grid">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
