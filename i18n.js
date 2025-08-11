import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en/translation.json';
import id from './locales/id/translation.json';

i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    resources: {
        en: { translation: en },
        id: { translation: id }
    },
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false
    }
});

export default i18n;
