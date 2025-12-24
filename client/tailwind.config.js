/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                marathi: ['Mukta', 'Noto Sans Devanagari', 'sans-serif'],
            },
            colors: {
                'bg-primary': '#0a0a0f',
                'bg-secondary': '#12121a',
                'accent-blue': '#6366f1',
                'accent-purple': '#a855f7',
                'accent-pink': '#ec4899',
                'accent-cyan': '#06b6d4',
                'accent-green': '#10b981',
                'accent-orange': '#f97316',
                'accent-gold': '#fbbf24',
            },
            borderRadius: {
                '3xl': '1.5rem',
            },
        },
    },
    plugins: [],
}
