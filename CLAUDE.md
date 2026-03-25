# NVG.SA — Master Design & Development Prompt
## Version 2.0 — État réel du projet

> Ce document est la source de vérité unique du projet. Il décrit exactement ce qui est construit.
> Toute personne qui lit ce fichier doit pouvoir reproduire le projet à l'identique.

---

## 1. CONTEXTE PROJET

**Entreprise :** New Vision Group SA (NVG) — société béninoise fondée en 2008, reconnue à l'échelle sous-régionale africaine.

**Présence :** 6 pays — Bénin (siège), Côte d'Ivoire, Togo, Burkina Faso, Cameroun, Niger.

**4 domaines d'activité :**
1. Production & Commercialisation (sacs solaires LIGHT-TC, tenues scolaires, serviettes hygiéniques, gels biomédicaux)
2. Fourniture & Installation (équipements pédagogiques, informatiques, mobiliers)
3. Import-Export (produits tropicaux, bureautique, informatique)
4. Intrants Agricoles (semences certifiées, machines, produits bio)

**Chiffres clés réels :**
- 38 899 sacs solaires LIGHT-TC produits
- 631 070 serviettes hygiéniques distribuées (projet SWEDD / ONU)
- 126 000+ filles bénéficiaires
- 300+ collaborateurs
- Capital social : 25 000 000 FCFA
- Unité industrielle agréée Catégorie B à Lokossa (Mono)

**Contacts :**
- Siège : Cotonou, Gbedjromèdé 16 Ampoules, Bénin
- Tél : +229 01 90 94 52 55 / +229 01 94 74 74 11
- Email : info@newvisiongroupsa.bj
- Horaires : Lun–Ven 8h–18h, Sam 9h–13h

---

## 2. STACK TECHNIQUE (versions exactes)

```
React 18 + TypeScript (strict) + Vite
Tailwind CSS (config étendue avec couleurs NVG custom)
react-router-dom v6         (multi-pages, BrowserRouter)
lenis ^1.3.x                (smooth scroll)
framer-motion ^12.x         (animations scroll-based + stagger reveal)
lucide-react                (icônes)
shadcn/ui                   (Button et Input uniquement)
```

**Installation :**
```bash
npm create vite@latest nvg-sa -- --template react-ts
npm install react-router-dom lenis framer-motion lucide-react
npx shadcn-ui@latest init
```

---

## 3. IDENTITÉ VISUELLE — RÈGLES ABSOLUES

### Palette de couleurs (Tailwind config étendue)
```js
// tailwind.config.js → theme.extend.colors
'nvg-dark':         '#0f172a'   // fond sombre, sections dark
'nvg-light':        '#f8fafc'   // fond clair (jamais gray-100 !)
'nvg-orange':       '#f97316'   // couleur principale, CTAs, accents
'nvg-orange-light': '#fb923c'   // hover états orange
'nvg-blue':         '#1e3a8a'   // couleur secondaire, nav, badges
'nvg-blue-light':   '#2563eb'   // variante bleue vive
'nvg-green':        '#16a34a'   // innovation solaire, impact, Bénin
'nvg-green-light':  '#22c55e'   // variante verte claire
'nvg-gray':         '#64748b'   // texte secondaire mode clair
```

### Typographie
- **Police unique :** Poppins — `@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap')`
- `font-family: 'Poppins', sans-serif` sur `body`
- H1 : `font-extrabold text-5xl sm:text-6xl lg:text-7xl tracking-tight`
- H2 sections : `font-bold text-3xl sm:text-4xl lg:text-5xl`
- Body : `text-lg leading-relaxed`
- Labels : `text-sm font-medium tracking-wide`
- Eyebrows : `text-xs tracking-[0.25em] uppercase`

