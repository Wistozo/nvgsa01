import { Helmet } from 'react-helmet-async';
import Hero from '@/sections/Hero';
import Stats from '@/sections/Stats';
import About from '@/sections/About';
import Expertise from '@/sections/Expertise';
import Zones from '@/sections/Zones';
import Partners from '@/sections/Partners';
import Products from '@/sections/Products';
import Contact from '@/sections/Contact';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>New Vision Group SA — Groupe sous-régional reconnu depuis 2008</title>
        <meta name="description" content="New Vision Group SA : sacs scolaires solaires LIGHT-TC, serviettes hygiéniques, fournitures scolaires, import-export. 300+ collaborateurs, 6 pays d'Afrique de l'Ouest." />
        <link rel="canonical" href="https://www.newvisiongroupsa.bj/" />
      </Helmet>
      <Hero />
      <Stats />
      <About />
      <Expertise />
      <Zones />
      <Products />
      <Partners />
      <Contact />
    </>
  );
}
