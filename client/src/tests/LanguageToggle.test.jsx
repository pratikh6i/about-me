import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { LanguageProvider, useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from '../components/LanguageToggle';

// Mock framer-motion to avoid animation issues in tests
vi.mock('framer-motion', () => ({
    motion: {
        div: ({ children, ...props }) => <div {...props}>{children}</div>,
        button: ({ children, ...props }) => <button {...props}>{children}</button>,
        span: ({ children, ...props }) => <span {...props}>{children}</span>,
    },
    AnimatePresence: ({ children }) => <>{children}</>,
}));

// Test component that displays current language
function LanguageDisplay() {
    const { language, t, isMarathi } = useLanguage();
    return (
        <div>
            <span data-testid="current-language">{language}</span>
            <span data-testid="is-marathi">{isMarathi.toString()}</span>
            <span data-testid="greeting">{t('greeting')}</span>
        </div>
    );
}

describe('LanguageContext', () => {
    it('provides default English language', () => {
        render(
            <LanguageProvider>
                <LanguageDisplay />
            </LanguageProvider>
        );

        expect(screen.getByTestId('current-language')).toHaveTextContent('en');
        expect(screen.getByTestId('is-marathi')).toHaveTextContent('false');
    });

    it('provides correct translation for English', () => {
        render(
            <LanguageProvider>
                <LanguageDisplay />
            </LanguageProvider>
        );

        expect(screen.getByTestId('greeting')).toHaveTextContent("Hey, I'm");
    });
});

describe('LanguageToggle', () => {
    it('renders both language options', () => {
        render(
            <LanguageProvider>
                <LanguageToggle />
            </LanguageProvider>
        );

        expect(screen.getByLabelText('Switch to English')).toBeInTheDocument();
        expect(screen.getByLabelText('Switch to Marathi')).toBeInTheDocument();
    });

    it('shows EN as active by default', () => {
        render(
            <LanguageProvider>
                <LanguageToggle />
            </LanguageProvider>
        );

        const enButton = screen.getByLabelText('Switch to English');
        expect(enButton).toHaveClass('active');
    });

    it('toggles language when clicked', async () => {
        render(
            <LanguageProvider>
                <LanguageToggle />
                <LanguageDisplay />
            </LanguageProvider>
        );

        // Initially English
        expect(screen.getByTestId('current-language')).toHaveTextContent('en');

        // Click Marathi button
        const mrButton = screen.getByLabelText('Switch to Marathi');
        fireEvent.click(mrButton);

        // Wait for language to change (due to transition delay)
        await waitFor(() => {
            expect(screen.getByTestId('current-language')).toHaveTextContent('mr');
        }, { timeout: 500 });
    });

    it('updates translations when language changes', async () => {
        render(
            <LanguageProvider>
                <LanguageToggle />
                <LanguageDisplay />
            </LanguageProvider>
        );

        // Initially English greeting
        expect(screen.getByTestId('greeting')).toHaveTextContent("Hey, I'm");

        // Toggle to Marathi
        fireEvent.click(screen.getByLabelText('Switch to Marathi'));

        // Wait for Marathi greeting
        await waitFor(() => {
            expect(screen.getByTestId('greeting')).toHaveTextContent('नमस्कार, मी');
        }, { timeout: 500 });
    });
});

describe('Translations', () => {
    it('returns key if translation is missing', () => {
        function MissingKeyTest() {
            const { t } = useLanguage();
            return <span data-testid="missing">{t('nonExistentKey')}</span>;
        }

        render(
            <LanguageProvider>
                <MissingKeyTest />
            </LanguageProvider>
        );

        expect(screen.getByTestId('missing')).toHaveTextContent('nonExistentKey');
    });
});
