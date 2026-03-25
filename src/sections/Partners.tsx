import { motion } from 'framer-motion';

const row1 = [
  { name: 'SWEDD Bénin',        logo: '/logos/swedd.png'             },
  { name: 'UNFPA',              logo: '/logos/unfpa.png'             },
  { name: 'UNICEF Bénin',       logo: '/logos/unicef.png'            },
  { name: 'Plan International', logo: '/logos/plan-international.png' },
];

const row2 = [
  { name: 'Projet WOURI',       logo: '/logos/wuri.png'              },
  { name: 'SoBAPS SA',          logo: '/logos/sobaps.png'            },
  { name: 'Mairie de Cotonou',  logo: '/logos/mairie-cotonou.png'    },
  { name: 'République du Bénin',logo: '/logos/benin.png'             },
];

function LogoCard({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="w-40 sm:w-48 lg:w-52 flex-shrink-0 glass-card px-4 sm:px-6 py-5 flex flex-col items-center gap-3 grayscale hover:grayscale-0 transition-all duration-500 cursor-default group">
      <div className="h-14 flex items-center justify-center">
        <img
          src={logo}
          alt={name}
          className="max-h-full max-w-[120px] object-contain"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = 'none';
          }}
        />
      </div>
      <span className="text-xs font-medium text-nvg-gray dark:text-white/50 text-center leading-snug group-hover:text-nvg-blue dark:group-hover:text-nvg-orange transition-colors">
        {name}
      </span>
    </div>
  );
}

export default function Partners() {
  return (
    <section id="partners" className="relative py-20 bg-white dark:bg-nvg-dark transition-colors duration-300 overflow-hidden">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 px-4"
      >
        <span className="inline-flex items-center gap-2 text-white/30 dark:text-nvg-gray/60 text-xs tracking-[0.3em] uppercase font-medium mb-4">
          <span className="w-8 h-px bg-nvg-orange/40 inline-block" />
          <span className="text-nvg-gray dark:text-white/30">Ils nous font confiance</span>
          <span className="w-8 h-px bg-nvg-orange/40 inline-block" />
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-nvg-dark dark:text-white">
          Nos <span className="text-nvg-orange">Partenaires</span>
        </h2>
      </motion.div>

      {/* Marquee row 1 → */}
      <div className="relative mb-4 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-nvg-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-nvg-dark to-transparent z-10 pointer-events-none" />
        <div className="flex gap-4 w-max animate-marquee">
          {[...row1, ...row1, ...row1].map((p, i) => (
            <LogoCard key={i} {...p} />
          ))}
        </div>
      </div>

      {/* Marquee row 2 ← */}
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-nvg-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-nvg-dark to-transparent z-10 pointer-events-none" />
        <div className="flex gap-4 w-max animate-marquee-reverse">
          {[...row2, ...row2, ...row2].map((p, i) => (
            <LogoCard key={i} {...p} />
          ))}
        </div>
      </div>

    </section>
  );
}
