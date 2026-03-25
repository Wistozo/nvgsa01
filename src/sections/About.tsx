import { Link } from 'react-router-dom';
import { Factory, TrendingUp, Sun, ArrowRight } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const handleTilt = (e: React.MouseEvent<HTMLDivElement>) => {
  const el   = e.currentTarget;
  const rect = el.getBoundingClientRect();
  const x    = (e.clientX - rect.left) / rect.width  - 0.5;
  const y    = (e.clientY - rect.top)  / rect.height - 0.5;
  el.style.transform = `perspective(900px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-4px)`;
};

const resetTilt = (e: React.MouseEvent<HTMLDivElement>) => {
  e.currentTarget.style.transform = '';
};

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="relative section-padding bg-nvg-light dark:bg-nvg-dark transition-colors duration-300 overflow-hidden">

      {/* Background watermark */}
      <div className="absolute -top-6 -right-6 text-[5rem] sm:text-[9rem] lg:text-[14rem] font-black text-nvg-dark/[0.03] dark:text-white/[0.025] leading-none select-none pointer-events-none tracking-tighter">
        ABOUT
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section number */}
        <div className="flex items-center gap-4 mb-10">
          <span className="text-4xl sm:text-7xl font-black text-nvg-orange/10 dark:text-white/5 leading-none select-none tabular-nums">01</span>
          <div className="flex-1 h-px bg-gradient-to-r from-nvg-orange/20 dark:from-white/10 to-transparent" />
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-nvg-orange/10 text-nvg-orange rounded-full text-sm font-medium mb-4 border border-nvg-orange/20">
            {t.about.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-nvg-dark dark:text-white mb-5">
            {t.about.title} <span className="text-nvg-orange">{t.about.titleHighlight}</span>
          </h2>
          <p className="text-lg text-nvg-gray dark:text-white/60 max-w-2xl mx-auto leading-relaxed">
            {t.about.description}
          </p>
        </div>

        {/* 3 highlight cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          <div
            className="glass-card glow-orange p-6 flex items-start gap-4 transition-all duration-300"
            style={{ willChange: 'transform' }}
            onMouseMove={handleTilt}
            onMouseLeave={resetTilt}
          >
            <div className="w-14 h-14 bg-nvg-orange/10 dark:bg-nvg-orange/20 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Factory className="w-7 h-7 text-nvg-orange" />
            </div>
            <div>
              <h4 className="font-bold text-nvg-dark dark:text-white mb-1">Unité Industrielle</h4>
              <p className="text-sm text-nvg-gray dark:text-white/50 mb-3">Lokossa — Agréée Catégorie B</p>
              <div className="flex gap-4 text-sm">
                <div>
                  <span className="font-bold text-nvg-orange">500K+</span>
                  <span className="text-nvg-gray dark:text-white/40 ml-1">sacs/an</span>
                </div>
                <div>
                  <span className="font-bold text-nvg-green">150+</span>
                  <span className="text-nvg-gray dark:text-white/40 ml-1">emplois</span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="glass-card glow-green p-6 flex items-start gap-4 transition-all duration-300"
            style={{ willChange: 'transform' }}
            onMouseMove={handleTilt}
            onMouseLeave={resetTilt}
          >
            <div className="w-14 h-14 bg-nvg-green/10 dark:bg-nvg-green/20 rounded-2xl flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-7 h-7 text-nvg-green" />
            </div>
            <div>
              <h4 className="font-bold text-nvg-dark dark:text-white mb-1">Impact Social</h4>
              <p className="text-sm text-nvg-gray dark:text-white/50 mb-3">Autonomisation & éducation</p>
              <div>
                <span className="font-bold text-nvg-green">126 000+</span>
                <span className="text-nvg-gray dark:text-white/40 ml-1 text-sm">filles bénéficiaires</span>
              </div>
            </div>
          </div>

          <div
            className="glass-card glow-blue p-6 flex items-start gap-4 transition-all duration-300"
            style={{ willChange: 'transform' }}
            onMouseMove={handleTilt}
            onMouseLeave={resetTilt}
          >
            <div className="w-14 h-14 bg-nvg-blue/10 dark:bg-nvg-blue/20 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Sun className="w-7 h-7 text-nvg-blue-light" />
            </div>
            <div>
              <h4 className="font-bold text-nvg-dark dark:text-white mb-1">Innovation Solaire</h4>
              <p className="text-sm text-nvg-gray dark:text-white/50 mb-3">Technologie LIGHT-TC</p>
              <div>
                <span className="font-bold text-nvg-blue-light">38 899</span>
                <span className="text-nvg-gray dark:text-white/40 ml-1 text-sm">sacs produits</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/a-propos"
            className="inline-flex items-center gap-2 text-nvg-orange font-semibold hover:opacity-80 transition-opacity group"
          >
            En savoir plus sur NVG
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>

      {/* Wave → Expertise (light mode) */}
      <div className="absolute bottom-0 left-0 right-0 dark:hidden">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 80L48 72C96 64 192 48 288 42C384 36 480 40 576 44C672 48 768 52 864 50C960 48 1056 40 1152 38C1248 36 1344 40 1392 42L1440 44V80H1392C1344 80 1248 80 1152 80C1056 80 960 80 864 80C768 80 672 80 576 80C480 80 384 80 288 80C192 80 96 80 48 80H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
