import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Clock,
  CheckCircle,
  ArrowRight,
  Loader2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useTranslation } from '@/hooks/useTranslation';

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  as string;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  as string;

const keywords = [
  'Partenariat', 'Innovation', 'Solaire', 'Bénin',
  'LIGHT-TC', 'Développement', 'Collaboration', 'Qualité',
  'Afrique', 'Excellence', 'Impact Social', 'NVG',
];

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading]   = useState(false);
  const [error, setError]           = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: ''
  });
  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0');
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  formData.name,
          from_email: formData.email,
          phone:      formData.phone,
          subject:    formData.subject,
          message:    formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch {
      setError('Une erreur est survenue. Veuillez réessayer ou nous contacter directement.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactInfo = [
    {
      num: '01', icon: MapPin, title: t.contact.labels.address,
      lines: ['Cotonou, Gbedjromèdé 16 Ampoules', 'Bénin'],
      color: 'text-nvg-blue', dot: 'bg-nvg-blue'
    },
    {
      num: '02', icon: Phone, title: t.contact.labels.phone,
      lines: ['+229 01 94 74 74 11', '+229 01 90 94 52 55'],
      color: 'text-nvg-orange', dot: 'bg-nvg-orange'
    },
    {
      num: '03', icon: Mail, title: t.contact.labels.email,
      lines: ['info@newvisiongroupsa.bj', 's.client@newvisiongroupsa.bj'],
      color: 'text-nvg-green', dot: 'bg-nvg-green'
    },
    {
      num: '04', icon: Globe, title: t.contact.labels.web,
      lines: ['www.newvisiongroupsa.bj'],
      color: 'text-nvg-blue', dot: 'bg-nvg-blue'
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative bg-nvg-dark overflow-hidden"
    >
      {/* Wave transition depuis Partners (fond blanc) — masquée en mode nuit */}
      <div className="absolute top-0 left-0 right-0 dark:hidden" style={{ transform: 'scaleY(-1)' }}>
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 80L48 72C96 64 192 48 288 42C384 36 480 40 576 44C672 48 768 52 864 50C960 48 1056 40 1152 38C1248 36 1344 40 1392 42L1440 44V80H1392C1344 80 1248 80 1152 80C1056 80 960 80 864 80C768 80 672 80 576 80C480 80 384 80 288 80C192 80 96 80 48 80H0Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-nvg-orange/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-nvg-blue/10 rounded-full blur-[120px] pointer-events-none" />

      {/* ── Keyword Marquee Strip ── */}
      <div className="relative z-10 mt-16 mb-0 overflow-hidden border-y border-white/[0.05] py-4 select-none">
        {/* Row 1 → */}
        <div className="flex gap-6 sm:gap-12 w-max animate-marquee mb-3">
          {[...keywords, ...keywords].map((kw, i) => (
            <span
              key={i}
              className="text-white/20 text-xs font-semibold uppercase tracking-[0.2em] whitespace-nowrap flex items-center gap-8"
            >
              {kw}
              <span className="text-nvg-orange/30 text-base leading-none">✦</span>
            </span>
          ))}
        </div>
        {/* Row 2 ← */}
        <div className="flex gap-6 sm:gap-12 w-max animate-marquee-reverse">
          {[...[...keywords].reverse(), ...[...keywords].reverse()].map((kw, i) => (
            <span
              key={i}
              className="text-white/10 text-xs font-semibold uppercase tracking-[0.2em] whitespace-nowrap flex items-center gap-8"
            >
              {kw}
              <span className="text-nvg-green/20 text-base leading-none">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">

        {/* Bold Headline */}
        <div className="reveal opacity-0 text-center mb-20">
          <p className="inline-flex items-center gap-3 text-white/25 text-[10px] uppercase tracking-[0.35em] font-semibold mb-10">
            <span className="w-10 h-px bg-nvg-orange/30 inline-block" />
            Contact & Collaboration
            <span className="w-10 h-px bg-nvg-orange/30 inline-block" />
          </p>

          <h2 className="text-5xl sm:text-6xl lg:text-[5.5rem] font-extrabold text-white leading-[1.05] tracking-tight mb-6">
            Parlons de votre
            <br />
            <span className="inline-flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
              prochain
              {/* ← "Stick." style highlight */}
              <span className="relative inline-block">
                <span className="relative z-10 bg-nvg-orange text-white px-6 py-2 rounded-2xl font-extrabold">
                  Projet.
                </span>
                {/* glow */}
                <span className="absolute inset-0 bg-nvg-orange rounded-2xl blur-xl opacity-30 scale-110" />
              </span>
            </span>
          </h2>

          <p className="text-lg text-white/40 max-w-xl mx-auto mt-8 leading-relaxed">
            {t.contact.description}
          </p>
        </div>

        {/* ── Grid: coordonnées + formulaire ── */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 xl:gap-20">

          {/* Left — Coordonnées éditorialement numérotées */}
          <div className="reveal opacity-0 lg:col-span-2 lg:border-r lg:border-white/[0.06] lg:pr-8">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/25 font-semibold mb-8">
              Nos coordonnées
            </p>

            <div className="space-y-0">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <div
                    key={info.num}
                    className="group border-b border-white/[0.05] last:border-0 py-5 flex items-start gap-4 hover:border-white/10 transition-colors duration-300 cursor-default"
                  >
                    {/* num */}
                    <span className={`text-[10px] font-bold ${info.color} opacity-50 tabular-nums mt-1 shrink-0 w-5`}>
                      {info.num}
                    </span>
                    {/* icon */}
                    <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center shrink-0 group-hover:bg-white/[0.08] transition-colors duration-300">
                      <Icon className={`w-3.5 h-3.5 ${info.color}`} />
                    </div>
                    {/* text */}
                    <div className="flex-1 min-w-0">
                      <p className={`text-[10px] uppercase tracking-widest font-semibold ${info.color} opacity-60 mb-1`}>
                        {info.title}
                      </p>
                      {info.lines.map((line, i) => (
                        <p key={i} className="text-white/70 text-sm font-medium truncate">{line}</p>
                      ))}
                    </div>
                    {/* dot accent */}
                    <div className={`w-1.5 h-1.5 rounded-full ${info.dot} opacity-0 group-hover:opacity-60 transition-opacity duration-300 mt-2 shrink-0`} />
                  </div>
                );
              })}
            </div>

            {/* Business hours */}
            <div className="mt-10 pt-8 border-t border-white/[0.05]">
              <div className="flex items-center gap-2 mb-5">
                <Clock className="w-3.5 h-3.5 text-nvg-green opacity-70" />
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/25 font-semibold">
                  {t.contact.hoursTitle}
                </p>
              </div>
              <div className="space-y-3 text-sm">
                {[
                  { label: t.contact.hours.weekdays, value: '08:00–17:00', accent: false },
                  { label: t.contact.hours.saturday, value: '08:00–12:00', accent: false },
                  { label: t.contact.hours.sunday,   value: t.contact.hours.closed, accent: true },
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span className="text-white/35 text-xs">{row.label}</span>
                    <span className={`font-medium text-xs ${row.accent ? 'text-nvg-orange/60' : 'text-white/60'}`}>
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Formulaire */}
          <div
            className="reveal opacity-0 lg:col-span-3"
            style={{ animationDelay: '0.15s' }}
          >
            <div className="glow-orange bg-white/[0.03] border border-white/[0.07] rounded-3xl p-8 sm:p-10 backdrop-blur-sm">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-1">
                  {t.contact.form.title}{' '}
                  <span className="text-nvg-green">{t.contact.form.titleHighlight}</span>
                </h3>
                <p className="text-white/25 text-sm">Réponse sous 24h ouvrées.</p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 bg-nvg-green/10 border border-nvg-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-nvg-green" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{t.contact.form.success}</h4>
                  <p className="text-white/40">{t.contact.form.successDesc}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white/40 text-[10px] uppercase tracking-widest font-semibold">
                        {t.contact.form.name} *
                      </Label>
                      <Input
                        id="name" name="name" value={formData.name} onChange={handleChange}
                        placeholder={t.contact.form.name} required
                        className="bg-white/[0.05] border-white/[0.08] text-white placeholder:text-white/20 focus:border-nvg-orange/50 focus:ring-1 focus:ring-nvg-orange/20 rounded-xl h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white/40 text-[10px] uppercase tracking-widest font-semibold">
                        {t.contact.form.email} *
                      </Label>
                      <Input
                        id="email" name="email" type="email" value={formData.email} onChange={handleChange}
                        placeholder="email@example.com" required
                        className="bg-white/[0.05] border-white/[0.08] text-white placeholder:text-white/20 focus:border-nvg-orange/50 focus:ring-1 focus:ring-nvg-orange/20 rounded-xl h-11"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-white/40 text-[10px] uppercase tracking-widest font-semibold">
                        {t.contact.form.phone}
                      </Label>
                      <Input
                        id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange}
                        placeholder="+229 XX XX XX XX"
                        className="bg-white/[0.05] border-white/[0.08] text-white placeholder:text-white/20 focus:border-nvg-orange/50 focus:ring-1 focus:ring-nvg-orange/20 rounded-xl h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-white/40 text-[10px] uppercase tracking-widest font-semibold">
                        {t.contact.form.subject} *
                      </Label>
                      <Input
                        id="subject" name="subject" value={formData.subject} onChange={handleChange}
                        placeholder={t.contact.form.subject} required
                        className="bg-white/[0.05] border-white/[0.08] text-white placeholder:text-white/20 focus:border-nvg-orange/50 focus:ring-1 focus:ring-nvg-orange/20 rounded-xl h-11"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white/40 text-[10px] uppercase tracking-widest font-semibold">
                      {t.contact.form.message} *
                    </Label>
                    <Textarea
                      id="message" name="message" value={formData.message} onChange={handleChange}
                      placeholder={t.contact.form.message} required rows={5}
                      className="bg-white/[0.05] border-white/[0.08] text-white placeholder:text-white/20 focus:border-nvg-orange/50 focus:ring-1 focus:ring-nvg-orange/20 rounded-xl resize-none"
                    />
                  </div>

                  {error && (
                    <p className="text-red-400 text-sm text-center bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                      {error}
                    </p>
                  )}

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-nvg-orange hover:bg-nvg-orange-light text-white font-bold py-6 rounded-xl transition-all duration-300 group text-sm tracking-wide uppercase disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                        Envoi en cours…
                      </>
                    ) : (
                      <>
                        {t.contact.form.send}
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