**Fluid typography (CSS variables dans `:root`) :**
```css
--step-0: clamp(1rem, 0.92rem + 0.39vw, 1.25rem);
--step-1: clamp(1.25rem, 1.08rem + 0.85vw, 1.8rem);
--step-2: clamp(1.56rem, 1.26rem + 1.5vw, 2.5rem);
--step-3: clamp(1.95rem, 1.48rem + 2.35vw, 3.5rem);
--step-4: clamp(2.44rem, 1.71rem + 3.63vw, 5rem);
--step-5: clamp(3.05rem, 1.88rem + 5.86vw, 6.8rem);
```
Usage JS : `style={{ fontSize: 'var(--step-5)' }}`
Classes CSS disponibles : `.text-step-0` à `.text-step-5`

### Règles visuelles STRICTES
- ❌ Jamais `gray-100/200/300` pour les fonds → utiliser `nvg-light` ou `white`
- ❌ Jamais `rounded-md` basique → `rounded-xl`, `rounded-2xl`, `rounded-3xl`
- ❌ Jamais `shadow-sm/md` génériques → shadows colorées NVG
- ❌ Jamais boutons rectangulaires bleus Bootstrap-like
- ✅ Toujours dual-mode light/dark avec `dark:` prefix Tailwind
- ✅ Glows **uniquement en dark mode** via `.dark .glow-*`
- ✅ `transition-colors duration-300` sur tout ce qui change de mode
- ✅ Marges généreuses : `px-8 sm:px-16 lg:px-24`

---

## 4. SYSTÈME DE DESIGN COMPLET

### 4.1 Glassmorphism (CSS variables)
```css
/* :root */
--glass-bg:     rgba(255,255,255,0.7);   /* light */
--glass-border: rgba(255,255,255,0.3);
--glass-shadow: 0 8px 32px rgba(0,0,0,0.1);

/* .dark */
--glass-bg:     rgba(15,23,42,0.7);
--glass-border: rgba(255,255,255,0.1);
--glass-shadow: 0 8px 32px rgba(0,0,0,0.3);

.glass-card {
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow);
  border-radius: 1rem; /* rounded-2xl */
}
```

### 4.2 Glow coloré — DARK MODE UNIQUEMENT
```css
.dark .glow-orange {
  box-shadow: 0 0 70px -15px rgba(249,115,22,0.45), 0 8px 32px rgba(0,0,0,0.4);
  border-color: rgba(249,115,22,0.15);
}
.dark .glow-blue {
  box-shadow: 0 0 70px -15px rgba(37,99,235,0.40), 0 8px 32px rgba(0,0,0,0.4);
  border-color: rgba(37,99,235,0.15);
}
.dark .glow-green {
  box-shadow: 0 0 70px -15px rgba(22,163,74,0.40), 0 8px 32px rgba(0,0,0,0.4);
  border-color: rgba(22,163,74,0.15);
}
```
Usage : `<div className="glass-card glow-orange p-6">` — glow visible seulement en dark.

### 4.3 Border Beam (bordure lumineuse animée)
```css
@keyframes border-beam {
  from { background-position: 200% 0; }
  to   { background-position: -200% 0; }
}
.border-beam { position: relative; isolation: isolate; }
.border-beam::after {
  content: ''; position: absolute; inset: 0; border-radius: inherit; padding: 1px;
  background: linear-gradient(90deg, transparent 0%, rgba(249,115,22,0.85) 35%, rgba(37,99,235,0.85) 65%, transparent 100%);
  background-size: 300% 100%;
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: destination-out; mask-composite: exclude;
  animation: border-beam 4s linear infinite;
  pointer-events: none; z-index: 1;
}
```
Usage : `<div className="glass-card border-beam p-6">` — sur les cards Expertise.

### 4.4 Card Tilt 3D (hover)
```tsx
// Déclarer AVANT le composant (jamais inline)
const handleTilt = (e: React.MouseEvent<HTMLDivElement>) => {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width  - 0.5;
  const y = (e.clientY - rect.top)  / rect.height - 0.5;
  el.style.transform = `perspective(900px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-4px)`;
};
const resetTilt = (e: React.MouseEvent<HTMLDivElement>) => {
  e.currentTarget.style.transform = '';
};
// Usage : onMouseMove={handleTilt} onMouseLeave={resetTilt} style={{ willChange: 'transform' }}
```

### 4.5 Breathe glow (Hero "Group." pill)
```css
@keyframes breathe {
  0%, 100% { opacity: 0.35; transform: scale(1.1); }
  50%       { opacity: 0.65; transform: scale(1.25); }
}
.animate-breathe { animation: breathe 2.5s ease-in-out infinite; }
```
Appliqué sur le `<span>` absolu derrière la pill "Group." du Hero.

### 4.6 Noise texture cinématique (film grain)
```css
body::before {
  content: ''; position: fixed; inset: 0; z-index: 9997;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  opacity: 0.028; pointer-events: none; will-change: transform;
}
```

### 4.7 Texte masqué image
```css
.text-image-mask {
  -webkit-background-clip: text; background-clip: text;
  -webkit-text-fill-color: transparent; color: transparent;
  background-size: cover; background-position: center;
}
```
Usage : `<h1 className="text-image-mask" style={{ backgroundImage: 'url(/hero-bg.jpg)' }}>`

### 4.8 Bento grid asymétrique (Stats)
```css
.bento-grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: 1.25rem; }
```
Layout : `col-span-8` | `col-span-4` puis `col-span-4` | `col-span-8` → 2 rangées asymétriques.

### 4.9 Nav underline draw
```css
.nav-underline { position: relative; }
.nav-underline::after {
  content: ''; position: absolute; bottom: -2px; left: 0;
  width: 100%; height: 2px; background: #f97316;
  transform: scaleX(0); transform-origin: left center;
  transition: transform 0.3s cubic-bezier(.22,1,.36,1); border-radius: 2px;
}
.nav-underline:hover::after, .nav-underline.active::after { transform: scaleX(1); }
```

### 4.10 Toutes les animations CSS disponibles
```
animate-float        : translateY 0→-20px, 6s ease-in-out infinite
animate-float-slow   : translateY + rotate, 9s
animate-float-rotate : translateY + rotate + scale, 7s
animate-float-spin   : translateY + rotate 360, 12s linear
animate-drift        : translate + rotate combinés, 8s
animate-breathe      : opacity 0.35→0.65 + scale 1.1→1.25, 2.5s
animate-marquee      : translateX 0→-50%, 30s linear (pause au hover)
animate-marquee-reverse : inverse
animate-slide-up     : opacity 0 + translateY 30px → visible, 0.6s
animate-slide-left   : translateX -48px → 0, 0.65s
animate-slide-right  : translateX +48px → 0, 0.65s
animate-fade-scale   : opacity 0 + scale 0.94 → visible, 0.55s
animate-text-shimmer : gradient text animé 5s linear
animate-pulse-glow   : box-shadow blue→orange, 3s
```

### 4.11 Éléments décoratifs récurrents

**Blobs de fond :**
```tsx
<div className="absolute top-24 right-16 w-96 h-96 bg-nvg-blue/20 rounded-full blur-3xl animate-float pointer-events-none" />
<div className="absolute bottom-36 left-8 w-80 h-80 bg-nvg-orange/15 rounded-full blur-3xl animate-float pointer-events-none" style={{ animationDelay: '2s' }} />
<div className="absolute top-1/3 left-4 w-72 h-72 bg-nvg-green/15 rounded-full blur-[100px] animate-float pointer-events-none" style={{ animationDelay: '1s' }} />
```

**Watermark typographique :**
```tsx
<div className="absolute -top-6 -right-6 text-[14rem] font-black text-nvg-dark/[0.03] dark:text-white/[0.025] leading-none select-none pointer-events-none tracking-tighter">
  ABOUT {/* EXPERTISE | ZONES | NVG selon la section */}
</div>
```

**Numéro de section :**
```tsx
{/* Numéro à gauche */}
<div className="flex items-center gap-4 mb-10">
  <span className="text-7xl font-black text-nvg-orange/10 dark:text-white/5 leading-none select-none tabular-nums">01</span>
  <div className="flex-1 h-px bg-gradient-to-r from-nvg-orange/20 dark:from-white/10 to-transparent" />
</div>
{/* Numéro à droite (Expertise) : inverser l'ordre du flex */}
```

