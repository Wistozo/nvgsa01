# New Vision Group SA — Site Web Officiel

Site vitrine officiel de **New Vision Group SA**, groupe industriel et commercial béninois fondé en 2008, présent dans 6 pays d'Afrique de l'Ouest.

> Développé par **Wisdom TOZO** — Technicien Informatique & Consultant Digital

---

## Aperçu

- **URL de production :** https://www.newvisiongroupsa.bj
- **Stack :** React 18 + TypeScript + Vite + Tailwind CSS
- **Design :** Dark/light mode, glassmorphism, animations Framer Motion
- **Hébergement :** cPanel 001.africa

---

## Pages

| Page | Route |
|------|-------|
| Accueil | `/` |
| À propos | `/a-propos` |
| Nos Expertises | `/expertises` |
| Zones d'intervention | `/zones` |
| Produits | `/produits` |
| 404 | `*` |

---

## Stack technique

```
React 18 + TypeScript (strict)
Vite 7
Tailwind CSS (palette NVG custom)
Framer Motion 12 (animations scroll-based)
Lenis (smooth scroll)
react-router-dom v6 (multi-pages)
react-helmet-async (SEO par page)
EmailJS (formulaire de contact)
lucide-react (icônes)
shadcn/ui (Button + Input)
```

---

## Installation

```bash
npm install
npm run dev
```

## Build de production

```bash
npm run build
# → génère dist/
```

## Déploiement (cPanel 001.africa)

1. Uploader le contenu de `dist/` dans `public_html/`
2. Le fichier `.htaccess` est inclus automatiquement dans le build

## Variables d'environnement

Créer un fichier `.env` à la racine (voir `.env.example`) :

```
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

---

## À propos de NVG SA

New Vision Group SA intervient dans 4 domaines :
- **Production & Commercialisation** — sacs scolaires solaires LIGHT-TC, tenues scolaires, serviettes hygiéniques, gels biomédicaux
- **Fourniture & Installation** — équipements pédagogiques et institutionnels
- **Import-Export** — produits tropicaux, bureautique, informatique
- **Intrants Agricoles** — semences certifiées, machines, produits bio

**Chiffres clés :** 38 899 sacs produits · 631 070 serviettes distribuées · 300+ collaborateurs · 6 pays · depuis 2008

---

*Bénin · Côte d'Ivoire · Togo · Burkina Faso · Cameroun · Niger*
