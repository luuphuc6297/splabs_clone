import dayjs from 'dayjs';
import i18n from 'i18next';
import { en, vn } from 'languages';
import { initReactI18next } from 'react-i18next';
import { AVAILABLE_LANGUAGES, DEFAULT_LANGUAGE_KEY, isBrowser } from 'utils';

dayjs.locale(DEFAULT_LANGUAGE_KEY);

i18n.use(initReactI18next).init({
    defaultNS: 'common',
    lng: DEFAULT_LANGUAGE_KEY,
    fallbackLng: DEFAULT_LANGUAGE_KEY,
    interpolation: {
        escapeValue: false, // React already safes from xss
    },
    resources: {
        en: {
            translation: en,
        },
        vi: {
            translation: vn,
        },
    },
});

i18n.on('languageChanged', (langKey) => {
    const language = AVAILABLE_LANGUAGES.find(({ key }) => key === langKey);
    dayjs.locale(langKey);
    if (isBrowser) {
        document.documentElement.lang = langKey;
        document.documentElement.dir = language?.dir ?? 'ltr';
        document.documentElement.style.fontSize = `${
            (language?.fontScale ?? 1) * 100
        }%`;
    }
});

export default i18n;