**Badge de section :**
```tsx
<span className="inline-block px-4 py-2 bg-nvg-orange/10 text-nvg-orange rounded-full text-sm font-medium mb-4 border border-nvg-orange/20">
  Texte badge
</span>
{/* Couleur : orange (About), blue (Expertise), green (Zones/Impact) */}
```

**Vague SVG de transition :**
```tsx
<svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
  <path d="M0 80L48 72C96 64 192 48 288 42C384 36 480 40 576 44C672 48 768 52 864 50C960 48 1056 40 1152 38C1248 36 1344 40 1392 42L1440 44V80H..." fill="#0f172a" />
  {/* fill = couleur de fond de la section SUIVANTE */}
</svg>
```

---

## 5. EFFETS GLOBAUX

### 5.1 Lenis Smooth Scroll (dans `App.tsx`)
```tsx
// Composant LenisProvider (inside BrowserRouter, retourne null)
import Lenis from 'lenis';
const lenis = new Lenis({
  duration: 1.2,
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});
// RAF : lenis.raf(time) → requestAnimationFrame(tick)
// Cleanup : cancelAnimationFrame + lenis.destroy()
// IMPORTANT : supprimer scroll-behavior: smooth de html (géré par Lenis)
```

### 5.2 ScrollToTop (dans `App.tsx`)
```tsx
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}
```

### 5.3 Custom Cursor (`src/components/CustomCursor.tsx`)
- Rendu seulement si `window.matchMedia('(pointer: fine)').matches`
- **Dot** `w-3 h-3 bg-nvg-orange rounded-full` : position `fixed top-0 left-0`, `transform: translate(x,y)` direct (snap)
- **Ring** `w-9 h-9 border-2 border-nvg-orange rounded-full` : lerp 11% par frame via RAF
- Les deux : `mix-blend-mode: difference`, `z-index: 9999`, `will-change: transform`
- CSS : `@media (pointer: fine) { * { cursor: none !important; } }`

### 5.4 Framer Motion — pattern global
```tsx
// Reveal whileInView standard
<motion.div
  initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
  viewport={{ once: true, margin: '-5%' }}
  transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
>
```

### 5.5 Stats counter — Back.out spring ease
```tsx
const c1 = 1.70158;
const c3 = c1 + 1;
const backOut = (t: number) => 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
// Durée 2200ms, déclenché par useInView(ref, { once: true })
// → overshoot ~10% puis settle sur la valeur cible
```

---

## 6. STRUCTURE DES FICHIERS

```
src/
├── App.tsx                    # BrowserRouter + LenisProvider + ScrollToTop + CustomCursor + Routes
├── index.css                  # Tout le CSS : fluid type, noise, keyframes, utilities, glass, glow, beam, cursor
├── main.tsx                   # React DOM render + ThemeContext provider
│
├── components/
│   ├── Navigation.tsx          # Top bar + nav principale + floating action bar
│   ├── CustomCursor.tsx        # Curseur orange (pointer:fine uniquement)
│   └── ui/
│       ├── button.tsx          # shadcn Button
│       └── input.tsx           # shadcn Input
│
├── sections/                   # TEASERS home — légers, sans IntersectionObserver
│   ├── Hero.tsx                # Plein écran, parallaxe souris, breathe glow
│   ├── Stats.tsx               # Bento 12-col, framer-motion, tilt, spring counter
│   ├── About.tsx               # 3 highlight cards + CTA → /a-propos
│   ├── Expertise.tsx           # 4 compact cards border-beam + tilt + CTA → /expertises
│   ├── Zones.tsx               # 6 chips pays + pill adresse + CTA → /zones
│   ├── Products.tsx            # 6 pastel cards Awake-style + pills + CTA → /produits
│   ├── Partners.tsx            # Marquee logos double rangée
│   ├── Contact.tsx             # Form + coordonnées
│   └── Footer.tsx              # Footer
│
├── pages/                      # PAGES DÉDIÉES — contenu riche complet
│   ├── HomePage.tsx            # Wrapper : importe et rend toutes les sections home
│   ├── AboutPage.tsx           # Timeline 6 jalons + mission/vision + valeurs + engagements
│   ├── ExpertisePage.tsx       # 4 domaines détaillés + showcase produits + CTA
│   ├── ZonesPage.tsx           # 6 pays avec détails + 2 office cards
│   └── ProduitsPage.tsx        # Catalogue filtrable (6 catégories, 8 produits)
│
├── hooks/
│   └── useTranslation.ts       # Bilingue FR/EN
│
└── context/
    └── ThemeContext.tsx         # dark/light + localStorage persistant
```

