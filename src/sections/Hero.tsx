import { useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/useTranslation';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const { t } = useTranslation();
  const navigate = useNavigate();

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleMouse = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { width, height } = section.getBoundingClientRect();
      const x = (clientX / width - 0.5) * 2;
      const y = (clientY / height - 0.5) * 2;

      if (bgRef.current) {
        bgRef.current.style.transform = `translate(${x * 10}px, ${y * 7}px) scale(1.04)`;
      }
      if (contentRef.current) {
        contentRef.current.style.transform = `translate(${x * -4}px, ${y * -3}px)`;
      }
    };

    const handleLeave = () => {
      if (bgRef.current) bgRef.current.style.transform = 'translate(0,0) scale(1.04)';
      if (contentRef.current) contentRef.current.style.transform = 'translate(0,0)';
    };

    section.addEventListener('mousemove', handleMouse);
    section.addEventListener('mouseleave', handleLeave);
    return () => {
      section.removeEventListener('mousemove', handleMouse);
      section.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="accueil"
      className="relative min-h-screen overflow-hidden bg-nvg-dark"
    >
      <div
        ref={bgRef}
        className="absolute inset-0 transition-transform duration-100 ease-out will-change-transform"
        style={{ transform: 'translate(0,0) scale(1.04)' }}
      >
        <img
          src="/hero-bg.jpg"
          alt={t.hero.imageAlt}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.92)_0%,rgba(15,23,42,0.76)_42%,rgba(15,23,42,0.34)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-nvg-dark via-nvg-dark/35 to-transparent" />
      </div>

      <div className="absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <div className="absolute right-0 top-32 hidden h-[420px] w-[420px] rounded-full bg-nvg-green/[0.08] blur-[120px] dark:block" />

      <div
        ref={contentRef}
        className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-8 pb-28 pt-32 transition-transform duration-100 ease-out will-change-transform sm:px-16 lg:px-24"
      >
        <div className="max-w-4xl">
          <div
            className="animate-slide-up mb-8"
            style={{ animationDelay: '0s', animationFillMode: 'both' }}
          >
            <span className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/80 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-nvg-green" />
              {t.hero.badge}
            </span>
          </div>

          <div
            className="animate-slide-up mb-7"
            style={{ animationDelay: '0.12s', animationFillMode: 'both' }}
          >
            <h1 className="max-w-4xl text-5xl font-extrabold leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl">
              New Vision Group SA
            </h1>
          </div>

          <div
            className="animate-slide-up mb-10"
            style={{ animationDelay: '0.24s', animationFillMode: 'both' }}
          >
            <p className="max-w-2xl text-xl leading-relaxed text-white/75 sm:text-2xl">
              {t.hero.description}
            </p>
          </div>

          <div
            className="animate-slide-up flex flex-col gap-4 sm:flex-row"
            style={{ animationDelay: '0.36s', animationFillMode: 'both' }}
          >
            <Button
              onClick={() => scrollTo('#about')}
              size="lg"
              className="group rounded-full bg-nvg-orange px-7 py-6 text-base font-semibold text-white shadow-[0_18px_45px_-18px_rgba(249,115,22,0.8)] transition-all duration-300 hover:bg-nvg-orange-light"
            >
              {t.hero.cta1}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              onClick={() => navigate('/produits')}
              variant="outline"
              size="lg"
              className="rounded-full border-2 border-white/35 bg-white/10 px-7 py-6 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-nvg-dark"
            >
              {t.hero.cta2}
            </Button>
          </div>
        </div>

        <div
          className="animate-slide-up mt-16 grid max-w-4xl gap-3 sm:grid-cols-3"
          style={{ animationDelay: '0.48s', animationFillMode: 'both' }}
        >
          {t.hero.impactStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/12 bg-white/[0.08] px-5 py-4 backdrop-blur-md"
            >
              <p className="text-2xl font-extrabold tracking-tight text-white">{stat.value}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-white/50">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => scrollTo('#about')}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-white/45 transition-colors hover:text-white/75 lg:left-auto lg:right-24 lg:translate-x-0"
        aria-label="Défiler vers la section suivante"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.24em]">{t.hero.scrollText}</span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </button>

      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#0f172a"
          />
        </svg>
      </div>
    </section>
  );
}
