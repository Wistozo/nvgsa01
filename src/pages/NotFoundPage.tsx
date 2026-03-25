import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search, MapPin, Zap } from 'lucide-react';

const handleTilt = (e: React.MouseEvent<HTMLDivElement>) => {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width - 0.5;
  const y = (e.clientY - rect.top) / rect.height - 0.5;
  el.style.transform = `perspective(900px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-4px)`;
};
const resetTilt = (e: React.MouseEvent<HTMLDivElement>) => {
  e.currentTarget.style.transform = '';
};

const quickLinks = [
  { label: 'Accueil',        href: '/',           icon: Home   },
  { label: 'À propos',       href: '/a-propos',   icon: Search },
  { label: 'Nos Expertises', href: '/expertises', icon: Zap    },
  { label: 'Zones',          href: '/zones',      icon: MapPin },
];

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen bg-nvg-dark flex items-center justify-center overflow-hidden">
      <Helmet>
        <title>Page introuvable — 404 | New Vision Group SA</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* ── Blobs décoratifs ── */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-nvg-orange/10 rounded-full blur-[120px] pointer-events-none animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-nvg-blue/10 rounded-full blur-[100px] pointer-events-none animate-float-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-nvg-green/8 rounded-full blur-[80px] pointer-events-none animate-float" style={{ animationDelay: '1s' }} />

      {/* ── Watermark 404 géant ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span
          className="text-[28vw] font-black leading-none tracking-tighter text-white/[0.025]"
          style={{ fontVariantNumeric: 'tabular-nums' }}
        >
          404
        </span>
      </div>

      {/* ── Noise texture ── */}
      <div className="absolute inset-0 pointer-events-none z-[1]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", opacity: 0.025 }} />

      {/* ── Contenu principal ── */}
      <div className="relative z-10 w-full max-w-2xl mx-auto px-6 text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-nvg-orange/10 border border-nvg-orange/20 rounded-full text-nvg-orange text-xs font-semibold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-nvg-orange animate-pulse" />
            Erreur 404
          </span>
        </motion.div>

        {/* Titre */}
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-extrabold text-white leading-tight mb-4"
          style={{ fontSize: 'var(--step-4)' }}
        >
          Page{' '}
          <span className="relative inline-block">
            <span className="relative z-10 bg-nvg-orange text-white px-5 py-1 rounded-2xl">
              introuvable.
            </span>
            <span className="animate-breathe absolute inset-0 bg-nvg-orange rounded-2xl blur-2xl pointer-events-none opacity-40" />
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-white/40 text-lg leading-relaxed mb-12 max-w-md mx-auto"
        >
          La page que vous cherchez n'existe pas ou a été déplacée.
          Retournez à l'accueil ou explorez nos sections.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 px-8 py-4 bg-nvg-orange hover:bg-nvg-orange-light text-white font-bold rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <Home className="w-4 h-4" />
            Retour à l'accueil
          </button>
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-8 py-4 border border-white/20 hover:border-white/40 text-white/70 hover:text-white font-medium rounded-full transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Page précédente
          </button>
        </motion.div>

        {/* Quick links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-white/20 text-xs uppercase tracking-widest mb-5 font-medium">
            Accès rapide
          </p>
          <div
            className="glass-card glow-orange p-1 inline-flex flex-wrap justify-center gap-1 rounded-2xl"
            onMouseMove={handleTilt}
            onMouseLeave={resetTilt}
            style={{ willChange: 'transform', transition: 'transform 0.3s ease' }}
          >
            {quickLinks.map((link) => {
              const Icon = link.icon;
              return (
                <button
                  key={link.href}
                  onClick={() => navigate(link.href)}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl text-white/60 hover:text-white hover:bg-white/[0.07] transition-all duration-200 text-sm font-medium"
                >
                  <Icon className="w-3.5 h-3.5 text-nvg-orange" />
                  {link.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Signature NVG */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-white/15 text-xs font-medium tracking-widest uppercase"
        >
          New Vision Group SA — Cotonou, Bénin
        </motion.p>

      </div>
    </section>
  );
}