---

## 7. NAVIGATION (`src/components/Navigation.tsx`)

### 3 éléments fixes
1. **Top bar** bleue (`bg-nvg-blue`), disparaît au scroll (`-translate-y-full`) : téléphone + email + capital + lang/theme
2. **Nav principale** : transparente → `bg-white/95 dark:bg-slate-950/95 backdrop-blur-md` quand `scrollY > 50`
3. **Floating action bar** (bas droite `fixed bottom-6 right-6 z-40`) : bouton langue `bg-nvg-orange` + bouton thème `bg-nvg-blue`

### navLinks array
```tsx
{ label: 'Accueil',        type: 'page',   href: '/'           }
{ label: 'À propos',       type: 'page',   href: '/a-propos'   }
{ label: 'Nos Expertises', type: 'page',   href: '/expertises' }
{ label: 'Zones',          type: 'page',   href: '/zones'      }
{ label: 'Partenaires',    type: 'anchor', href: '#partners'   }
{ label: 'Contact',        type: 'anchor', href: '#contact'    }
```

### Comportement smart des liens
```tsx
// type: 'page'   → navigate(href)
// type: 'anchor' + isHome  → scrollIntoView(href)
// type: 'anchor' + !isHome → navigate('/'); setTimeout(() => scrollToSection(href), 300)
```

### Active state
`isActive = link.type === 'page' && location.pathname === link.href`
→ classe `text-nvg-orange active` sur le bouton (active déclenche le `.nav-underline::after` scaleX 1)

---

## 8. SECTIONS HOME (TEASERS LÉGERS)

### HERO (`src/sections/Hero.tsx`)
- **Image :** `/hero-bg.jpg` — placer dans `/public/hero-bg.jpg`
- **Logo :** `/logos/nvg-logo.png` — placer dans `/public/logos/nvg-logo.png`
- **Fond :** `bg-gradient-to-b from-nvg-dark/75 via-nvg-dark/60 to-nvg-dark/85` sur l'image
- **Mouse parallax :**
  - `bgRef` (image + overlay) : `translate(x*18px, y*12px) scale(1.06)` — vers le curseur
  - `contentRef` (texte) : `translate(x*-7px, y*-5px)` — sens opposé
  - `transition: 'duration-75 ease-out'`, `willChange: 'transform'` sur les deux
- **Dark mode extras :**
  - Barre néon verte haut : `hidden dark:block h-px bg-gradient-to-r via-nvg-green/70` + halo 16px
  - Coin glow : `hidden dark:block absolute -top-10 -left-10 w-[500px] h-[280px] bg-nvg-green/[0.07] blur-[90px]`
- **Badge :** dot vert `animate-pulse` + "Groupe sous-régional reconnu depuis 2008" + `dark:border-nvg-green/40`
- **H1 :** "Bienvenue chez / [New (nvg-green)] Vision [Group. (pill orange + breathe glow)]"
- **Pill "Group." :** `bg-nvg-orange text-white px-5 py-1.5 rounded-2xl` + `<span className="animate-breathe absolute inset-0 bg-nvg-orange rounded-2xl blur-2xl pointer-events-none" />`
- **Description :** "15 ans d'expérience" + "innovation solaire" en `text-nvg-green font-semibold`
- **CTAs :** "Découvrir nos initiatives" (`bg-nvg-orange rounded-full`) + "Nous contacter" (outline blanc)
- **Scroll indicator :** `ChevronDown animate-bounce` + "Découvrir" xs
- **Vague bas :** `fill="#0f172a"` (Stats = bg-nvg-dark)

---

### STATS (`src/sections/Stats.tsx`)
- **Fond :** `bg-nvg-dark py-24`, marges `px-8 sm:px-16 lg:px-24`
- **Framer-motion :** `initial={{ opacity:0, y:40, filter:'blur(10px)' }}` → whileInView, stagger `delay: i*0.1`
- **Bento 12-col :**

| # | Stat | col-span | Accent |
|---|------|----------|--------|
| 1 | 38 899 Sacs solaires | lg:col-span-8 | `#f97316` |
| 2 | 300+ Collaborateurs | lg:col-span-4 | `#16a34a` |
| 3 | 6 Pays couverts | lg:col-span-4 | `#2563eb` |
| 4 | 2008 Fondation | lg:col-span-8 | `#16a34a` |

- **Card anatomy :** `bg-white/[0.03] border border-white/[0.06] rounded-3xl p-8 lg:p-10`
  - Tilt 3D sur `mousemove` (perspective 800px, ±10deg)
  - Giant bg number absolu en bas droite : `fontSize: large?'12rem':'8rem'`, `color: accentColor+'08'`
  - Top accent line : gradient horizontal, `opacity-0 group-hover:opacity-100`
  - Icon `w-12 h-12 rounded-2xl` avec `background: accentColor+'15'`
  - Number : `font-black tracking-tighter` + `fontSize: var(--step-5)` (large) ou `var(--step-4)` + couleur accent
  - Sub-label : `text-white/30 text-sm tracking-wide`
- **Counter :** Back.out spring, 2200ms, `useInView` framer-motion

---

### ABOUT teaser (`src/sections/About.tsx`)
- **Fond :** `bg-nvg-light dark:bg-nvg-dark`
- Numéro `01` + badge orange + H2 + description (2 lignes)
- **3 highlight cards** (sm:grid-cols-3, `glass-card + glow + tilt`) :
  ```
  glow-orange → Factory    → Unité Industrielle    → 500K+ sacs/an, 150+ emplois
  glow-green  → TrendingUp → Impact Social         → 126 000+ filles bénéficiaires
  glow-blue   → Sun        → Innovation Solaire    → 38 899 sacs LIGHT-TC
  ```
- **CTA :** `<Link to="/a-propos" className="text-nvg-orange">En savoir plus sur NVG <ArrowRight /></Link>`
- **Vague bas** (light only) : `fill="white"` → Expertise

---

### EXPERTISE teaser (`src/sections/Expertise.tsx`)
- **Fond :** `bg-white dark:bg-nvg-dark`
- Numéro `02` (flex-row inversé → numéro à droite) + badge bleu + H2 + description
- **4 compact cards** (sm:grid-cols-2 lg:grid-cols-4, `glass-card border-beam [glow] + tilt`) :
  ```
  glow-blue   → Factory → Production & Commercialisation : sacs, tenues, serviettes, gels
  glow-orange → Truck   → Fourniture & Installation : équipements pédago, info, mobiliers
  glow-green  → Ship    → Import-Export : produits tropicaux, bureautique, informatique
  glow-blue   → Sprout  → Intrants Agricoles : semences, machines, produits bio
  ```
  Chaque card : `absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r [color] opacity-0 group-hover:opacity-100` (accent top)
- **CTA :** `<Link to="/expertises" className="text-nvg-orange">Voir tous nos domaines <ArrowRight /></Link>`

---

