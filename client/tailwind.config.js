/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                slate: {
                    925: '#0c1222',
                    950: '#020617',
                },
                google: {
                    blue: '#4285f4',
                    red: '#ea4335',
                    yellow: '#fbbc04',
                    green: '#34a853',
                },
            },
            fontFamily: {
                'sans': ['"Google Sans"', '"Product Sans"', 'Inter', 'system-ui', 'sans-serif'],
                'display': ['"DM Serif Display"', 'Georgia', 'serif'],
                'body': ['"Google Sans"', '"Product Sans"', 'Inter', 'system-ui', 'sans-serif'],
            },
            fontSize: {
                'hero': ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
                'section': ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
            },
            boxShadow: {
                'soft': '0 2px 20px rgba(0,0,0,0.04)',
                'card': '0 4px 24px rgba(0,0,0,0.06)',
                'card-hover': '0 8px 30px rgba(0,0,0,0.1)',
                'elevated': '0 8px 40px rgba(0,0,0,0.08)',
                'glass': '0 4px 30px rgba(0,0,0,0.05)',
                'glow-blue': '0 4px 20px rgba(66,133,244,0.15)',
                'glow-green': '0 4px 20px rgba(52,168,83,0.15)',
            },
            animation: {
                'fade-up': 'fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) forwards',
                'fade-in': 'fadeIn 0.4s ease forwards',
                'bounce-in': 'bounceIn 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards',
                'shimmer': 'shimmer 2s linear infinite',
                'spin-slow': 'spin 8s linear infinite',
                'gradient-shift': 'gradientShift 6s ease infinite',
            },
            keyframes: {
                fadeUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                bounceIn: {
                    '0%': { opacity: '0', transform: 'scale(0.9)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
                gradientShift: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
            },
        },
    },
    plugins: [],
}
