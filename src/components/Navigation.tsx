import { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, Moon, Sun, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/useTranslation';
import { useTheme } from '@/context/ThemeContext';

const navLinks = [
  { label: 'Accueil',        num: '01', type: 'page',   href: '/'           },
  { label: 'À propos',       num: '02', type: 'page',   href: '/a-propos'   },
  { label: 'Nos Expertises', num: '03', type: 'page',   href: '/expertises' },
  { label: 'Zones',          num: '04', type: 'page',   href: '/zones'      },
  { label: 'Partenaires',    num: '05', type: 'anchor', href: '#partners'   },
  { label: 'Contact',        num: '06', type: 'anchor', href: '#contact'    },
];

/* ── Framer variants — définis HORS composant pour références stables ── */
const easeOut = [0.22, 1, 0.36, 1] as const;

const overlayVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.35 } },
  exit:    { opacity: 0, transition: { duration: 0.25 } },
};
const panelVariants = {
  hidden:  { x: '-6%', opacity: 0 },
  visible: { x: '0%',  opacity: 1, transition: { duration: 0.45, ease: easeOut } },
  exit:    { x: '-4%', opacity: 0, transition: { duration: 0.25 } },
};
const linkVariants = {
  hidden:  { opacity: 0, x: -32 },
  visible: (i: number) => ({
    opacity: 1, x: 0,
    transition: { delay: 0.15 + i * 0.07, duration: 0.5, ease: easeOut },
  }),
  exit: { opacity: 0, transition: { duration: 0.15 } },
};
const sideVariants = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.5, ease: easeOut } },
  exit:    { opacity: 0, transition: { duration: 0.15 } },
};

