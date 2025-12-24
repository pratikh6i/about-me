import { motion } from 'framer-motion';

function PlaceholderSVG({
    color = 'blue',
    width = 120,
    height = 120,
    className = ''
}) {
    const colors = {
        blue: {
            primary: '#6366f1',
            secondary: '#a855f7',
            tertiary: '#ec4899'
        },
        gold: {
            primary: '#fbbf24',
            secondary: '#f97316',
            tertiary: '#fde047'
        },
        green: {
            primary: '#10b981',
            secondary: '#06b6d4',
            tertiary: '#34d399'
        },
        purple: {
            primary: '#a855f7',
            secondary: '#6366f1',
            tertiary: '#c084fc'
        }
    };

    const palette = colors[color] || colors.blue;

    return (
        <motion.svg
            width={width}
            height={height}
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
        >
            <defs>
                <linearGradient id={`grad1-${color}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor={palette.primary} stopOpacity="0.8" />
                    <stop offset="50%" stopColor={palette.secondary} stopOpacity="0.6" />
                    <stop offset="100%" stopColor={palette.tertiary} stopOpacity="0.4" />
                </linearGradient>
                <linearGradient id={`grad2-${color}`} x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor={palette.tertiary} stopOpacity="0.6" />
                    <stop offset="100%" stopColor={palette.primary} stopOpacity="0.3" />
                </linearGradient>
                <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {/* Background Circle */}
            <motion.circle
                cx="60"
                cy="60"
                r="55"
                fill={`url(#grad1-${color})`}
                opacity="0.15"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Abstract Shapes */}
            <motion.path
                d="M30 60C30 43.431 43.431 30 60 30C76.569 30 90 43.431 90 60C90 76.569 76.569 90 60 90"
                stroke={palette.primary}
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
                filter="url(#glow)"
                animate={{ pathLength: [0, 1, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.path
                d="M45 45L75 45L75 75L45 75Z"
                stroke={palette.secondary}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                opacity="0.6"
                animate={{ rotate: [0, 45, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformOrigin: 'center' }}
            />

            {/* Center Dot */}
            <motion.circle
                cx="60"
                cy="60"
                r="8"
                fill={`url(#grad2-${color})`}
                animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Decorative Lines */}
            <motion.line
                x1="25"
                y1="60"
                x2="35"
                y2="60"
                stroke={palette.tertiary}
                strokeWidth="2"
                strokeLinecap="round"
                animate={{ x1: [25, 20, 25], x2: [35, 30, 35] }}
                transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.line
                x1="85"
                y1="60"
                x2="95"
                y2="60"
                stroke={palette.tertiary}
                strokeWidth="2"
                strokeLinecap="round"
                animate={{ x1: [85, 90, 85], x2: [95, 100, 95] }}
                transition={{ duration: 2, repeat: Infinity }}
            />
        </motion.svg>
    );
}

export default PlaceholderSVG;
