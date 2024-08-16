import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './public/locales/en/translation.json';
import ruTranslations from './public/locales/ru/translation.json';
import uzTranslations from './public/locales/uz/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      ru: { translation: ruTranslations },
      uz: { translation: uzTranslations },
    },
    lng: localStorage.getItem('i18nextLng') || 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false, // optional, for server-side rendering
    },
    detection: {
      order: ['localStorage', 'cookie', 'navigator'], // Check the order of detection
      caches: ['localStorage'], // Cache language in localStorage
    },
  });

i18n.on('languageChanged', (lng) => {
  localStorage.setItem('i18nextLng', lng); // Save language to localStorage
});

export default i18n;
