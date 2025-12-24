import { motion } from 'framer-motion';

function BentoCard({
    children,
    className = '',
    span = 1,
    rowSpan = 1,
    delay = 0,
    gradient = false,
    trophy = false,
    onClick,
    href,
    ...props
}) {
    const spanClass = span === 1 ? 'span-1' :
        span === 2 ? 'span-2' :
            span === 3 ? 'span-3' : 'span-4';

    const rowSpanClass = rowSpan === 2 ? 'row-span-2' : '';

    const baseClasses = `glass-card p-6 ${spanClass} ${rowSpanClass} ${className}`;
    const trophyClass = trophy ? 'trophy-card' : '';
    const gradientClass = gradient ? 'gradient-border' : '';

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 20,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                delay: delay,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    const hoverVariants = {
        scale: 1.02,
        transition: {
            duration: 0.2,
            ease: 'easeInOut'
        }
    };

    const tapVariants = {
        scale: 0.98
    };

    const Component = href ? motion.a : motion.div;
    const linkProps = href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {};

    return (
        <Component
            className={`${baseClasses} ${trophyClass} ${gradientClass}`}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={hoverVariants}
            whileTap={onClick || href ? tapVariants : undefined}
            onClick={onClick}
            style={{ cursor: onClick || href ? 'pointer' : 'default' }}
            {...linkProps}
            {...props}
        >
            {children}
        </Component>
    );
}

export default BentoCard;
