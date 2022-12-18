import i18n from 'i18next';

export const DEFAULT_LANGUAGE_KEY = 'en';

export const AVAILABLE_LANGUAGES = [
    {
        key: 'en',
    },
];

export const getLanguage = () => {
    return (
        i18n.language ||
        (typeof window !== 'undefined' && window.localStorage.i18nextLng) ||
        'en'
    );
};