### ZONES teaser (`src/sections/Zones.tsx`)
- **Fond :** `bg-nvg-dark` (toujours dark)
- Numéro `03` + badge vert + H2 + description
- **6 chips pays** (`flex flex-wrap justify-center gap-4`) :
  ```
  Bénin (BJ)      → bg-nvg-orange/15 border-2 border-nvg-orange/40 + badge bg-nvg-orange + <Navigation icon>
  Côte d'Ivoire   → bg-white/5 border border-white/10 + badge bg-nvg-blue
  Togo, Burkina, Cameroun, Niger → idem CI
  ```
- **Pill adresse :** `<MapPin text-nvg-green>` + "Siège : Cotonou, Gbedjromèdé 16 Ampoules" + `text-nvg-orange` "+229 01 90 94 52 55"
- **CTA :** `<Link to="/zones" className="text-nvg-green">Voir la carte complète <ArrowRight /></Link>`
- **Vague bas :** `fill="white"` → Partners

---

### PRODUCTS (`src/sections/Products.tsx`)
- **Fond :** `bg-nvg-light dark:bg-nvg-dark`
- Titre : "Des produits pensés pour" + 3 pills : `✦ Impact (orange)` `✦ Afrique (green)` `✦ Avenir (blue-light)`
- **6 cards pastel** (grid 2→3→6 cols, **pas de glassmorphism** — couleur pleine) :
  ```
  amber  → Sun           → Sacs solaires          (Technologie LIGHT-TC)
  blue   → Shirt         → Tenues scolaires        (Uniformes & kaki)
  rose   → Heart         → Serviettes hygiéniques  (Réutilisables & durables)
  teal   → FlaskConical  → Gels biomédicaux        (Hydro-alcooliques)
  violet → BookOpen      → Kits scolaires          (Distribution nationale)
  green  → GraduationCap → Formation pro.          (Couture & métiers)
  ```
  Card : `{bg} rounded-2xl p-5` + icon dans `{iconBg} w-10 h-10 rounded-xl` + nom + sous-titre.
- **CTA :** `<Link to="/produits" className="text-nvg-orange">Voir le catalogue complet <ArrowRight /></Link>`

---

### PARTNERS (`src/sections/Partners.tsx`)
- Fond blanc
- 2 rangées de marquee : `animate-marquee` (→) + `animate-marquee-reverse` (←), 30s, pause au hover
- Logos : glassmorphism `grayscale hover:grayscale-0 transition-all`

### CONTACT (`src/sections/Contact.tsx`)
- **Fond :** `bg-nvg-dark`
- 2 colonnes : `lg:border-r lg:border-white/[0.06]`
- Gauche : adresse, 2 tél, email, horaires (icônes MapPin/Phone/Mail/Clock)
- Droite : `glass-card glow-orange` avec Input (shadcn) x4 + Button submit

---

## 9. PAGES DÉDIÉES

### `/a-propos` (`src/pages/AboutPage.tsx`)
1. **Hero dark** : badge vert "Notre Histoire" + H1 avec `<span bg-nvg-orange rounded-xl>NVG.</span>` + back link `<ArrowLeft>`
2. **Stats grid** 6 items dark : 38 899 / 300+ / 6 / 2008 / 500K+ / 126K+
3. **Mission** (`glass-card glow-green`) + **Vision** (`glass-card glow-orange`) en 2 colonnes
4. **Timeline verticale** 6 jalons (alternance gauche/droite, ligne centrale) :
   - 2008 (orange) : Fondation de NVG — Cotonou, fourniture institutionnelle
   - 2012 (bleu) : Expansion régionale — CI + Togo, import-export
   - 2015 (vert) : Lancement production — Unité Lokossa, sacs + tenues
   - 2018 (orange) : Innovation LIGHT-TC — sacs solaires révolutionnaires
   - 2021 (bleu) : Projet SWEDD ONU — 631 000+ serviettes hygiéniques
   - 2024 (vert) : 300+ collab, 6 pays, Catégorie B, leader sous-régional
5. **Valeurs** 4 cards (`glass-card glow + tilt`) :
   - Excellence (Target, glow-blue) / Transparence (Eye, glow-orange) / Impact Social (Heart, glow-green) / Responsabilité (Shield, glow-blue)