export default function Navigation() {
  const [isScrolled,      setIsScrolled]      = useState(false);
  const [isMenuOpen,      setIsMenuOpen]      = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  const { t }      = useTranslation();
  const { theme, toggleThemeWithRipple, language, toggleLanguage } = useTheme();
  const navigate   = useNavigate();
  const location   = useLocation();
  const isHome     = location.pathname === '/';

  /* ── Scroll tracking (nav + reading progress) ── */
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setReadingProgress(docH > 0 ? (window.scrollY / docH) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Close menu on route change ── */
  useEffect(() => { setIsMenuOpen(false); }, [location]);

  /* ── Body scroll lock when menu open ── */
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  /* ── Escape key closes menu ── */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsMenuOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const scrollToSection = useCallback((id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleNavClick = (link: typeof navLinks[0]) => {
    setIsMenuOpen(false);
    if (link.type === 'page') {
      navigate(link.href);
    } else {
      if (isHome) {
        scrollToSection(link.href);
      } else {
        navigate('/');
        setTimeout(() => scrollToSection(link.href), 300);
      }
    }
  };

  const handleContactClick = () => {
    setIsMenuOpen(false);
    if (isHome) {
      scrollToSection('#contact');
    } else {
      navigate('/');
      setTimeout(() => scrollToSection('#contact'), 300);
    }
  };

  return (
    <>
      {/* ── Reading progress — left-side vertical bar ── */}
      <div className="fixed left-0 top-0 bottom-0 w-[3px] z-[9996] pointer-events-none">
        <div className="absolute inset-0 bg-black/10" />
        <motion.div
          className="absolute top-0 left-0 w-full origin-top"
          style={{
            height: `${readingProgress}%`,
            background: 'linear-gradient(to bottom, #f97316, #16a34a)',
          }}
        />
      </div>

      {/* ── Floating Action Bar ── */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 bg-white dark:bg-slate-900 rounded-full shadow-lg p-3 border border-nvg-orange/20">
        <button
          onClick={toggleLanguage}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-nvg-orange text-white hover:bg-nvg-blue transition-colors font-bold text-sm"
          title={language === 'fr' ? 'Switch to English' : 'Passer au Français'}
        >
          {language.toUpperCase()}
        </button>
        <button
          onClick={(e) => toggleThemeWithRipple(e.clientX, e.clientY)}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-nvg-blue text-white hover:bg-nvg-orange transition-colors"
          title={theme === 'light' ? 'Dark mode' : 'Light mode'}
        >
          {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
        </button>
      </div>

      {/* ── Top Bar ── */}
      <div className={`fixed top-0 left-0 right-0 z-50 bg-nvg-blue text-white py-2 px-4 transition-transform duration-300 ${isScrolled ? '-translate-y-full' : 'translate-y-0'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+2290194747411" className="flex items-center gap-1 hover:text-nvg-orange transition-colors">
              <Phone className="w-3 h-3" />
              <span className="text-xs">+229 01 94 74 74 11</span>
            </a>
            <a href="mailto:info@newvisiongroupsa.bj" className="hidden sm:flex items-center gap-1 hover:text-nvg-orange transition-colors">
              <Mail className="w-3 h-3" />
              <span>info@newvisiongroupsa.bj</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-nvg-orange font-medium hidden sm:block">
              {t.nav?.capital ?? 'Capital Social : 100 000 000 FCFA'}
            </span>
            <button onClick={toggleLanguage} className="text-xs font-semibold bg-white/10 px-3 py-1 rounded hover:bg-white/20 transition-colors">
              {language.toUpperCase()}
            </button>
            <button onClick={(e) => toggleThemeWithRipple(e.clientX, e.clientY)} className="p-1 rounded hover:bg-white/10 transition-colors">
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Main Navigation (ghost → solid) ── */}
      <nav className={`fixed left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'top-0 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-nvg' : 'top-8 bg-gradient-to-b from-black/50 to-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 flex-shrink-0">
              <img src="/logos/nvg-logo.png" alt="NVG Logo" className="h-12 w-auto" />
              <div className="hidden sm:block">
                <p className={`font-bold text-lg leading-tight transition-colors ${isScrolled ? 'text-nvg-blue dark:text-white' : 'text-white'}`}>
                  NEW VISION
                </p>
                <p className="text-xs font-medium text-nvg-orange">GROUP SA</p>
              </div>
            </Link>

            {/* Desktop nav links (ghost style) */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = link.type === 'page' && location.pathname === link.href;
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link)}
                    className={`nav-underline px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'text-nvg-orange active'
                        : isScrolled
                          ? 'text-nvg-dark dark:text-white hover:text-nvg-blue dark:hover:text-nvg-orange'
                          : 'text-white hover:text-nvg-orange drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>

            {/* Desktop right: CTA + MENU toggle */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                onClick={handleContactClick}
                className="bg-gradient-to-r from-nvg-blue to-nvg-blue-light hover:from-nvg-orange hover:to-nvg-orange-light text-white font-medium px-6 transition-all duration-300"
              >
                Nous contacter
              </Button>
              <button
                onClick={() => setIsMenuOpen(true)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all duration-300 text-sm font-semibold ${
                  isScrolled
                    ? 'border-nvg-dark/20 dark:border-white/20 text-nvg-dark dark:text-white hover:border-nvg-orange hover:text-nvg-orange'
                    : 'border-white/40 text-white hover:border-nvg-orange hover:text-nvg-orange'
                }`}
                aria-label="Ouvrir le menu"
              >
                <Menu className="w-4 h-4" />
                <span className="tracking-widest text-xs uppercase">Menu</span>
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-nvg-dark dark:text-white hover:bg-nvg-blue/10' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Fullscreen Menu ── */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fullscreen-menu"
            style={{ zIndex: 200 }}
          >
            {/* Background blobs */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-nvg-blue/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-nvg-orange/8 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-nvg-green/5 rounded-full blur-[100px] pointer-events-none" />

            {/* Close button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 lg:top-8 lg:right-10 z-50 w-12 h-12 flex items-center justify-center rounded-full border border-white/10 text-white/50 hover:text-white hover:border-white/30 transition-all duration-200"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Inner layout */}
            <motion.div
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative z-10 w-full flex flex-col lg:flex-row h-full"
            >
              {/* Left — Nav links */}
              <div className="flex-1 flex flex-col justify-center px-8 sm:px-16 lg:px-24 pt-24 pb-10 lg:pt-0 lg:pb-0">

                {/* Eyebrow */}
                <p className="text-[10px] uppercase tracking-[0.35em] text-white/20 font-semibold mb-8 lg:mb-12">
                  New Vision Group SA — Navigation
                </p>

                {/* Big links */}
                <nav className="space-y-1 lg:space-y-2">
                  {navLinks.map((link, i) => {
                    const isActive = link.type === 'page' && location.pathname === link.href;
                    return (
                      <motion.div
                        key={link.href}
                        custom={i}
                        variants={linkVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="group flex items-baseline gap-4 lg:gap-6"
                      >
                        <span className="text-[10px] text-white/15 font-bold tabular-nums w-6 shrink-0 group-hover:text-nvg-orange/60 transition-colors duration-200">
                          {link.num}
                        </span>
                        <button
                          onClick={() => handleNavClick(link)}
                          className={`menu-link-item text-left ${isActive ? '!text-nvg-orange' : ''}`}
                        >
                          {link.label}
                        </button>
                      </motion.div>
                    );
                  })}
                </nav>
              </div>

              {/* Right — Info panel (desktop only) */}
              <motion.div
                variants={sideVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="hidden lg:flex flex-col justify-between w-80 xl:w-96 border-l border-white/[0.06] px-10 py-24 shrink-0"
              >
                {/* Logo */}
                <div>
                  <img src="/logos/nvg-logo.png" alt="NVG" className="h-14 w-auto mb-6 opacity-90" />
                  <p className="text-white/30 text-sm leading-relaxed max-w-[220px]">
                    Groupe industriel sous-régional reconnu depuis 2008, présent dans 6 pays d'Afrique de l'Ouest.
                  </p>
                </div>

                {/* Contact */}
                <div className="space-y-4">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-semibold mb-5">
                    Nous joindre
                  </p>
                  <a href="tel:+2290194747411" className="flex items-center gap-3 text-white/40 hover:text-nvg-orange transition-colors group">
                    <Phone className="w-3.5 h-3.5 shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-sm">+229 01 94 74 74 11</span>
                  </a>
                  <a href="mailto:info@newvisiongroupsa.bj" className="flex items-center gap-3 text-white/40 hover:text-nvg-orange transition-colors group">
                    <Mail className="w-3.5 h-3.5 shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-sm">info@newvisiongroupsa.bj</span>
                  </a>
                  <div className="flex items-start gap-3 text-white/40">
                    <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                    <span className="text-sm">Cotonou, Gbedjromèdé 16 Ampoules, Bénin</span>
                  </div>
                </div>

                {/* Lang + Theme toggles */}
                <div className="flex gap-3 pt-2">
                  <button
                    onClick={toggleLanguage}
                    className="flex-1 py-2.5 rounded-xl bg-white/5 text-white/50 text-xs font-semibold hover:bg-white/10 hover:text-white transition-colors tracking-widest uppercase"
                  >
                    {language === 'fr' ? 'EN' : 'FR'}
                  </button>
                  <button
                    onClick={(e) => toggleThemeWithRipple(e.clientX, e.clientY)}
                    className="flex-1 py-2.5 rounded-xl bg-white/5 text-white/50 text-xs font-medium hover:bg-white/10 hover:text-white transition-colors flex items-center justify-center gap-2"
                  >
                    {theme === 'light' ? <><Moon className="w-3.5 h-3.5" /> Dark</> : <><Sun className="w-3.5 h-3.5" /> Light</>}
                  </button>
                </div>
              </motion.div>

              {/* Mobile bottom bar */}
              <div className="lg:hidden px-8 py-6 border-t border-white/[0.06] flex gap-3">
                <button
                  onClick={toggleLanguage}
                  className="flex-1 py-2.5 rounded-xl bg-white/5 text-white/50 text-xs font-semibold hover:bg-white/10 hover:text-white transition-colors tracking-widest uppercase"
                >
                  {language === 'fr' ? 'EN' : 'FR'}
                </button>
                <button
                  onClick={(e) => toggleThemeWithRipple(e.clientX, e.clientY)}
                  className="flex-1 py-2.5 rounded-xl bg-white/5 text-white/50 text-xs font-medium hover:bg-white/10 hover:text-white transition-colors flex items-center justify-center gap-2"
                >
                  {theme === 'light' ? <><Moon className="w-3.5 h-3.5" /> Dark</> : <><Sun className="w-3.5 h-3.5" /> Light</>}
                </button>
                <button
                  onClick={handleContactClick}
                  className="flex-1 py-2.5 rounded-xl bg-nvg-orange text-white text-xs font-semibold hover:bg-nvg-orange-light transition-colors"
                >
                  Contact
                </button>
              </div>
            </motion.div>

            {/* Watermark bottom right */}
            <div className="absolute bottom-8 right-8 lg:bottom-10 lg:right-10 text-[4rem] sm:text-[6rem] lg:text-[11rem] font-black leading-none select-none pointer-events-none text-white/[0.02] tracking-tighter">
              NVG
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
