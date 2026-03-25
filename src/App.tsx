import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import Navigation   from './components/Navigation';
import Footer        from './sections/Footer';
import HomePage      from './pages/HomePage';
import ExpertisePage from './pages/ExpertisePage';
import AboutPage     from './pages/AboutPage';
import ZonesPage     from './pages/ZonesPage';
import ProduitsPage  from './pages/ProduitsPage';
import NotFoundPage  from './pages/NotFoundPage';

/** Scroll to top on route change — skip if URL has a hash anchor */
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      // Let the browser settle the new page, then scroll to the anchor
      setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);
  return null;
}

/** Lenis smooth scroll — lives inside BrowserRouter so it can use hooks */
function LenisProvider() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    let raf: number;
    const tick = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <LenisProvider />
      <ScrollToTop />
<div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <Navigation />
        <main>
          <Routes>
            <Route path="/"           element={<HomePage />} />
            <Route path="/a-propos"   element={<AboutPage />} />
            <Route path="/expertises" element={<ExpertisePage />} />
            <Route path="/zones"      element={<ZonesPage />} />
            <Route path="/produits"   element={<ProduitsPage />} />
            <Route path="*"           element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
