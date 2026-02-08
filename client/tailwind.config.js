/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: 'hsl(165, 75%, 95%)',
                    100: 'hsl(165, 75%, 85%)',
                    200: 'hsl(165, 75%, 75%)',
                    300: 'hsl(165, 75%, 65%)',
                    400: 'hsl(165, 80%, 55%)',
                    500: 'hsl(165, 80%, 45%)',
                    600: 'hsl(165, 85%, 35%)',
                    700: 'hsl(165, 85%, 30%)',
                    800: 'hsl(165, 85%, 25%)',
                    900: 'hsl(165, 85%, 20%)',
                },
                secondary: {
                    50: 'hsl(35, 90%, 95%)',
                    100: 'hsl(35, 90%, 85%)',
                    200: 'hsl(35, 90%, 75%)',
                    300: 'hsl(35, 90%, 65%)',
                    400: 'hsl(35, 90%, 55%)',
                    500: 'hsl(35, 85%, 50%)',
                    600: 'hsl(35, 85%, 40%)',
                    700: 'hsl(35, 85%, 35%)',
                },
                accent: {
                    50: 'hsl(330, 65%, 95%)',
                    100: 'hsl(330, 65%, 85%)',
                    200: 'hsl(330, 65%, 75%)',
                    300: 'hsl(330, 70%, 65%)',
                    400: 'hsl(330, 70%, 60%)',
                    500: 'hsl(330, 70%, 50%)',
                    600: 'hsl(330, 70%, 40%)',
                },
                neutral: {
                    50: 'hsl(180, 15%, 98%)',
                    100: 'hsl(180, 12%, 95%)',
                    200: 'hsl(180, 10%, 90%)',
                    300: 'hsl(180, 8%, 80%)',
                    400: 'hsl(180, 8%, 60%)',
                    500: 'hsl(180, 10%, 45%)',
                    600: 'hsl(180, 15%, 30%)',
                    700: 'hsl(180, 20%, 20%)',
                    800: 'hsl(180, 25%, 15%)',
                    900: 'hsl(180, 25%, 10%)',
                },
            },
            fontFamily: {
                'display': ['Outfit', 'sans-serif'],
                'body': ['Inter', 'sans-serif'],
                'accent': ['Playfair Display', 'serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out',
                'fade-in-up': 'fadeInUp 0.6s ease-out',
                'fade-in-down': 'fadeInDown 0.6s ease-out',
                'slide-in-left': 'slideInLeft 0.5s ease-out',
                'slide-in-right': 'slideInRight 0.5s ease-out',
                'scale-in': 'scaleIn 0.4s ease-out',
                'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
                'shimmer': 'shimmer 2s infinite linear',
                'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
                'float': 'float 3s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeInDown: {
                    '0%': { opacity: '0', transform: 'translateY(-30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideInLeft: {
                    '0%': { opacity: '0', transform: 'translateX(-50px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                slideInRight: {
                    '0%': { opacity: '0', transform: 'translateX(50px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                scaleIn: {
                    '0%': { opacity: '0', transform: 'scale(0.9)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
                bounceSubtle: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
                pulseGlow: {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(45, 212, 191, 0.3)' },
                    '50%': { boxShadow: '0 0 40px rgba(45, 212, 191, 0.6)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
                    '50%': { transform: 'translateY(-10px) rotate(2deg)' },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'shimmer-gradient': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
            },
        },
    },
    plugins: [],
}