6. **Engagements** : banner `bg-gradient-to-r from-nvg-dark via-nvg-blue to-nvg-blue-light` 4 items :
   - Autonomisation (Users) / Développement (TrendingUp) / Environnement (Leaf) / Qualité & Certification (Award)

---

### `/expertises` (`src/pages/ExpertisePage.tsx`)
- 4 sections alternées gauche/droite (texte + card stats) par domaine
- Section "Nos produits phares" (fond dark, cards produits)
- Banner CTA gradient

### `/zones` (`src/pages/ZonesPage.tsx`)
- **Fond toujours dark**
- 6 country cards avec : name, code, capital, role, details, phone, email, address
- **Bénin** `isHQ:true` → `border-nvg-orange bg-nvg-orange/10`, badge `bg-nvg-orange`
- Autres → `border-white/10 bg-white/5`, badge `bg-nvg-blue`
- 2 office cards : Siège Cotonou + Unité Industrielle Lokossa (contacts complets)

### `/produits` (`src/pages/ProduitsPage.tsx`)
- `useState<string>('Tous')` pour filtre actif
- 6 boutons filtres : Tous | Solaire | Textile | Hygiène | Scolaire | Agricole
- 8 product cards Awake-style filtrables : `products.filter(p => active === 'Tous' || p.category === active)`
- Card : bg pastel + icône + nom + description + specs (liste) + stat chiffre + badge catégorie

---

## 10. RÈGLES DE CODE

```typescript
// TypeScript strict — jamais de `any`
// Event props : React.MouseEvent<HTMLDivElement> explicitement typé
// handleTilt / resetTilt : déclarés AVANT le composant (jamais inline)
// willChange: 'transform' : toujours en style inline sur éléments avec tilt ou parallaxe
// Link (react-router-dom) : TOUTES les navigations internes
// <a href> : uniquement pour liens externes (tel:, mailto:, https externe)
// Sections home : PAS de IntersectionObserver (utiliser framer-motion whileInView)
// Pages dédiées : framer-motion whileInView avec once:true
// Imports lucide-react : uniquement icônes confirmées comme existantes :
//   Factory | Truck | Ship | Sprout | Sun | Globe | Users | Calendar
//   Target | Eye | Heart | Shield | TrendingUp | Leaf | Award
//   MapPin | Navigation | Phone | Mail | Moon | Menu | X | ChevronDown
//   ArrowRight | ArrowLeft | Shirt | FlaskConical | BookOpen | GraduationCap
//   Laptop | Check | Star | Building | Zap
```

---

## 11. DÉPLOIEMENT

**Build de production :**
```bash
npm run build
# → génère dist/
```

**Hébergement mutualisé cPanel (001.africa) :**
1. Uploader le contenu de `dist/` dans `public_html/` (File Manager ou FTP)
2. Créer `public_html/.htaccess` :
```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QL]
```
Ce `.htaccess` est **obligatoire** : sans lui, les routes `/a-propos`, `/expertises`, `/zones`, `/produits` retournent 404.

---

## 12. CE QUE CE SITE EST / N'EST PAS

**N'est pas :**
- ❌ Site corporate générique header bleu + footer gris
- ❌ Template Bootstrap / Material UI
- ❌ Entièrement en dark (dual mode obligatoire)
- ❌ Gradients arc-en-ciel ou néons excessifs
- ❌ Cards génériques `shadow-sm rounded-md`

**Est :**
- ✅ Plateforme d'impact premium africaine — standard Awwwards/Dribbble
- ✅ Sobre et aéré en mode clair, puissant et profond en mode sombre
- ✅ Chaque effet a une raison : parallaxe = profondeur, breathe = vie, beam = technologie, noise = matière industrielle
- ✅ Architecture multi-pages propre : home = vitrine légère de teasers, pages dédiées = contenu riche
- ✅ Typographie fluide (clamp) qui s'adapte sans breakpoints rigides
- ✅ Accessible : pas d'animations sur `@media (prefers-reduced-motion)` à implémenter si nécessaire
