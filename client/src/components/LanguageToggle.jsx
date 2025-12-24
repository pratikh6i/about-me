import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

function LanguageToggle() {
    const { language, toggleLanguage, t } = useLanguage();

    return (
        <div className="pill-toggle">
            <motion.button
                onClick={toggleLanguage}
                className={`pill-option ${language === 'en' ? 'active' : ''}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Switch to English"
            >
                {t('english')}
            </motion.button>

            <motion.button
                onClick={toggleLanguage}
                className={`pill-option font-marathi ${language === 'mr' ? 'active' : ''}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Switch to Marathi"
            >
                {t('marathi')}
            </motion.button>
        </div>
    );
}

export default LanguageToggle;
