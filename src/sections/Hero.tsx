import { useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef      = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Mouse parallax
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleMouse = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { width, height }    = section.getBoundingClientRect();
      const x = (clientX / width  - 0.5) * 2;  // -1 → 1
      const y = (clientY / height - 0.5) * 2;  // -1 → 1

      if (bgRef.current) {
        bgRef.current.style.transform = `translate(${x * 18}px, ${y * 12}px) scale(1.06)`;
      }
      if (contentRef.current) {
        contentRef.current.style.transform = `translate(${x * -7}px, ${y * -5}px)`;
      }
    };

    const handleLeave = () => {
      if (bgRef.current)      bgRef.current.style.transform      = 'translate(0,0) scale(1.06)';
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
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background — parallax layer */}
      <div
        ref={bgRef}
        className="absolute inset-0 transition-transform duration-75 ease-out will-change-transform"
        style={{ transform: 'translate(0,0) scale(1.06)' }}
      >
        <img
          src="/hero-bg.jpg"
          alt="Unité de production NVG"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-nvg-dark/75 via-nvg-dark/60 to-nvg-dark/85" />
      </div>

      {/* Decorative blobs — orange, blue, green */}
      <div className="absolute top-24 right-16 w-96 h-96 bg-nvg-blue/20 rounded-full blur-3xl animate-float pointer-events-none" />
      <div
        className="absolute bottom-36 left-8 w-80 h-80 bg-nvg-orange/15 rounded-full blur-3xl animate-float pointer-events-none"
        style={{ animationDelay: '2s' }}
      />
      <div
        className="absolute top-1/3 left-4 w-72 h-72 bg-nvg-green/15 rounded-full blur-[100px] animate-float pointer-events-none"
        style={{ animationDelay: '1s' }}
      />

      {/* Dark-mode neon top glow bar */}
      <div className="hidden dark:block absolute top-0 inset-x-0 pointer-events-none z-10">
        <div className="h-px bg-gradient-to-r from-transparent via-nvg-green/70 to-transparent" />
        <div className="h-16 bg-gradient-to-b from-nvg-green/10 to-transparent" />
      </div>

      {/* Dark-mode green corner glow */}
      <div className="hidden dark:block absolute -top-10 -left-10 w-[500px] h-[280px] bg-nvg-green/[0.07] rounded-full blur-[90px] pointer-events-none" />

      {/* Main Content — parallax counter-layer */}
      <div
        ref={contentRef}
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto transition-transform duration-75 ease-out will-change-transform"
      >

        {/* Badge */}
        <div
          className="animate-slide-up mb-8"
          style={{ animationDelay: '0s', animationFillMode: 'both' }}
        >
          <span className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white/10 backdrop-blur-md text-white/90 rounded-full text-sm font-medium border border-white/20 dark:border-nvg-green/40 dark:shadow-[0_0_24px_rgba(22,163,74,0.18)] tracking-wide">
            <span className="w-2 h-2 bg-nvg-green rounded-full animate-pulse flex-shrink-0" />
            Groupe sous-régional reconnu depuis 2008
          </span>
        </div>

        {/* Title */}
        <div
          className="animate-slide-up mb-6"
          style={{ animationDelay: '0.15s', animationFillMode: 'both' }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-white">
            Bienvenue chez
            <br />
            <span className="inline-flex flex-wrap items-center justify-center gap-x-4 gap-y-3 mt-2">
              <span className="text-nvg-green">New</span> Vision
              <span className="relative inline-block">
                <span className="relative z-10 bg-nvg-orange text-white px-5 py-1.5 rounded-2xl font-extrabold">
                  Group.
                </span>
                {/* Breathing glow — animate-breathe */}
                <span className="animate-breathe absolute inset-0 bg-nvg-orange rounded-2xl blur-2xl pointer-events-none" />
              </span>
            </span>
          </h1>
        </div>

        {/* Description */}
        <div
          className="animate-slide-up mb-10"
          style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
        >
          <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Plus de{' '}
            <span className="text-white font-semibold">15 ans d'expérience</span>{' '}
            au service des communautés béninoises et africaines — production,
            fourniture et{' '}
            <span className="text-nvg-green font-semibold">innovation solaire</span>.
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          className="animate-slide-up flex flex-col sm:flex-row gap-4 justify-center"
          style={{ animationDelay: '0.45s', animationFillMode: 'both' }}
        >
          <Button
            onClick={() => scrollTo('#about')}
            size="lg"
            className="bg-nvg-orange hover:bg-nvg-orange-light text-white font-semibold px-6 py-4 sm:px-10 sm:py-6 text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            Découvrir nos initiatives
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            onClick={() => scrollTo('#contact')}
            variant="outline"
            size="lg"
            className="border-2 border-white/40 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-nvg-dark font-semibold px-6 py-4 sm:px-10 sm:py-6 text-base rounded-full transition-all duration-300"
          >
            Nous contacter
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-28 left-1/2 -translate-x-1/2 z-10 animate-bounce"
        style={{ animationDelay: '1s' }}
      >
        <button
          onClick={() => scrollTo('#about')}
          className="flex flex-col items-center gap-1 text-white/40 hover:text-white/70 transition-colors"
          aria-label="Défiler vers le bas"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase font-medium">
            Découvrir
          </span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      {/* Bottom wave */}
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
