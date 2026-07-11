import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { flushSync } from 'react-dom';

type Theme = 'light' | 'dark';
type Language = 'fr' | 'en';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  toggleThemeWithRipple: (x: number, y: number) => void;
  language: Language;
  toggleLanguage: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Toujours démarrer avec la préférence système — pas de localStorage
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'light';
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // Suit les changements système en temps réel (si pas d'override manuel en cours)
  const [isManualOverride, setIsManualOverride] = useState(false);

  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('nvg-language') as Language;
      return saved || 'fr';
    }
    return 'fr';
  });

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => {
      if (!isManualOverride) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [isManualOverride]);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('nvg-language', language);
  }, [language]);

  const toggleTheme = () => {
    setIsManualOverride(true);
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const toggleThemeWithRipple = (x: number, y: number) => {
    document.documentElement.style.setProperty('--ripple-x', `${x}px`);
    document.documentElement.style.setProperty('--ripple-y', `${y}px`);
    setIsManualOverride(true);
    if (!('startViewTransition' in document)) {
      setTheme(prev => prev === 'light' ? 'dark' : 'light');
      return;
    }
    (document as Document & { startViewTransition: (cb: () => void) => void })
      .startViewTransition(() => {
        flushSync(() => {
          setTheme(prev => prev === 'light' ? 'dark' : 'light');
        });
      });
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'fr' ? 'en' : 'fr');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, toggleThemeWithRipple, language, toggleLanguage }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
