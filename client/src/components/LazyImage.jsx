import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PlaceholderSVG from './PlaceholderSVG';

function LazyImage({
    src,
    alt,
    className = '',
    placeholderColor = 'blue',
    ...props
}) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    const handleLoad = () => {
        setIsLoaded(true);
    };

    const handleError = () => {
        setHasError(true);
        setIsLoaded(true);
    };

    return (
        <div className={`image-container relative overflow-hidden ${className}`} {...props}>
            <AnimatePresence mode="wait">
                {!isLoaded && !hasError && (
                    <motion.div
                        key="skeleton"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 skeleton"
                    />
                )}
            </AnimatePresence>

            {hasError ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="w-full h-full flex items-center justify-center"
                >
                    <PlaceholderSVG color={placeholderColor} />
                </motion.div>
            ) : (
                <motion.img
                    src={src}
                    alt={alt}
                    loading="lazy"
                    onLoad={handleLoad}
                    onError={handleError}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isLoaded ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-cover"
                />
            )}
        </div>
    );
}

export default LazyImage;
