import i18n, { TFunction } from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from 'locales/en.json';

const resources = {
    en: {
        translation: en,
    },
};

export const i18nInit = (): Promise<TFunction> =>
    i18n.use(initReactI18next).init({
        resources,
        lng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });
