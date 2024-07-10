import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const localStorageLanguage = localStorage.getItem('i18nextLng');

i18n
  .use(initReactI18next)
  .use(Backend)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    lng: localStorageLanguage || 'en',
    detection: {
      order: ['navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
      lookupFromPathIndex: 0,
      // Convert detected language to lowercase primary code
      convertDetectedLanguage: (lng) => {
        const primaryCode = lng.split('-')[0].toLowerCase();
        return ['en', 'ar', 'tr'].includes(primaryCode) ? primaryCode : 'en'; // Fallback to 'en' if not in supported languages
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });

const languages = ['en', 'tr', 'ar'];

const rtlLanguages = ['ar'];

const isRtl = () => rtlLanguages.includes(i18n.language);

export default i18n;

export { isRtl, languages };


