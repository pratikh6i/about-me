import { createContext, useContext, useState, useCallback } from 'react';
import translations from '../data/translations';

// Create the Language Context
const LanguageContext = createContext(null);

// Language Provider Component
export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState('en');
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Toggle between English and Marathi with smooth transition
    const toggleLanguage = useCallback(() => {
        setIsTransitioning(true);

        // Wait for fade out, then change language
        setTimeout(() => {
            setLanguage(prev => prev === 'en' ? 'mr' : 'en');

            // Wait a bit then fade back in
            setTimeout(() => {
                setIsTransitioning(false);
            }, 50);
        }, 200);
    }, []);

    // Get translation for a specific key
    const t = useCallback((key) => {
        return translations[language]?.[key] || translations.en[key] || key;
    }, [language]);

    // Check if current language is Marathi
    const isMarathi = language === 'mr';

    // Get font class based on language
    const fontClass = isMarathi ? 'font-marathi' : '';

    const value = {
        language,
        setLanguage,
        toggleLanguage,
        t,
        isMarathi,
        isTransitioning,
        fontClass,
        translations: translations[language],
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

// Custom hook to use the Language Context
export function useLanguage() {
    const context = useContext(LanguageContext);

    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }

    return context;
}

export default LanguageContext;
