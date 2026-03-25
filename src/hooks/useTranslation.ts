import { useTheme } from '@/context/ThemeContext';
import { translations } from '@/i18n/translations';

export function useTranslation() {
  const { language } = useTheme();
  const t = translations[language];
  
  return { t, language };
}
